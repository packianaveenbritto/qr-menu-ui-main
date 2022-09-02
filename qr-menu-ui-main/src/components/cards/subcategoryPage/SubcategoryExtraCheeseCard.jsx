import React from 'react';
import { Card } from 'react-bootstrap';

const SubcategoryExtraCheeseCard = ({ data }) => {
	return (
		<>
			<Card className='border-0 custom-card' style={{ borderRadius: '10px' }}>
				{data.map((data, index) => {
					return (
						<>
							<div className='d-flex m-2'>
								<div
									style={{ height: '35px' }}
									className='col-2 d-flex justify-content-center align-items-center appetizers-card-img-continer'>
									<img width={40} height={30} src={data.img} alt='' />
								</div>
								<div
									style={{
										fontSize: '12px',
										color: '#242323',
									}}
									className=' col-5 d-flex justify-content-end align-items-center'>
									{data.description}
								</div>
								<div className='col-5 d-flex justify-content-end align-items-center'>
									<button
										className='card-button'
										style={{ fontSize: '10px', width: '40px' }}>
										ADD
									</button>
								</div>
							</div>
						</>
					);
				})}
			</Card>
		</>
	);
};

export default SubcategoryExtraCheeseCard;
