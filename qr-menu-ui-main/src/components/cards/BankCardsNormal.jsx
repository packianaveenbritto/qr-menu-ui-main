import { Radio } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';
import visa from '../../assets/payment-cards/visa.png';

const BankCardsNormal = (props) => {
	return (
		<Card className={props.className}>
			<Card.Body className='p-2'>
				<div className='row align-items-center'>
					<div className='col-3 text-end'>
						<img style={{ width: '10vw' }} src={visa}></img>
						{/* {type === 'master' && <img style={{ width: '16vw' }} src={master}></img>} */}
						{/* {type === 'visa' && <img style={{ width: '16vw' }} src={visa}></img>} */}
					</div>
					<div className='col-9 text-end'>
						<div style={{ fontSize: '9px' }}>xxxx xxxx xxxx 1234</div>
						<div style={{ fontSize: '9px' }}>VISA</div>
						{/* <div className='nav-font'>{type === 'master' ? 'Master Card' : 'VISA '}</div> */}
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default BankCardsNormal;
