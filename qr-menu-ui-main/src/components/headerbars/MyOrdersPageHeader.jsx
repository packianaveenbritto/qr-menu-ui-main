import React from 'react';
import { Col } from 'react-bootstrap';
import * as BiIcons from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

export const MyOrdersPageHeader = ({ onClickTab }) => {
	const [activeTab, setActiveTab] = React.useState('Ongoing');
	const navigate = useNavigate();
	return (
		<div className='myorders-headerbar p-1'>
			<div className='d-flex w-100 mt-3'>
				<Link to='/' onClick={() => navigate(-1)} className='menu-bars'>
					<BiIcons.BiLeftArrowAlt color={'black'} size={28} />
				</Link>
				<span className='header-title'>My Orders</span>
			</div>
			<div className='mt-2 d-flex mt-auto'>
				<Col
					onClick={() => {
						setActiveTab('Ongoing');
						onClickTab('Ongoing');
					}}
					style={{
						fontSize: '14px',
						fontWeight: 'bold',
						color: '#9F9F9F',
					}}
					className={`col-6 d-flex justify-content-center align-items-center ${
						activeTab === 'Ongoing' && 'active'
					}`}>
					Ongoing
				</Col>
				<Col
					onClick={() => {
						setActiveTab('History');
						onClickTab('History');
					}}
					style={{
						fontSize: '14px',
						fontWeight: 'bold',
						color: '#9F9F9F',
					}}
					className={`col-6 d-flex justify-content-center align-items-center ${
						activeTab === 'History' && 'active'
					}`}>
					History
				</Col>
			</div>
		</div>
	);
};
