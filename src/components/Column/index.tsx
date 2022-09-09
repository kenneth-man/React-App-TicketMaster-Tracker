import { IFlexComponentProps } from '../../utils/interfaces';

const Column = ({
	children,
	fullWidth,
	fullHeight,
	alignItems,
	justifyContent
}: IFlexComponentProps): JSX.Element => (
	<div
		className={`
			flex flex-col
			${fullWidth ? 'w-full' : 'w-max'}
			${fullHeight ? 'h-full' : 'w-max'}
			${alignItems || 'items-center'}
			${justifyContent}
		`}
	>
		{ children }
	</div>
);

export default Column;
