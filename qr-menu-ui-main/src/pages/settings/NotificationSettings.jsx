import React from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import CommonWrapper from '../../wrappers/CommonWrapper';

const NotificationSettings = () => {
	return (
		<CommonWrapper header='Notifications'>
			<Container fluid className='py-3'>
				<div className='d-flex justify-content-center'>
					<Card className='mt-3'>
						<Card.Body>
							<Form>
								<div className='row'>
									<div className='col-10 d-flex flex-column'>
										<h5>Allow SMS</h5>
										<p className='font-card-sub-text'>
											Our new products and offers will be sent on your inbox.
										</p>
									</div>
									<div className='col-2'>
										<Form.Check type='switch' id='sms-switch' />
									</div>
								</div>
								<div className='row'>
									<div className='col-10 d-flex flex-column'>
										<h5>Allow Email</h5>
										<p className='font-card-sub-text'>
											Our new products and offers will be sent on your email address.
										</p>
									</div>
									<div className='col-2'>
										<Form.Check type='switch' id='sms-switch' />
									</div>
								</div>
							</Form>
						</Card.Body>
					</Card>
				</div>
			</Container>
		</CommonWrapper>
	);
};

export default NotificationSettings;
