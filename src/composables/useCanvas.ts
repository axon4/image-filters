import { ref } from 'vue';

export default function useCanvas() {
	const canvas = ref<HTMLCanvasElement | null>(null);
	let context: CanvasRenderingContext2D | null = null;
	const image = new Image();

	function calculateNewDimensions(width: number, height: number) {
		const aspectRatio = Math.min(448 / width, 448, height);

		return [width * aspectRatio, height * aspectRatio];
	};

	function drawOriginal() {
		if (canvas.value && context) {
			const newDimensions = calculateNewDimensions(image.naturalWidth, image.naturalHeight);

			canvas.value.width = newDimensions[0];
			canvas.value.height = newDimensions[1];

			context.drawImage(image, 0, 0, newDimensions[0], newDimensions[1]);
		};
	};

	function load(URL: string) {
		if (canvas.value) {
			context = canvas.value.getContext('2d');
			
			image.addEventListener('load', drawOriginal);
			image.src = URL;
		};
	};

	return { canvas, drawOriginal, load };
};