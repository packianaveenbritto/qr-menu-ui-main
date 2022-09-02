import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/common/logo.png';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className='start-page'>
			<div className='d-flex flex-column justify-content-center align-items-center h-100'>
				<div style={{ height: '40vh' }}>
					<img src={Logo} alt='logo' className='home-page-logo' />
				</div>
				<div style={{ height: '20vh' }}>
					<button className='btn login-btn' onClick={() => navigate('/login-whatsapp')}>
						Tap to Home
					</button>
				</div>

				<h3 style={{ color: '#ffffff' }}>Menu Name</h3>
			</div>
		</div>
	);
};

export default Home;
