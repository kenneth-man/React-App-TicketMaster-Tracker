import { IFlexComponentProps } from '../../utils/interfaces';

const Center = ({
	children,
	fullWidth,
	fullHeight,
	alignItems,
	justifyContent
}: IFlexComponentProps): JSX.Element => (
	<div
		className={`
			flex
			${fullWidth ? 'w-full' : 'w-max'}
			${fullHeight ? 'h-full' : 'w-max'}
			${alignItems || 'items-center'}
			${justifyContent || 'justify-center'}
		`}
	>
		{ children }
	</div>
);

export default Center;
