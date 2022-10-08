import { NavLink, Link } from 'react-router-dom';
import { ICommonLinkProps } from './ICommonLinkProps';
import { navLinkStylesData, linkStylesData } from '../../constants/commonLinkStylesData';
import { commonLinkType } from '../../utils/enums';

const CommonLink = ({
	type, href, children, target, extraClasses
}: ICommonLinkProps): JSX.Element => (
	<>
		{
			type === commonLinkType.NAVLINK
			&& (
				<NavLink
					className={
						// eslint-disable-next-line @typescript-eslint/typedef
						({ isActive }) => (
							isActive
								? `fill-blue-400 text-blue-400 decoration-blue-400 ${navLinkStylesData}`
								: navLinkStylesData
						)
					}
					end
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
						${linkStylesData}
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
					className={extraClasses}
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
						${linkStylesData}
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
