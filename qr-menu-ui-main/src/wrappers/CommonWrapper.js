import React from 'react';
import { CommonHeader } from '../components/headerbars/CommonHeader';


const CommonWrapper = ({ children, header, closeButton }) => {
	const [show, setShow] = React.useState(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<CommonHeader onClick={handleShow} headingName={header} isclose={closeButton} />
			{children}
		</>
	);
};

export default CommonWrapper;
