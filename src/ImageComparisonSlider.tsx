import React, { useState, useRef, TouchEvent } from 'react';

interface AppProps {
	originalImageSrc: string;
	upscaledImageSrc: string;
}

function ImageComparisonSlider({ originalImageSrc, upscaledImageSrc }: AppProps) {
	const [imageRevealFraction, setImageRevealFraction] = useState(0.5);
	const imageContainer = useRef<HTMLDivElement>(null);

	const slide = (xPosition: number): void => {
		const containerBoundingRect = imageContainer.current?.getBoundingClientRect();

		if (containerBoundingRect) {
			setImageRevealFraction(() => {
				if (xPosition < containerBoundingRect.left) {
					return 0;
				} else if (xPosition > containerBoundingRect.right) {
					return 1;
				}
				return (xPosition - containerBoundingRect.left) / containerBoundingRect.width;
			});
		}
	};

	const handleTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
		slide(event.touches.item(0)?.clientX || 0);
	};

	const handleMouseDown = (): void => {
		window.onmousemove = handleMouseMoveMove;
		window.onmouseup = handleMouseUp;
	};

	const handleMouseMoveMove = (event: MouseEvent): void => {
		slide(event.clientX);
	};

	const handleMouseUp = (): void => {
		window.onmousemove = null;
		window.onmouseup = null;
	};

	return (
		<div className='px4'>
			<div
				ref={imageContainer}
				className='max-w-lg w-full mx-auto mt-32 relative select-none group'
			>
				<img src={originalImageSrc} alt='Original' className='pointer-events-none' />
				<img
					style={{
						filter: 'grayscale(100%)',
						clipPath: `polygon(0 0, ${imageRevealFraction * 100}% 0, ${
							imageRevealFraction * 100
						}%100%, 0% 100%)`,
					}}
					src={upscaledImageSrc}
					alt='Upscaled'
					className='absolute inset-0 pointer-events-none'
				/>

				<div
					style={{ left: `${imageRevealFraction * 100}%` }}
					className='absolute inset-0 group-hover:opacity-0 group-hover:opacity-100 transition-opacity duration-300 opacity-0'
				>
					<div className='relative h-full'>
						<div className='absolute inset-0 bg-red-400 w-0.5 -ml-px opacity-50'></div>
						<div
							style={{ touchAction: 'none' }}
							onMouseDown={handleMouseDown}
							onTouchMove={handleTouchMove}
							className='h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 text-gray-800 rotate-90 cursor pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ImageComparisonSlider;
