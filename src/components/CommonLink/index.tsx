import { Link } from 'react-router-dom';
import { ICommonLinkProps } from './ICommonLinkProps';
import { commonLinkStylesData } from '../../constants/commonLinkStylesData';

const CommonLink = ({
	children, isRouterLink, href, target, extraClasses
}: ICommonLinkProps): JSX.Element => (
	isRouterLink
		? (
			<Link
				to={href}
				className={`
					${commonLinkStylesData}
					${extraClasses}
				`}
			>
				{children}
			</Link>
		) : (
			<a
				href={href}
				target={target || '_blank'}
				className={`
					${commonLinkStylesData}
					${extraClasses}
				`}
			>
				{children}
			</a>
		)
);

export default CommonLink;
