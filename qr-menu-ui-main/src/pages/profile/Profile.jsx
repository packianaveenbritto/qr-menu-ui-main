import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import CommonWrapper from '../../wrappers/CommonWrapper';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from 'react-bootstrap/Button';
import 'react-phone-input-2/lib/material.css';

const Profile = () => {
	const [value, setValue] = useState();
	const [values, setValues] = useState({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	});
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<CommonWrapper header='Profile Info'>
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
					id='date'
					label='Birthday'
					type='date'
					fullWidth
					margin='normal'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					id='outlined-location'
					label='Location'
					variant='outlined'
					fullWidth
					margin='normal'
				/>
				<FormControl sx={{ width: '100%' }} variant='outlined' margin='normal'>
					<InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
					<OutlinedInput
						id='outlined-adornment-password'
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={handleChange('password')}
						fullWidth
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'>
									{values.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
				</FormControl>
				<div className='d-grid mt-5'>
					<Button className='add-to-cart-button-full' type='submit' size='lg'>
						Update Changes
					</Button>
				</div>
			</Container>
		</CommonWrapper>
	);
};

export default Profile;
