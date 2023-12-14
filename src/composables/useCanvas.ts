import { ref } from 'vue';

export default function useCanvas() {
	const canvas = ref<HTMLCanvasElement | null>(null);
	let context: CanvasRenderingContext2D | null = null;
	const image = new Image();

	function draw() {
		if (context) {
			context.drawImage(image, 0, 0);

		};
	};

	function load(URL: string) {
		if (canvas.value) {
			context = canvas.value.getContext('2d');
			
			image.addEventListener('load', draw);
			image.src = URL;
		};
	};

	return { canvas, load };
};