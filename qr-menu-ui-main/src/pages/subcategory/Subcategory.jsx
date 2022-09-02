import { TextareaAutosize } from '@mui/material';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SubcategoryExtraCheeseCard from '../../components/cards/subcategoryPage/SubcategoryExtraCheeseCard';
import SubcategoryExtraCrunchCard from '../../components/cards/subcategoryPage/SubcategoryExtraCrunchCard';
import SubcategorySidesCard from '../../components/cards/subcategoryPage/SubcategorySidesCard';
import SubcategorySizeCard from '../../components/cards/subcategoryPage/SubcategorySizeCard';
import QuantityAddRemove from '../../components/common/QuantityAddRemove';
import { SubcategoryPageHeader } from '../../components/headerbars/SubcategoryPageHeader';
import { sizeData, extraCheeseData, sidesData, extraCrunchData } from './data';

const Subcategory = () => {
	const [sectionName, setSectionName] = React.useState('Size');
	const navigate = useNavigate();
	return (
		<>
			<SubcategoryPageHeader
				onClickTile={(name) => {
					setSectionName(name);
				}}
				onClickBack={() => navigate(-1)}
			/>

			<Container fluid>
				<Row>
					<Col className='col-12'>
						<div
							className='mt-2'
							style={{
								fontSize: '14px',
								color: '#242323',
								fontWeight: 'bold',
							}}>
							{sectionName}
						</div>
						{sectionName === 'Size' && (
							<div className='mt-2'>
								<SubcategorySizeCard data={sizeData} />
							</div>
						)}

						{sectionName === 'Extra Crunch' && (
							<div className='mt-2'>
								<SubcategoryExtraCrunchCard data={extraCrunchData} />
							</div>
						)}

						{sectionName === 'Extra Cheese' && (
							<div className='mt-2'>
								<SubcategoryExtraCheeseCard data={extraCheeseData} />
							</div>
						)}

						{sectionName === 'Extra Side' && (
							<div className='mt-2'>
								<SubcategorySidesCard data={sidesData} />
							</div>
						)}
					</Col>

					<Col className='col-12 '>
						<div
							className='mt-2'
							style={{
								fontSize: '14px',
								color: '#242323',
								fontWeight: 'bold',
							}}>
							Write Instructions
						</div>
						<textarea
							style={{ fontSize: '12px' }}
							placeholder='Type here..'
							class='form-control form-control-custom mt-2'
							id='exampleFormControlTextarea1'
							rows='4'></textarea>
					</Col>

					<Col style={{ height: '200px' }} className='col-12'>
						<div
							className='mt-2'
							style={{
								fontSize: '14px',
								color: '#242323',
								fontWeight: 'bold',
							}}>
							Quantity
						</div>
						<div className='d-flex mt-2'>
							<div className='d-flex justify-content-center align-items-center '>
								<QuantityAddRemove value={0} />
							</div>

							<div className='w-100 d-flex justify-content-end align-items-center'>
								<span
									style={{
										color: '#242323',
										fontSize: '12px',
									}}>
									AED 0.00
								</span>
							</div>
						</div>
					</Col>
				</Row>

				<Row>
					<Col className='d-flex justify-content-center'>
						<button
							className='add-to-cart-button-full'
							onClick={() => navigate('/my-basket')}>
							ADD TO CART
						</button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Subcategory;
