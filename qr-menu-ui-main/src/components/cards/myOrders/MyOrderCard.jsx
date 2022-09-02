import React from 'react';
import { Card } from 'react-bootstrap';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MyOrderCard = ({ img, title, subcategoryName, qty, status, dateTime }) => {
	return (
		<>
			<Card className='border-0 custom-card p-2' style={{ borderRadius: '10px' }}>
				<div className='d-flex'>
					<div className='col-3'>
						<img src={img} alt='' />
					</div>
					<div className='col-6'>
						<div>
							<div className={`title d-flex justify-content-start`}>
								<span
									className='card-title-normal '
									style={{ fontSize: '12px', fontWeight: 'bold' }}>
									{title}
								</span>
							</div>
							<div className={`mt-1 d-flex justify-content-start`}>
								<span
									className='card-title-normal '
									style={{ fontSize: '12px', fontWeight: 'normal' }}>
									{qty} X {subcategoryName}
								</span>
							</div>
						</div>
					</div>
					<div className='col-3 d-flex flex-column'>
						<div
							style={{ fontSize: '8px', color: '#9F9F9F' }}
							className='d-flex justify-content-end'>
							{dateTime}
						</div>
						<div className='d-flex justify-content-end'>
							<Link to='/order-details'>
								<BiChevronRight color='black' size={20} />
							</Link>
						</div>
						<div
							style={{ fontWeight: '600', fontSize: '11px', color: '#AE9C67' }}
							className='mt-auto d-flex justify-content-end'>
							{status}
						</div>
					</div>
				</div>
			</Card>
		</>
	);
};

export default MyOrderCard;
