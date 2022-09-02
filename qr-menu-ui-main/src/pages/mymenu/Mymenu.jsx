import React from 'react';
import Slider from '../../components/slider/Slider';
import MymenuPageWrapper from '../../wrappers/MymenuPageWrapper';
import food from '../../assets/mymenuPageIcons/FOOD.png';
import { Link, useNavigate } from 'react-router-dom';
import CardWithTextBackgroundImage from '../../components/cards/CardWithTextBackgroundImage';
import foodImg01 from '../../assets/mymenuPageIcons/foodImg01.png';
import foodImg02 from '../../assets/mymenuPageIcons/foodImg02.png';
import CardWithImage from '../../components/cards/CardWithImage';
import CustomCard from '../../components/cards/CustomCard';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CustomCard02 from '../../components/cards/CustomCard02';
import CustomCard03 from '../../components/cards/CustomCard03';
import CustomCard04 from '../../components/cards/CustomCard04';
import ViewCartButton from '../../components/common/ViewCartButton';

const Mymenu = () => {
	const navigate = useNavigate();
	const [cart, setCart] = React.useState([]);
	return (
		<>
			<Container fluid>
				<MymenuPageWrapper>
					<div className='p-2 '>
						<label className='custom-titile mb-2'>SPECAIL OFFERS</label>
						<Row className='d-flex justify-content-center'>
							<Slider>
								<Col className='col-xs-6'>
									<div>
										<img
											onClick={() => navigate('/subcategory')}
											width={'100%'}
											style={{
												minWidth: `261px`,
												height: `121px`,
											}}
											src={food}
											alt=''
										/>
									</div>
								</Col>
								<Col className='col-xs-6'>
									<div>
										<img
											onClick={() => navigate('/subcategory')}
											width={'100%'}
											style={{
												minWidth: `261px`,
												height: `121px`,
											}}
											src={food}
											alt=''
										/>
									</div>
								</Col>
							</Slider>
						</Row>
					</div>

					<div className='p-2'>
						<div className='d-flex align-items-center w-100 section-head-with-button'>
							<div className='custom-titile mb-2 col-6'>EXPLORE MENU</div>
							<div className='mb-2 d-flex d-flex justify-content-end col-6'>
								<Link className='label-button' to='/expore-menu'>
									<span>View All</span>
								</Link>
							</div>
						</div>

						<Row>
							<Slider>
								<Col className='col-xs-6'>
									<div
										onClick={() => navigate('/expore-menu')}
										className='h-100 w-100'>
										<CustomCard
											title={'FOOD NAME'}
											subtitle={'Lorem ipsum dolor sit amet,'}
											subtitleSize={'11px'}
											width={'122px'}
											height={'175px'}
											backImg={foodImg01}
											titlePossition={'start'}
											titleSize={'12px'}
											footerText={'AED 0.0'}
										/>
									</div>
								</Col>
								<Col className='col-xs-6 d-flex flex-column ms-1'>
									<div className='d-flex h-100 w-100'>
										<Col
											onClick={() => navigate('/expore-menu')}
											className='col-6'>
											<CustomCard02
												title={'FOOD NAME'}
												width={'95px'}
												height={'80px'}
												backImg={foodImg02}
												titlePossition={'start'}
												titleSize={'12px'}
											/>
										</Col>
										<Col
											onClick={() => navigate('/expore-menu')}
											className='col-xs-6 ms-1'>
											<CustomCard02
												title={'FOOD NAME'}
												width={'95px'}
												height={'80px'}
												backImg={foodImg02}
												titlePossition={'start'}
												titleSize={'12px'}
											/>
										</Col>
									</div>
									<div className='d-flex h-100 w-100 align-items-center'>
										<Col
											onClick={() => navigate('/expore-menu')}
											className='col-6'>
											<CustomCard02
												title={'FOOD NAME'}
												width={'95px'}
												height={'80px'}
												backImg={foodImg02}
												titlePossition={'start'}
												titleSize={'12px'}
											/>
										</Col>
										<Col
											onClick={() => navigate('/expore-menu')}
											className='col-xs-6 ms-1'>
											<CustomCard02
												title={'FOOD NAME'}
												width={'95px'}
												height={'80px'}
												backImg={foodImg02}
												titlePossition={'start'}
												titleSize={'12px'}
											/>
										</Col>
									</div>
								</Col>
							</Slider>
						</Row>
					</div>

					<div className='p-2'>
						<div className='d-flex align-items-center w-100 section-head-with-button'>
							<div className='custom-titile mb-2 col-6'>BEST SELLER</div>
						</div>

						<Row className='d-flex justify-content-center'>
							<Slider>
								<Col onClick={() => navigate('/subcategory')} className='col-xs-4'>
									<CustomCard
										title={'FOOD NAME'}
										subtitle={'Lorem ipsum dolor sit amet,'}
										subtitleSize={'11px'}
										width={'122px'}
										height={'170px'}
										backImg={foodImg01}
										titlePossition={'start'}
										titleSize={'12px'}
										footerText={'AED 0.0'}
									/>
								</Col>
								<Col onClick={() => navigate('/subcategory')} className='col-xs-4'>
									<CustomCard
										title={'FOOD NAME'}
										subtitle={'Lorem ipsum dolor sit amet,'}
										subtitleSize={'11px'}
										width={'122px'}
										height={'170px'}
										backImg={foodImg01}
										titlePossition={'start'}
										titleSize={'12px'}
										footerText={'AED 0.0'}
									/>
								</Col>
								<Col onClick={() => navigate('/subcategory')} className='col-xs-4'>
									<CustomCard
										title={'FOOD NAME'}
										subtitle={'Lorem ipsum dolor sit amet,'}
										subtitleSize={'11px'}
										width={'122px'}
										height={'170px'}
										backImg={foodImg01}
										titlePossition={'start'}
										titleSize={'12px'}
										footerText={'AED 0.0'}
									/>
								</Col>
							</Slider>
						</Row>

						<Row>
							<Col>
								<CustomCard03
									title={'FOOD NAME'}
									subtitle={'Lorem ipsum dolor sit amet,'}
									subtitleSize={'11px'}
									titleSize={'12px'}
									footerText={'AED 0.0'}
									height={'100px'}
									titlePossition={'start'}
									customizable
									onClickAdd={() => {
										setCart(['item']);
									}}
									onClickCard={() => navigate('/subcategory')}
								/>
								<CustomCard03
									title={'FOOD NAME'}
									subtitle={'Lorem ipsum dolor sit amet,'}
									subtitleSize={'11px'}
									titleSize={'12px'}
									footerText={'AED 0.0'}
									height={'100px'}
									titlePossition={'start'}
									customizable
									onClickAdd={() => {
										setCart(['item']);
									}}
									onClickCard={() => navigate('/subcategory')}
								/>
							</Col>
						</Row>
					</div>

					<Row className='p-2'>
						<Col>
							<div className='d-flex align-items-center w-100 section-head-with-button'>
								<div className='custom-titile mb-2 col-6'>EXPLORE MENU</div>
								<div className='mb-2 d-flex d-flex justify-content-end col-6'>
									<Link className='label-button' to='/expore-menu'>
										<span>View All</span>
									</Link>
								</div>
							</div>

							<Slider>
								<Col onClick={() => navigate('/subcategory')} className='col-xs-6'>
									<CustomCard04
										backImg={foodImg02}
										title={'FOOD NAME'}
										width={'261px'}
										height={'121px'}
										subtitle={'Lorem ipsum dolor sit amet,'}
										subtitleSize={'11px'}
										titleSize={'12px'}
										footerText={'AED 0.0'}
										titlePossition={'start'}
										customizable
									/>
								</Col>
								<Col
									onClick={() => navigate('/subcategory')}
									className='col-xs-6 ms-2'>
									<CustomCard04
										backImg={foodImg02}
										title={'FOOD NAME'}
										subtitle={'Lorem ipsum dolor sit amet,'}
										subtitleSize={'11px'}
										footerText={'AED 0.0'}
										width={'261px'}
										height={'121px'}
										titlePossition={'start'}
										customizable
										titleSize={'12px'}
									/>
								</Col>
							</Slider>
						</Col>
					</Row>
					{cart.length > 0 && (
						<ViewCartButton
							onClick={() => navigate('/my-basket')}
							count={cart.length}
							amount={'AED 0.00'}
						/>
					)}
				</MymenuPageWrapper>
			</Container>
		</>
	);
};

export default Mymenu;
