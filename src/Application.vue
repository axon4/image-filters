<template>
	<div class='font-["Quicksand"] max-w-xl bg-white p-8 shadow-2xl rounded absolute m-auto left-0 right-0 mt-32'>
		<h1 class='text-center text-3xl text-indigo-700'>Image-Filters</h1>
		<UpLoad v-if='!store.file' />
		<Controls v-else />
	</div>
	<BackGround />
</template>

<script setup lang='ts'>
	import useImageStore from '@/stores/image';

	const store = useImageStore();
</script>