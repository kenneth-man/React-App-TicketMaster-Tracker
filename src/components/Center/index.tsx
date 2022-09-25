import { IFlexComponentProps } from '../../utils/interfaces';

const Center = ({
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
			flex
			${fullWidth ? 'w-full' : 'w-max'}
			${fullHeight ? 'h-full' : 'w-max'}
			${fullPageSection && 'min-h-full'}
			${alignItems || 'items-center'}
			${justifyContent || 'justify-center'}
			${extraClasses}
		`}
		style={inlineStyle}
	>
		{children}
	</div>
);

export default Center;
