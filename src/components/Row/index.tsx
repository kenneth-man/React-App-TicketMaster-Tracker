import { IFlexComponentProps } from '../../utils/interfaces';

const Row = ({
	children,
	fullWidth,
	fullHeight,
	fullPageSection,
	alignItems,
	justifyContent,
	extraClasses
}: IFlexComponentProps): JSX.Element => (
	<div
		className={`
			flex
			${fullWidth ? 'w-full' : 'w-max'}
			${fullHeight ? 'h-full' : 'w-max'}
			${fullPageSection ? 'min-h-full' : 'min-h-0'}
			${alignItems || 'items-center'}
			${justifyContent}
			${extraClasses}
		`}
	>
		{ children }
	</div>
);

export default Row;
