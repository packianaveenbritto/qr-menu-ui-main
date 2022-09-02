import React from 'react';
import * as BiIcons from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';

export const CommonHeader = (props) => {
	const navigate = useNavigate();
	return (
		<div className='common-headerbar subcategory-page-header'>
			<div className='d-flex w-100'>
				<Link to='/' onClick={() => navigate(-1)} className='menu-bars'>
					{props.isclose ? (
						<GrClose color={'black'} size={28} onClick={props.onClick} />
					) : (
						<BiIcons.BiLeftArrowAlt color={'black'} size={28} onClick={props.onClick} />
					)}
				</Link>
				<span className='header-title'>{props.headingName}</span>
			</div>
		</div>
	);
};
