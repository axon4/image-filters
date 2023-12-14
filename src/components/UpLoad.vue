<template>
	<div class='text-center my-8 py-32 text-slate-700 italic rounded border-4 border-double border-slate-700/25' @drag.prevent.stop='' @dragstart.prevent.stop='' @dragenter.prevent.stop='' @dragover.prevent.stop='' @dragleave.prevent.stop='' @dragend.prevent.stop=''  @dragexit.prevent.stop='' @drop.prevent.stop='store.upLoad'>
		Drop Image
	</div>
</template>

<script setup lang='ts'>
	import useImageStore from '@/stores/image';

	const store = useImageStore();
</script>