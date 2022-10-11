import { useContext, useEffect } from 'react';
import { Context } from '../../context';
import { Modal } from '../../components';

const ModalContainer = (): JSX.Element => {
	const { isModalShown }: {
        isModalShown: boolean;
    } = useContext(Context);

	useEffect(() => {
		console.log(isModalShown);
	}, [isModalShown]);

	return (
		<Modal
			isModalShown={isModalShown}
		/>
	);
};

export default ModalContainer;
