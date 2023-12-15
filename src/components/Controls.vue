<template>
	<div class='my-8'>
		<canvas ref='canvas' width='448' height='448' />
		<div class='text-white text-xl mt-4'>
			<div class='flex justify-center gap-4'>
				<button type='button' class='py-4 w-full' v-for='(filter, index) of filters' :key='index' :class='filter === store.filter ? "bg-pink-600" : "bg-green-600"' @click='store.filter = store.filter === filter ? "" : filter'>{{ filter }}</button>
			</div>
			<a class='bg-indigo-700 py-4 block w-full mt-2 text-center' :href='canvasImageURL' download='filteredImage.png'>DownLoad</a>
		</div>
	</div>
</template>

<script setup lang='ts'>
	import useImageStore from '@/stores/image';
	import useCanvas from '@/composables/useCanvas';
	import useFileReader from '@/composables/useFileReader';

	const store = useImageStore();
	const { canvas, canvasImageURL, load, drawOriginal, filterImage } = useCanvas();
	const fileReader = useFileReader(store.file, () => {
		if (fileReader.result) {
			const dataURL = fileReader.result.toString();

			load(dataURL);
		};
	});
	const filters = ['Oceanic', 'Vintage', 'Rose-Tint'];

	store.$subscribe((_mutation, state) => {
		drawOriginal();
		filterImage(state.filter);
	});
</script>