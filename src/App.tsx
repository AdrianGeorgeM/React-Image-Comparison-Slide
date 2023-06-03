import './App.css';
import ImageComparisonSlider from './ImageComparisonSlider';
function App() {
	return (
		<div className='App'>
			<ImageComparisonSlider
				originalImageSrc='original.jpg'
				upscaledImageSrc='upscaled.jpg'
				sliderPosition={0.5}
				sliderColor='blue'
			/>
		</div>
	);
}

export default App;
