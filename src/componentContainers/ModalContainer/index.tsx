import { useContext } from 'react';
import { Context } from '../../context';
import { Modal } from '../../components';

const ModalContainer = (): JSX.Element => {
	const { isModalShown }: {
		isModalShown: boolean;
	} = useContext(Context);

	return (
		<Modal
			isModalShown={isModalShown}
		/>
	);
};

export default ModalContainer;
