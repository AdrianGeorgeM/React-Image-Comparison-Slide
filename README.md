````markdown
# React Image Comparison Slider

Welcome to the React Image Comparison Slider project! 
This is a customizable and responsive React component that enables users to compare two images using a draggable slider.

## Features

- Fully Responsive: The component adapts to various container sizes, ensuring a seamless experience across different devices.
- Customizable Slider Icon: You can easily replace the default slider icon with your own JSX to match your project's design.
- Customizable Slider Color: The color of the slider can be customized to seamlessly blend with your project's design.
- Customizable Initial Slider Position: You have the flexibility to specify the initial position of the slider as a percentage.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AdrianGeorgeM/React-Image-Comparison-Slide
```
````

2. Navigate to the project directory:

```bash
cd React-Image-Comparison-Slider
```

3. Install the dependencies:

```bash
npm install
```

Alternatively, if you're using yarn:

```bash
yarn
```

## Development

To start the development server and run the React Image Comparison Slider locally, use the following command:

```bash
npm start
```

This will launch the development server and open your application in your default browser. You can then view and test the React Image Comparison Slider.

## Usage

Here's a basic example of how to use the React Image Comparison Slider in your application:

```jsx
import ImageComparisonSlider from './ImageComparisonSlider';

// Inside your component's return statement:
<ImageComparisonSlider
	originalImageSrc='/path/to/your/before-image.jpg'
	upscaledImageSrc='/path/to/your/after-image.jpg'
	sliderPosition={0.5}
	sliderColor='#ff0000'
/>;
```

## API

You can customize the component using the following props:

| Prop             | Type   | Description                                                    |
| ---------------- | ------ | -------------------------------------------------------------- |
| originalImageSrc | string | The source path for the original or "before" image.            |
| upscaledImageSrc | string | The source path for the upscaled or "after" image.             |
| sliderPosition   | number | The initial position of the slider, specified as a percentage. |
| sliderColor      | string | The color of the slider.                                       |

## Contributing

Contributions to this project are welcome! If you have any ideas, enhancements, or bug fixes, feel free to fork the repository, make your changes, and submit a pull request. Your contributions are greatly appreciated.

## License

React Image Comparison Slider is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Please note that the `filter: 'grayscale(100%)'` property has been included in the code snippet solely for the purpose of illustrating the contrast between the "before" and "after" images. However, you are free to remove this property if it does not align with your specific design requirements. Feel free to modify the CSS styling within the `ImageComparisonSlider` component to achieve the desired visual effect that suits your project.

```

```
