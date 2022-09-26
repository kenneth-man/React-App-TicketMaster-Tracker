import { IFlexComponentProps } from '../../utils/interfaces';

const Column = ({
	children,
	fullWidth,
	fullHeight,
	fullPageSection,
	alignItems,
	justifyContent,
	extraClasses,
	inlineStyle
}: IFlexComponentProps): JSX.Element => (
	<div
		className={`
			flex flex-col
			${fullWidth && 'w-full'}
			${fullHeight && 'h-full'}
			${fullPageSection && 'min-h-full'}
			${alignItems || 'items-center'}
			${justifyContent}
			${extraClasses}
		`}
		style={inlineStyle}
	>
		{children}
	</div>
);

export default Column;
