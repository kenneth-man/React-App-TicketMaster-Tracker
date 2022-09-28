/* eslint-disable no-nested-ternary */
import { IPageProps } from './IPageProps';
// eslint-disable-next-line import/no-cycle
import { Column, Error, Loading } from '..';

const Page = ({
	children, loading, error, setError, alignItems, justifyContent, backgroundImage, backgroundGradient,
	backgroundSize, backgroundPosition, backgroundAttachment, backgroundRepeat, extraClasses
}: IPageProps): JSX.Element => (
	<Column
		fullWidth
		alignItems={alignItems}
		justifyContent={justifyContent}
		extraClasses={`
			flex-1 py-16 px-4
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
		{
			error
				? (
					<Error
						message={error.message}
						code={error.code}
						setError={setError}
					/>
				) : (
					loading
						? <Loading />
						: children
				)
		}
	</Column>
);

export default Page;
