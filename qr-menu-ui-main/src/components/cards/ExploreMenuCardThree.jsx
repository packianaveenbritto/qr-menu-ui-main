import { Checkbox } from '@mui/material';
import React from 'react';

const ExploreMenuCardThree = ({
	img,
	icon,
	title,
	subtitle,
	customizable,
	veg,
	priceChange,
	off,
	price,
	index,
	onCheck,
	selected,
}) => {
	return (
		<>
			<div>
				<div>
					<div className={`title d-flex justify-content-start align-items-center`}>
						<div className='col-11 d-flex'>
							<div className='card-title col-auto' style={{ fontSize: '12px' }}>
								{title}
							</div>
							<div className='dotted ms-1' />
						</div>

						<div className='ms-auto col-1'>
							<Checkbox
								onChange={onCheck}
								key={index}
								sx={{
									'& .MuiSvgIcon-root': {
										fontSize: 16,
										borderRadius: 20,
										color: '#AE9C67',
									},
								}}
							/>
						</div>
					</div>

					<div className={`sub-title d-flex justify-content-start`}>
						<span className='card-subtitle' style={{ fontSize: '12px' }}>
							{subtitle}
						</span>
					</div>

					<div className={`sub-title d-flex justify-content-start`}>
						{customizable && (
							<span
								className='fw-bold me-4'
								style={{
									fontSize: '12px',
									color: '#5565AD',
								}}>
								Customizable
							</span>
						)}
						{}
						<span
							className='fw-bold'
							style={{
								fontSize: '12px',
								color: veg ? '#07AD87' : '#AD5E6B',
							}}>
							{veg ? 'Veg' : 'Non Veg'}
						</span>

						<span
							className='fw-bold ms-auto'
							style={{
								fontSize: '10px',
								color: '#242323',
							}}>
							{price}
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExploreMenuCardThree;
