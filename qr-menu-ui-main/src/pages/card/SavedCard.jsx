import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import BankCards from '../../components/cards/BankCards';
import CommonWrapper from '../../wrappers/CommonWrapper';
import { Cards } from './CardData';
import noCards from '../../assets/payment-cards/cards.png';
import { IconButton } from '@mui/material';
import { ImBin } from 'react-icons/im';
import produce from 'immer';
import { useNavigate } from 'react-router-dom';

const SavedCard = () => {
	const [selectedValue, setSelectedValue] = useState();
	const [state, setState] = useState([]);
	useEffect(() => {
		setState(Cards);
	}, []);
	const navigate = useNavigate();
	return (
		<CommonWrapper header='My Cards'>
			<Container fluid className='py-3'>
				{state.length === 0 && (
					<div className='d-flex  flex-column page-75-height-card justify-content-center align-items-center'>
						<img src={noCards} />
						<h6>No saved Credit Cards</h6>
						<p className='nav-font'>Please save Credit Cards to see</p>
					</div>
				)}
				{state.length > 0 && (
					<>
						<p className='mb-2'>Your Exist Cards</p>
						{state.map((data, index) => {
							return (
								<div className='my-2 d-flex flex-row'>
									<BankCards
										key={index}
										cardId={data.id}
										cardNo={data.cardNo}
										type={data.type}
										selectedValue={selectedValue}
										setSelectedValue={setSelectedValue}
									/>
									{selectedValue === data.id && (
										<IconButton
											className='ms-1 p-0'
											color='primary'
											aria-label='remove'
											component='label'
											onClick={() => {
												const newState = produce(state, (stateVals) => {
													stateVals.splice(index, 1);
												});
												setState(newState);
											}}>
											<ImBin />
										</IconButton>
									)}
								</div>
							);
						})}
					</>
				)}
				<div className='d-grid mt-5 below-button'>
					<Button type='submit' size='lg' onClick={()=>{navigate('/create-card');}}>
						{state.length === 0 ? 'ADD CARD' : 'ADD NEW CARD'}
					</Button>
				</div>
			</Container>
		</CommonWrapper>
	);
};

export default SavedCard;
