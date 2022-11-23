/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useRefEffect } from '@wordpress/compose';
import { ENTER, BACKSPACE, DELETE } from '@wordpress/keycodes';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../store';

/**
 * Handles input for selections across blocks.
 */
export default function useInput() {
	const {
		__unstableIsFullySelected,
		getSelectedBlockClientIds,
		getSelectedBlockClientId,
		getBlockRootClientId,
		getBlockIndex,
		__unstableIsSelectionMergeable,
		hasMultiSelection,
	} = useSelect( blockEditorStore );
	const {
		replaceBlocks,
		__unstableSplitSelection,
		removeBlocks,
		__unstableDeleteSelection,
		__unstableExpandSelection,
		insertDefaultBlock,
		removeBlock,
	} = useDispatch( blockEditorStore );

	return useRefEffect( ( node ) => {
		function onBeforeInput( event ) {
			if ( ! hasMultiSelection() ) {
				return;
			}
			// Prevent the browser to format something when we have multiselection.
			if ( event.inputType?.startsWith( 'format' ) ) {
				event.preventDefault();
			}
		}

		function onKeyDown( event ) {
			if ( event.defaultPrevented ) {
				return;
			}

			if ( ! hasMultiSelection() ) {
				const { keyCode, target } = event;

				if (
					keyCode !== ENTER &&
					keyCode !== BACKSPACE &&
					keyCode !== DELETE
				) {
					return;
				}

				if ( target !== node ) {
					return;
				}

				const clientId = getSelectedBlockClientId();

				event.preventDefault();

				if ( keyCode === ENTER ) {
					insertDefaultBlock(
						{},
						getBlockRootClientId( clientId ),
						getBlockIndex( clientId ) + 1
					);
				} else {
					removeBlock( clientId );
				}

				return;
			}

			if ( event.keyCode === ENTER ) {
				event.preventDefault();
				if ( __unstableIsFullySelected() ) {
					replaceBlocks(
						getSelectedBlockClientIds(),
						createBlock( getDefaultBlockName() )
					);
				} else {
					__unstableSplitSelection();
				}
			} else if (
				event.keyCode === BACKSPACE ||
				event.keyCode === DELETE
			) {
				event.preventDefault();
				if ( __unstableIsFullySelected() ) {
					removeBlocks( getSelectedBlockClientIds() );
				} else if ( __unstableIsSelectionMergeable() ) {
					__unstableDeleteSelection( event.keyCode === DELETE );
				} else {
					__unstableExpandSelection();
				}
			} else if (
				// If key.length is longer than 1, it's a control key that doesn't
				// input anything.
				event.key.length === 1 &&
				! ( event.metaKey || event.ctrlKey )
			) {
				if ( __unstableIsSelectionMergeable() ) {
					__unstableDeleteSelection( event.keyCode === DELETE );
				} else {
					event.preventDefault();
					// Safari does not stop default behaviour with either
					// event.preventDefault() or node.contentEditable = false, so
					// remove the selection to stop browser manipulation.
					node.ownerDocument.defaultView
						.getSelection()
						.removeAllRanges();
				}
			}
		}

		function onCompositionStart( event ) {
			if ( ! hasMultiSelection() ) {
				return;
			}

			if ( __unstableIsSelectionMergeable() ) {
				__unstableDeleteSelection();
			} else {
				event.preventDefault();
				// Safari does not stop default behaviour with either
				// event.preventDefault() or node.contentEditable = false, so
				// remove the selection to stop browser manipulation.
				node.ownerDocument.defaultView.getSelection().removeAllRanges();
			}
		}

		function onInput( event ) {
			if ( event.__unstableRedirect === true ) {
				return;
			}

			if ( event.target !== node ) {
				return;
			}

			if ( hasMultiSelection() ) {
				return;
			}

			const { ownerDocument } = node;
			const { defaultView } = ownerDocument;
			const prototype = Object.getPrototypeOf( event );
			const constructorName = prototype.constructor.name;
			const Constructor = window[ constructorName ];
			const { anchorNode } = defaultView.getSelection();

			if ( ! anchorNode ) {
				return;
			}

			const anchorElement = (
				anchorNode.nodeType === anchorNode.ELEMENT_NODE
					? anchorNode
					: anchorNode.parentElement
			 ).closest( '[contenteditable]' );

			if ( ! anchorElement ) {
				return;
			}

			const init = {};

			for ( const key in event ) {
				init[ key ] = event[ key ];
			}

			const newEvent = new Constructor( event.type, init );
			newEvent.__unstableRedirect = true;
			const cancelled = ! anchorElement.dispatchEvent( newEvent );
			event.stopImmediatePropagation();

			if ( cancelled ) {
				event.preventDefault();
			}
		}

		const events = [
			'beforeinput',
			'input',
			'compositionstart',
			'compositionend',
			'compositionupdate',
			'keydown',
		];

		events.forEach( ( eventType ) => {
			node.addEventListener( eventType, onInput );
		} );

		// function onFocusOut( event ) {
		// 	if ( event.relatedTarget === null ) {
		// 		// The focus is lost, put it on the wrapper.
		// 		node.focus();
		// 	}
		// }

		// node.addEventListener( 'focusout', onFocusOut );

		node.addEventListener( 'beforeinput', onBeforeInput );
		node.addEventListener( 'keydown', onKeyDown );
		node.addEventListener( 'compositionstart', onCompositionStart );

		return () => {
			events.forEach( ( eventType ) => {
				node.removeEventListener( eventType, onInput );
			} );

			// node.removeEventListener( 'focusout', onFocusOut );

			node.removeEventListener( 'beforeinput', onBeforeInput );
			node.removeEventListener( 'keydown', onKeyDown );
			node.removeEventListener( 'compositionstart', onCompositionStart );
		};
	}, [] );
}
