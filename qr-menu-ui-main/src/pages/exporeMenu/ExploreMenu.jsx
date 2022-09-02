import React from 'react';
import { Row, Col, Container, Offcanvas } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import hart from '../../assets/exploreMenu/heart.svg';
import * as AiIcons from 'react-icons/ai';
import ExploreMenuCardOne from '../../components/cards/ExploreMenuCardOne';
import ExploreMenuCardTwo from '../../components/cards/ExploreMenuCardTwo';
import { ExploreMenuHeader } from '../../components/headerbars/ExploreMenuHeader';
import { exMenuData } from './data';
import { BiChevronRight } from 'react-icons/bi';
import ViewCartButton from '../../components/common/ViewCartButton';
import ExploreMenuCardThree from '../../components/cards/ExploreMenuCardThree';
import { TbLayoutList } from "react-icons/tb";

const ExploreMenu = () => {
	const [viewMode, setViewMode] = React.useState(1);
	const [headerName, setHeaderName] = React.useState('Appetizers');
	const [bodyData, setBodyData] = React.useState(exMenuData[0].subData);
	const [selectedItem, setSelectedItem] = React.useState(null);
	const [showPopup, setShowPopup] = React.useState(false);
	const [activeTile, setActiveTile] = React.useState('');

	const [itemCheked, setItemCheked] = React.useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	React.useEffect(() => {
		if (location.pathname === '/my-favorites') {
			setActiveTile('My Favourites');
			document.getElementById('My Favourites').scrollIntoView();
		}
	}, []);

	return (
		<>
			<ExploreMenuHeader
				activetilename={activeTile}
				onClickTile={(name) => {
					setHeaderName(name);
					const filterdData = exMenuData.filter((data) => data.name == name)[0].subData;
					setBodyData(filterdData);
				}}
				onClickBack={() => {
					navigate(-1);
				}}
				onClickMenu={() => setShowPopup(true)}
			/>
			<Container fluid>
				<Row>
					<Col>
						<div className='d-flex align-items-center  section-head-with-button mt-2'>
							<div className='custom-titile mb-2 col-6'>{headerName}</div>
							<div className='mb-2 d-flex d-flex justify-content-end col-6'>
								<TbLayoutList
									color={viewMode === 1 ? '#AE9C67' : '#9F9F9F'}
									onClick={() => {
										setViewMode(1);
									}}
									className='me-2'
									size={23}
								/>
								<AiIcons.AiOutlineMenu
									color={viewMode === 2 ? '#AE9C67' : '#9F9F9F'}
									onClick={() => {
										setViewMode(2);
									}}
									className='me-2'
									size={23}
								/>
								<AiIcons.AiOutlineAppstore
									color={viewMode === 3 ? '#AE9C67' : '#9F9F9F'}
									onClick={() => {
										setViewMode(3);
									}}
									className='me-2'
									size={23}
								/>
								<AiIcons.AiOutlineUnorderedList
									color={viewMode === 4 ? '#AE9C67' : '#9F9F9F'}
									onClick={() => {
										setViewMode(4);
									}}
									size={23}
									style={{ transform: 'rotate(180deg)' }}
								/>
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					{bodyData.map((data, index) => {
						return (
							<Col
								className={`${
									viewMode === 1 || viewMode === 2 || viewMode === 4
										? 'col-12'
										: 'col-6'
								} mb-3`}>
								{viewMode === 4 ? (
									<ExploreMenuCardTwo
										img={data.img2}
										icon={hart}
										title={data.title}
										subtitle={data.subtitle}
										customizable={data.customizable}
										veg={data.veg}
										priceChange={data.priceChange}
										off={data.off}
										price={data.price}
										index={data.index}
										onClickAdd={() => {
											setSelectedItem(index);
										}}
										selected={selectedItem === index ? true : false}
									/>
								) : viewMode === 2 ? (
									<ExploreMenuCardThree
										img={data.img}
										icon={hart}
										title={data.title}
										subtitle={data.subtitle}
										customizable={data.customizable}
										veg={data.veg}
										priceChange={data.priceChange}
										off={data.off}
										price={data.price}
										index={data.index}
										onCheck={(e) => setItemCheked(e.target.checked)}
									/>
								) : (
									<ExploreMenuCardOne
										img={data.img}
										icon={hart}
										title={data.title}
										subtitle={data.subtitle}
										customizable={data.customizable}
										veg={data.veg}
										priceChange={data.priceChange}
										off={data.off}
										price={data.price}
										index={data.index}
										onClickAdd={() => {
											setSelectedItem(index);
										}}
										selected={selectedItem === index ? true : false}
									/>
								)}
							</Col>
						);
					})}
				</Row>
				{itemCheked && (
					<Row>
						<Col className='d-flex justify-content-end'>
							<button
								onClick={() => {
									setSelectedItem(1);
								}}
								className='card-footer-button-fill'
								style={{ fontSize: '10px' }}>
								ADD TO CART
							</button>
						</Col>
					</Row>
				)}
				{selectedItem != null && (
					<Row>
						<Col className='d-flex justify-content-center'>
							<ViewCartButton
								count={1}
								amount={'AED 0.00'}
								onClick={() => {
									navigate('/my-basket');
								}}
							/>
						</Col>
					</Row>
				)}

				<Offcanvas
					className='bottom-popup'
					placement='bottom'
					show={showPopup}
					onHide={() => setShowPopup(false)}>
					<Offcanvas.Header closeButton>
						<div className='d-flex'>
							<div style={{ fontSize: '16px', fontWeight: '600' }}>Menu Category</div>
						</div>
					</Offcanvas.Header>
					{exMenuData.map((data, index) => {
						return (
							<div
								style={{ borderBottom: '1px solid #707070' }}
								className='d-flex  m-3'>
								<div className='col-6'>{data.name}</div>
								<div className='col-3'>({data.subData.length})</div>
								<div className='col-3 d-flex justify-content-end'>
									<BiChevronRight
										onClick={() => {
											setBodyData(data.subData);
											setHeaderName(data.name);
											setActiveTile(data.name);
											setShowPopup(false);
										}}
										color='black'
										size={20}
									/>
								</div>
							</div>
						);
					})}
				</Offcanvas>
			</Container>
		</>
	);
};

export default ExploreMenu;
