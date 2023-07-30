/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	RangeControl,
	AnglePickerControl,
	ColorPicker,
} from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		rotateAngle,
		offSetShadowVertical,
		offSetShadowHorizontal,
		shadowBlur,
		shadowColor,
	} = attributes;
	const { rotateAngle: rotate } = attributes;

	const setAngle = ( val ) => {
		setAttributes( { rotateAngle: val } );
	};
	const onChangeoffSetShadowVertical = ( val ) => {
		setAttributes( { offSetShadowVertical: val } );
	};
	const onChangeoffSetShadowHorizontal = ( val ) => {
		setAttributes( { offSetShadowHorizontal: val } );
	};
	const onChangeshadowBlur = ( val ) => {
		setAttributes( { shadowBlur: val } );
	};
	const onChangeshadowColor = ( val ) => {
		setAttributes( { shadowColor: val } );
	};

	const transformStyles = {
		transform: `rotate(${ rotateAngle }deg)`,
		boxShadow: `${ offSetShadowVertical }px ${ offSetShadowHorizontal }px ${ shadowBlur }px ${ shadowColor }`,
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Banner Settings', 'rotating-banner' ) }>
					<AnglePickerControl
						label={ __( 'Rotate Element', 'rotating-banner' ) }
						value={ rotate }
						onChange={ setAngle }
						__nextHasNoMarginBottom
					/>
					<RangeControl
						label={ __(
							'Vertical Shadow Offset',
							'rotating-banner'
						) }
						value={ offSetShadowVertical }
						onChange={ onChangeoffSetShadowVertical }
						min={ 0 }
						max={ 50 }
					/>
					<RangeControl
						label={ __(
							'Horizontal Shadow Offset',
							'rotating-banner'
						) }
						value={ offSetShadowHorizontal }
						onChange={ onChangeoffSetShadowHorizontal }
						min={ 0 }
						max={ 50 }
					/>
					<RangeControl
						label={ __( 'Shadow Blur', 'rotating-banner' ) }
						value={ shadowBlur }
						onChange={ onChangeshadowBlur }
						min={ 0 }
						max={ 50 }
					/>
					<ColorPicker
						label={ __( 'Shadow Colour', 'rotating-banner' ) }
						color={ shadowColor }
						onChange={ onChangeshadowColor }
						enableAlpha
						defaultValue="#000"
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps( { style: { ...transformStyles } } ) }>
				<InnerBlocks />
			</div>
		</>
	);
}
