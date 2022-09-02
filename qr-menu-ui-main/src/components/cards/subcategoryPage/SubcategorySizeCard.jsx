import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Card } from 'react-bootstrap';

const SubcategorySizeCard = ({ data }) => {
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
									<FormControlLabel
										value='start'
										control={
											<Checkbox
												sx={{
													'& .MuiSvgIcon-root': {
														fontSize: 16,
														borderRadius: 20,
														color: '#AE9C67',
													},
												}}
											/>
										}
										label={
											<span
												style={{
													color: '#242323',
													fontSize: '12px',
												}}>
												{data.price}
											</span>
										}
										labelPlacement='start'
									/>
								</div>
							</div>
						</>
					);
				})}
			</Card>
		</>
	);
};

export default SubcategorySizeCard;
