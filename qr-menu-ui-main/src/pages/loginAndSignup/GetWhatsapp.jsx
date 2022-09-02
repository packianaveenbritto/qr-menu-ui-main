import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import LoginPageWrapper from '../../wrappers/LoginPageWrapper';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const GetWhatsapp = () => {
	const [value, setValue] = useState();
	const navigate = useNavigate();
	return (
		<>
			<LoginPageWrapper header='Enter Your WhatsApp'>
				<Container fluid className='py-3'>
					<p className='py-5' style={{ fontSize: '14px' }}>
						We will send you a WhatsApp message witha one-time verification code
					</p>
					<PhoneInput
						country={'us'}
						value={value}
						onChange={(phone) => setValue(phone)}
						inputStyle={{
							minWidth: '100%',
						}}
						placeholder='WhatsApp Number'
						containerClass='MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root'
					/>
					<p className='py-5' style={{ fontSize: '12px', textAlign: 'center' }}>
						Don't have a WhatsApp number?
						<span className='text-primary-color'>
							<a> Click here</a>
						</span>
					</p>
					<div className='d-grid mt-5'>
						<Button
							className='add-to-cart-button-full'
							type='submit'
							size='lg'
							onClick={() => navigate('/verify-account')}>
							CONTINUE
						</Button>
					</div>
				</Container>
			</LoginPageWrapper>
		</>
	);
}

export default GetWhatsapp;
