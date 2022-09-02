import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const LoginPageHeader = (props) => {

	return (
		<div className='headerbar subcategory-page-header'>
			<div className='d-flex w-100 header-top '>
				<Link to='/' className='menu-bars'>
					<FaIcons.FaArrowLeft color={'black'} size={23} onClick={props.onClick} />
				</Link>
				<span className='header-title'>{props.headingName}</span>
			</div>
		</div>
	);
};
