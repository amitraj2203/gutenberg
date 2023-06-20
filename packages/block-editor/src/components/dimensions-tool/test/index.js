/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * WordPress dependencies
 */
import {
	Panel,
	__experimentalToolsPanel as ToolsPanel,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import DimensionsTool from '../';

const panelId = 'panel-id';

describe( 'DimensionsTool', () => {
	it( 'when aspect ratio is original scale and aspect ratio should be removed', async () => {
		const user = userEvent.setup();
		const onChangeProp = jest.fn();

		const initialValue = { aspectRatio: '16/9', scale: 'cover' };

		const { container } = render(
			<Panel>
				<ToolsPanel
					label="Dimensions"
					panelId={ panelId }
					resetAll={ () => {} }
				>
					<DimensionsTool
						panelId={ panelId }
						onChange={ ( nextValue ) => {
							onChangeProp( nextValue );
						} }
						value={ initialValue }
					/>
				</ToolsPanel>
			</Panel>
		);
		const aspectRatioSelect = screen.getByRole( 'combobox', {
			name: 'Aspect ratio',
		} );

		await user.selectOptions( aspectRatioSelect, 'auto' );

		expect( onChangeProp ).toHaveBeenCalledWith( {} );

		expect( aspectRatioSelect ).toHaveValue( 'auto' );
	} );
} );
