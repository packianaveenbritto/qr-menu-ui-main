import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const CustomCard04 = ({
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
}) => {
	return (
		<>
			<Card
				style={{
					minWidth: `${width}`,
					minHeight: `${height}`,
				}}
				className='custom-card custom-card-04 custom-card'>
				<Card.Img src={''} alt='' />
				<Card.ImgOverlay className='p-2 d-flex'>
					<Col className='col-5 d-flex justify-content-center align-items-center'>
						<img src={backImg} alt='' />
					</Col>
					<Col className='col-7'>
						<div className='h-100 d-flex flex-column'>
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

							<div className={`footer-text mt-auto d-flex align-items-end`}>
								<div>
									<div style={{ fontSize: subtitleSize }}>{footerText}</div>
								</div>
								<div className='ms-auto d-flex align-items-end'>
									<button
										className='custom-card-04-footer-button'
										style={{ fontSize: subtitleSize }}>
										View
									</button>
								</div>
							</div>
						</div>
					</Col>
				</Card.ImgOverlay>
			</Card>
		</>
	);
};

export default CustomCard04;
