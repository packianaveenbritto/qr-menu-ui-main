import React from 'react';
import { Card } from 'react-bootstrap';
import CommonWrapper from '../../wrappers/CommonWrapper';
import * as RiIcon from 'react-icons/ri'
import * as BsIcon from 'react-icons/bs';
import * as ImIcon from 'react-icons/im';
const AddressView = () => {
	return (
		<CommonWrapper header='My Address'>
			<div className='d-flex justify-content-center'>
				<Card className='mt-3' style={{ width: '95%' }}>
					<Card.Body>
						<div className='header-content'>
							<div className='ms-3 p-1 d-flex flex-column'>
								<div className='row mb-2'>
									<div className='col-2'>
										<ImIcon.ImLocation />
									</div>
									<div className='col-10 mx-0 px-0'>
										<div className='row'>
											<span className='nav-font'>
												123, Lorem ipsum dolor sit amet, consectetur, Lorem
												ipsum
											</span>
										</div>
									</div>
								</div>
								<div className='row mb-2'>
									<div className='col-2'>
										<RiIcon.RiUserFill />
									</div>
									<div className='col-10 mx-0 px-0'>
										<div className='row'>
											<span className='address-card nav-font'>
												Steve Smith
											</span>
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-2'>
										<BsIcon.BsFillTelephoneFill />
									</div>
									<div className='col-10 mx-0 px-0'>
										<div className='row'>
											<span className='address-card nav-font'>771234567</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Card.Body>
				</Card>
			</div>
		</CommonWrapper>
	);
};

export default AddressView;
