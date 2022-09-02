import React from 'react';
import * as BiIcons from 'react-icons/bs';

const QuantityAddRemove = ({ onClickRemove, onClickAdd, value }) => {
	return (
		<div className='d-flex align-items-center'>
			<BiIcons.BsDashSquareFill
				onClick={onClickRemove}
				size={14}
				style={{
					color: '#AE9C67',
				}}
			/>
			<div className='ms-2' style={{ fontSize: '12px' }}>
				{value}
			</div>
			<BiIcons.BsFillPlusSquareFill
				onClick={onClickAdd}
				className='ms-2'
				size={14}
				style={{ color: '#AE9C67' }}
			/>
		</div>
	);
};

export default QuantityAddRemove;
