import { ref } from 'vue';
import { filter, open_image, putImageData } from '@silvia-odwyer/photon';

export default function useCanvas() {
	const canvas = ref<HTMLCanvasElement | null>(null);
	let context: CanvasRenderingContext2D | null = null;
	const image = new Image();
	const canvasImageURL = ref('');

	function calculateNewDimensions(width: number, height: number) {
		const aspectRatio = Math.min(448 / width, 448, height);

		return [width * aspectRatio, height * aspectRatio];
	};

	function upDateCanvasImageURL() {
		if (canvas.value) canvasImageURL.value = canvas.value?.toDataURL();
	};

	function drawOriginal() {
		if (canvas.value && context) {
			const newDimensions = calculateNewDimensions(image.naturalWidth, image.naturalHeight);

			canvas.value.width = newDimensions[0];
			canvas.value.height = newDimensions[1];

			context.drawImage(image, 0, 0, newDimensions[0], newDimensions[1]);
			upDateCanvasImageURL();
		};
	};

	function load(URL: string) {
		if (canvas.value) {
			context = canvas.value.getContext('2d');

			image.addEventListener('load', drawOriginal);
			image.src = URL;
		};
	};

	function filterImage(filterName: string) {
		if (canvas.value && context) {
			const photonImage = open_image(canvas.value, context);

			if (filterName.length) filter(photonImage, filterName.toLowerCase().replace('-', '').replace('é', 'e'));

			putImageData(canvas.value, context, photonImage);
			upDateCanvasImageURL();
		};
	};

	return { canvas, canvasImageURL, drawOriginal, load, filterImage };
};