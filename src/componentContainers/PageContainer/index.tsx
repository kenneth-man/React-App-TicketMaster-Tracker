/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { Context } from '../../context';
import { IPageContainerProps } from './IPageContainerProps';
import { Page } from '../../components';

const PageContainer = ({
	children, alignItems, justifyContent, backgroundImage, backgroundGradient,
	backgroundSize, backgroundPosition, backgroundAttachment, backgroundRepeat, extraClasses
}: IPageContainerProps): JSX.Element => {
	const { loading, error }: any = useContext(Context);

	return (
		<Page
			loading={loading}
			error={error}
			alignItems={alignItems}
			justifyContent={justifyContent}
			backgroundImage={backgroundImage}
			backgroundGradient={backgroundGradient}
			backgroundSize={backgroundSize}
			backgroundPosition={backgroundPosition}
			backgroundAttachment={backgroundAttachment}
			backgroundRepeat={backgroundRepeat}
			extraClasses={extraClasses}
		>
			{children}
		</Page>
	);
};

export default PageContainer;
