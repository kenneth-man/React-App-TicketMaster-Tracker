import { IPageProps } from './IPageProps';
// eslint-disable-next-line import/no-cycle
import { Column, Loading } from '..';

const Page = ({
	children, isLoading, alignItems, justifyContent, backgroundImage, backgroundGradient,
	backgroundSize, backgroundPosition, backgroundAttachment, backgroundRepeat, extraClasses
}: IPageProps): JSX.Element => (
	<Column
		fullWidth
		alignItems={alignItems}
		justifyContent={justifyContent}
		extraClasses={`
			flex-1
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
		{isLoading ? <Loading /> : children}
	</Column>
);

export default Page;
