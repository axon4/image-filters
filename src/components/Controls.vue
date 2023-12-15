<template>
	<div class='my-8'>
		<canvas ref='canvas' width='448' height='448' />
		<div class='text-white text-xl mt-4'>
			<div class='flex justify-center gap-4'>
				<button type='button' class='py-4 w-72 bg-pink-600' :disabled='filtersIndex === 0' @click='filtersIndex--'>&lt;</button>
				<button type='button' class='py-4 w-full' v-for='(filter, index) of filters[filtersIndex]' :key='index' :class='filter === store.filter ? "bg-pink-600" : "bg-green-600"' @click='store.filter = store.filter === filter ? "" : filter'>{{ filter }}</button>
				<button type='button' class='py-4 w-72 bg-pink-600' :disabled='filtersIndex === filters.length - 1' @click='filtersIndex++'>&gt;</button>
			</div>
			<a class='bg-indigo-700 py-4 block w-full mt-2 text-center' :href='canvasImageURL' :download='"filteredImage" + (store.filter ? `-${store.filter.includes("-") ? "-" : ""}${store.filter}` : "") + ".png"'>DownLoad</a>
		</div>
	</div>
</template>

<script setup lang='ts'>
	import { ref } from 'vue';
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
	const filters = [['Oceanic', 'Vintage', 'Rose-Tint'], ['Radio', 'Twenties', 'Mauve'], ['Blue-Chrome', 'Perfume', 'Serenity'], ['IsLands', 'Marine', 'SeaGreen'], ['Flag-Blue', 'Liquid', 'Diamanté']];
	let filtersIndex = ref(0);

	store.$subscribe((_mutation, state) => {
		drawOriginal();
		filterImage(state.filter);
	});
</script>