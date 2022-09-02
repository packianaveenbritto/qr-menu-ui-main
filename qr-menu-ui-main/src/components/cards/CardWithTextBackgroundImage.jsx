import React from 'react';

const CardWithTextBackgroundImage = ({
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
		<div
			style={{
				width: `${width}`,
				height: `${height}`,
				backgroundImage: `url(${backImg})`,
			}}
			className='CardWithTextBackgroundImage'>
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
	);
};

export default CardWithTextBackgroundImage;
