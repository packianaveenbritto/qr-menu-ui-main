import React from 'react';
import Card from 'react-bootstrap/Card';

const CustomCard = ({
	title,
	subtitle,
	width,
	height,
	backImg,
	titlePossition,
	titleSize,
	subtitleSize,
	footerText,
}) => {
	return (
		<>
			<Card
				style={{
					minWidth: `${width}`,
					height: height,
				}}
				className='custom-card m-2'>
				<img height={height} src={backImg} alt='' />
				<Card.ImgOverlay className='p-2'>
					<div className='CardWithTextBackgroundImage'>
						<div className={`title d-flex justify-content-${titlePossition}`}>
							<span style={{ fontSize: titleSize }}>{title}</span>
						</div>

						{subtitle && (
							<div className={`sub-title d-flex justify-content-start`}>
								<span style={{ fontSize: subtitleSize }}>{subtitle}</span>
							</div>
						)}
						{footerText && (
							<div className={`footer-text mt-auto`}>
								<span style={{ fontSize: subtitleSize }}>{footerText}</span>
							</div>
						)}
					</div>
				</Card.ImgOverlay>
			</Card>
		</>
	);
};

export default CustomCard;
