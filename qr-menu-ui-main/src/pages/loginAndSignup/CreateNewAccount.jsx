import React, { useState } from 'react';
import LoginPageWrapper from '../../wrappers/LoginPageWrapper';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { IconButton, TextField } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AppleLogo from '../../assets/loginIcons/apple.png';
import GoogleLogo from '../../assets/loginIcons/google.png';
import { useNavigate } from 'react-router-dom';

const CreateNewAccount = () => {
	const [value, setValue] = useState();
	const navigate = useNavigate();

	return (
		<>
			<LoginPageWrapper header='Create New Account'>
				<Container fluid className='py-3'>
					<TextField
						id='outlined-firstName'
						label='First Name'
						variant='outlined'
						fullWidth
						margin='normal'
					/>
					<TextField
						id='outlined-lastName'
						label='Last Name'
						variant='outlined'
						fullWidth
						margin='normal'
					/>
					<PhoneInput
						country={'us'}
						value={value}
						onChange={(phone) => setValue(phone)}
						inputStyle={{
							minWidth: '100%',
						}}
						containerClass='MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root'
					/>
					<TextField
						id='outlined-email'
						label='Email'
						variant='outlined'
						fullWidth
						margin='normal'
					/>
					<TextField
						id='outlined-password'
						label='Password'
						type='password'
						variant='outlined'
						fullWidth
						margin='normal'
					/>
					<p className='fw-light mb-0' style={{ fontSize: '12px' }}>
						Is at least 8 characters in length.
					</p>
					<p className='fw-light mb-4' style={{ fontSize: '12px' }}>
						Use Uppercase and lowercase letters
					</p>
					<div className='d-grid mb-3'>
						<Button
							type='submit'
							size='lg'
							style={{ fontSize: '16px' }}
							className='btn-primary-color h-100 p-3' onClick={() => navigate('/home')}>
							Create a new account
						</Button>
					</div>
					<p className='mb-4' style={{ fontSize: '12px', textAlign: 'center' }}>
						or
					</p>
					<div style={{ textAlign: 'center' }}>
						<IconButton color='primary' component='label'>
							<FacebookRoundedIcon fontSize='large' />
						</IconButton>
						<IconButton component='label'>
							<img src={GoogleLogo} style={{ width: '10vw' }} />
						</IconButton>
						<IconButton component='label'>
							<img src={AppleLogo} style={{ width: '6vw' }} />
						</IconButton>
					</div>
					<p className='mb-4' style={{ fontSize: '12px', textAlign: 'center' }}>
						Already have an account?{' '}
						<span className='text-primary-color'>
							<a> Login</a>
						</span>
					</p>
				</Container>
			</LoginPageWrapper>
		</>
	);
};

export default CreateNewAccount;
