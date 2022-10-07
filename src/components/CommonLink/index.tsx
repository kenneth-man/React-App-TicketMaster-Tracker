import { NavLink, Link } from 'react-router-dom';
import { ICommonLinkProps } from './ICommonLinkProps';
import { commonLinkStylesData } from '../../constants/commonLinkStylesData';
import { commonLinkType } from '../../utils/enums';

const CommonLink = ({
	children, type, href, target, extraClasses
}: ICommonLinkProps): JSX.Element => (
	<>
		{
			type === commonLinkType.NAVLINK
			&& (
				<NavLink
					className="flex items-center space-x-1 fill-white text-white"
					to={href}
				>
					{children}
				</NavLink>
			)
		}
		{
			type === commonLinkType.LINK
			&& (
				<Link
					to={href}
					className={`
						${commonLinkStylesData}
						${extraClasses}
					`}
				>
					{children}
				</Link>
			)
		}
		{
			type === commonLinkType.LINKCLEAR
			&& (
				<Link
					to={href}
					className={`
						${extraClasses}
					`}
				>
					{children}
				</Link>
			)
		}
		{
			type === commonLinkType.ANCHOR
			&& (
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
		}
	</>
);

export default CommonLink;
