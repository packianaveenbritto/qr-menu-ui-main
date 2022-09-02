import React from 'react';
import CommonWrapper from '../../wrappers/CommonWrapper';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddCard = () => {
	const navigate = useNavigate();
	return (
		<CommonWrapper header='My Card'>
			<Container fluid className='py-3'>
				<p className='nav-font'>Enter your card details here</p>

				<Form>
					<Form.Group className='mb-3' controlId='cardName'>
						<Form.Label className='nav-font'>Name on card</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='cardNumber'>
						<Form.Label className='nav-font'>Card Number</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<div className='row'>
						<div className='col-6'>
							<Form.Label className='nav-font'>Expiration Date</Form.Label>
						</div>
						<div className='col-6'>
							<Form.Label className='nav-font'>Card Code (CCV)</Form.Label>
						</div>
					</div>
					<div className='row'>
						<div className='col-3 pe-0'>
							<Form.Group className='mb-3' controlId='expirationM'>
								<Form.Control
									className='text-center'
									type='text'
									placeholder='MM'
								/>
							</Form.Group>
						</div>
						<div className='col-3 pe-0'>
							<Form.Group className='mb-3' controlId='expirationD'>
								<Form.Control
									className='text-center'
									type='text'
									placeholder='DD'
								/>
							</Form.Group>
						</div>
						<div className='col-6'>
							<Form.Group className='mb-3' controlId='ccv'>
								<Form.Control type='text' />
							</Form.Group>
						</div>
					</div>
					<div className='d-grid mt-5 below-button'>
						<Button
							type='submit'
							size='lg'
							onClick={() => {
								navigate('/saved-cards');
							}}>
							ADD CARD
						</Button>
					</div>
				</Form>
			</Container>
		</CommonWrapper>
	);
};

export default AddCard;
