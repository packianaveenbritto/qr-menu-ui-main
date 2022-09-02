import { Radio } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';
import visa from '../../assets/payment-cards/visa.png';
import master from '../../assets/payment-cards/master.png';
import { IconButton } from '@mui/material';
import { ImBin } from 'react-icons/im';

const BankCards = ({ cardId, cardNo, type, selectedValue, setSelectedValue }) => {
	return (
		<Card body>
			<div className='row align-items-center'>
				<div className='col-2'>
					<Radio
						checked={selectedValue === cardId}
						onChange={(e) => setSelectedValue(e.target.value)}
						value={cardId}
						name={`radio-${cardId}`}
						inputProps={{ 'aria-label': cardId }}
					/>
				</div>
				<div className='col-3 text-end'>
					{type === 'master' && <img style={{ width: '16vw' }} src={master}></img>}
					{type === 'visa' && <img style={{ width: '16vw' }} src={visa}></img>}
				</div>
				<div className='col-7 text-end'>
					<div className='nav-font'>{cardNo}</div>
					<div className='nav-font'>{type === 'master' ? 'Master Card' : 'VISA '}</div>
				</div>
			</div>
		</Card>
	);
};

export default BankCards;
