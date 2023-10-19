/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { external } from '@wordpress/icons';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './constants';

export const viewPostAction = {
	id: 'view-post',
	label: __( 'View' ),
	type: ACTION_TYPES.primary,
	icon: external,
	isEligible( post ) {
		return post.status !== 'trash';
	},
	perform( post ) {
		document.location.href = post.link;
	},
};

export const postRevisionsAction = {
	id: 'view-post-revisions',
	label: __( 'View revisions' ),
	type: ACTION_TYPES.secondary,
	isEligible: ( post ) => {
		if ( post.status === 'trash' ) {
			return false;
		}
		const lastRevisionId =
			post?._links?.[ 'predecessor-version' ]?.[ 0 ]?.id ?? null;
		const revisionsCount =
			post?._links?.[ 'version-history' ]?.[ 0 ]?.count ?? 0;
		return lastRevisionId && revisionsCount > 1;
	},
	perform( post ) {
		const href = addQueryArgs( 'revision.php', {
			revision: post?._links?.[ 'predecessor-version' ]?.[ 0 ]?.id,
		} );
		document.location.href = href;
	},
};
