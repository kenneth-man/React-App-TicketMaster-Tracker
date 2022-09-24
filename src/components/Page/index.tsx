import { IPageProps } from './IPageProps';
import Column from '../Column';

const Page = ({
	children, alignItems, justifyContent, backgroundImage, backgroundGradient,
	backgroundSize, backgroundPosition, backgroundAttachment, backgroundRepeat, extraClasses
}: IPageProps): JSX.Element => (
	<Column
		fullWidth
		alignItems={alignItems}
		justifyContent={justifyContent}
		extraClasses={`
			Page flex-1
			${extraClasses}
		`}
		inlineStyle={
			backgroundImage
			&& (
				{
					backgroundImage: `
						linear-gradient(
							${backgroundGradient || 'rgba(0,0,0,0.5), rgba(0,0,0,0.5)'}
						),
						url(${backgroundImage})
					`,
					backgroundSize: backgroundSize || 'cover',
					backgroundPosition: backgroundPosition || 'center',
					backgroundAttachment: backgroundAttachment || 'scroll',
					backgroundRepeat: backgroundRepeat || 'no-repeat'
				}
			)
		}
	>
		{children}
	</Column>
);

export default Page;
