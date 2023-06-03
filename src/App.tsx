import './App.css';
import ImageComparisonSlider from './ImageComparisonSlider';
function App() {
	return (
		<div className='App'>
			<ImageComparisonSlider
				originalImageSrc='original.jpg'
				upscaledImageSrc='upscaled.jpg'
			/>
		</div>
	);
}

export default App;
