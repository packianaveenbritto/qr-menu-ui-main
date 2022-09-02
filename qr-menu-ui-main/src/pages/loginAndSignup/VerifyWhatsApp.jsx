import React, { useState } from 'react';
import LoginPageWrapper from '../../wrappers/LoginPageWrapper';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { TextField, Typography } from '@mui/material';
import produce from 'immer';
import { useNavigate } from 'react-router-dom';
const VerifyWhatsApp = () => {
	const [value, setValue] = useState();
	const [mobile, setMobile] = useState('0771234567');
	const [pin, setPin] = useState({});
	const navigate = useNavigate();
	return (
		<>
			<LoginPageWrapper header='Verify your WhatsApp'>
				<Container fluid className='py-3'>
					<p className='py-5' style={{ fontSize: '14px' }}>
						We've sent you a WhatsApp with the verification code to {mobile}
					</p>
					<div className='d-flex flex-row'>
						<TextField
							hiddenLabel
							id='outlined-1'
							sx={{
								'& legend': { display: 'none' },
								'& fieldset': { top: 0 },
								'& div': { borderRadius: '10px' },
								'& input': {
									textAlign: 'center',
									color: `${pin.val1 ? 'white' : ''}`,
								},
							}}
							onChange={(e) => {
								const newVal = produce(pin, (val) => {
									val.val1 = e.target.value;
								});
								setPin(newVal);
							}}
							margin='normal'
							className={`mx-2 ${pin.val1 ? 'selected-text-box' : ''}`}
						/>
						<TextField
							hiddenLabel
							id='outlined-2'
							sx={{
								'& legend': { display: 'none' },
								'& fieldset': { top: 0 },
								'& div': { borderRadius: '10px' },
								'& input': {
									textAlign: 'center',
									color: `${pin.val2 ? 'white' : ''}`,
								},
							}}
							onChange={(e) => {
								const newVal = produce(pin, (val) => {
									val.val2 = e.target.value;
								});
								setPin(newVal);
							}}
							margin='normal'
							className={`mx-2 ${pin.val2 ? 'selected-text-box' : ''}`}
						/>
						<TextField
							hiddenLabel
							id='outlined-3'
							sx={{
								'& legend': { display: 'none' },
								'& fieldset': { top: 0 },
								'& div': { borderRadius: '10px' },
								'& input': {
									textAlign: 'center',
									color: `${pin.val3 ? 'white' : ''}`,
								},
							}}
							onChange={(e) => {
								const newVal = produce(pin, (val) => {
									val.val3 = e.target.value;
								});
								setPin(newVal);
							}}
							margin='normal'
							className={`mx-2 ${pin.val3 ? 'selected-text-box' : ''}`}
						/>
						<TextField
							hiddenLabel
							id='outlined-4'
							sx={{
								'& legend': { display: 'none' },
								'& fieldset': { top: 0 },
								'& div': { borderRadius: '10px' },
								'& input': {
									textAlign: 'center',
									color: `${pin.val4 ? 'white' : ''}`,
								},
							}}
							onChange={(e) => {
								const newVal = produce(pin, (val) => {
									val.val4 = e.target.value;
								});
								setPin(newVal);
							}}
							margin='normal'
							className={`mx-2 ${pin.val4 ? 'selected-text-box' : ''}`}
						/>
					</div>
					<p className='py-5' style={{ fontSize: '12px', textAlign: 'center' }}>
						I haven't recived the code.
						<span className='text-primary-color'>
							<a> Resend in 60 sec.</a>
						</span>
					</p>
					<div className='d-grid mt-5'>
						<Button
							className='add-to-cart-button-full'
							type='submit'
							size='lg'
							onClick={() => navigate('/create-account')}>
							CONTINUE
						</Button>
					</div>
				</Container>
			</LoginPageWrapper>
		</>
	);
};

export default VerifyWhatsApp;
