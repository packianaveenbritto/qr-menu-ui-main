import React from 'react';
import { MymenuPageHeader } from '../components/headerbars/MymenuPageHeader';
import Languages from '../components/sidebar/Languages';
import Sidebar from '../components/sidebar/Sidebar';

const MymenuPageWrapper = ({ children }) => {
	const [show, setShow] = React.useState(false);
	const [showLanguages, setShowLanguages] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<MymenuPageHeader onClick={handleShow} />
			<Sidebar
				showMenu={show}
				closeMenu={handleClose}
				onClickLanguage={(data) => {
					if (data === '') {
						setShowLanguages(true);
						setShow(false);
					}
				}}
			/>
			<Languages
				onClose={() => {
					setShowLanguages(false);
					setShow(true);
				}}
				show={showLanguages}
			/>

			{children}
		</>
	);
};

export default MymenuPageWrapper;
