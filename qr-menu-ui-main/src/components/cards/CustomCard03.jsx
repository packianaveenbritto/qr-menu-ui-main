import React from 'react';
import Card from 'react-bootstrap/Card';
import QuantityAddRemove from '../common/QuantityAddRemove';

const CustomCard03 = ({
	title,
	subtitle,
	width,
	height,
	backImg,
	titlePossition,
	titleSize,
	subtitleSize,
	footerText,
	customizable = false,
	onClickAdd,
	onClickCard,
}) => {
	const [selected, setselected] = React.useState(false);
	return (
		<>
			<Card
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					onClickCard();
				}}
				style={{
					minWidth: `${width}`,
					minHeight: `${height}`,
				}}
				className='custom-card mt-2'>
				<Card.Img src={backImg} alt='' />
				<Card.ImgOverlay className='p-2'>
					<div>
						<div className='header'>
							<div className={`title d-flex justify-content-${titlePossition}`}>
								<span style={{ fontSize: titleSize }}>{title}</span>
							</div>

							{subtitle && (
								<div className={`sub-title d-flex justify-content-start`}>
									<span style={{ fontSize: subtitleSize }}>{subtitle}</span>
								</div>
							)}
							{customizable && (
								<div className={`sub-title d-flex justify-content-start`}>
									<span style={{ fontSize: subtitleSize, color: '#5565AD' }}>
										Customizable
									</span>
								</div>
							)}
						</div>

						<div className='body'></div>

						<div className={`footer-text d-flex align-items-end`}>
							<div>
								<div style={{ fontSize: subtitleSize }}>{footerText}</div>
							</div>
							<div className='ms-auto d-flex align-items-end'>
								{selected ? (
									<button
										onClick={() => setselected(false)}
										className='card-footer-button'>
										<QuantityAddRemove value={0} />
									</button>
								) : (
									<button
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											onClickAdd();
											setselected(true);
										}}
										className='footer-button'
										style={{ fontSize: subtitleSize }}>
										ADD TO CART
									</button>
								)}
							</div>
						</div>
					</div>
				</Card.ImgOverlay>
			</Card>
		</>
	);
};

export default CustomCard03;
