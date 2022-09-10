import { IModalProps } from './IModalProps';

const Modal = ({ isModalShown }: IModalProps): JSX.Element => (
	<div
		className={`
			absolute w-full h-full bg-black/80 text-white
			${isModalShown ? 'visible z-50' : 'invisible -z-50'}
		`}
	>
		Modal
	</div>
);

export default Modal;
