import { defineStore } from 'pinia';

interface ImageState {
	file: File | null;
	filter: string;
};

const useImageStore = defineStore('image', {
	state: (): ImageState => ({
		file: null,
		filter: ''
	}),
	actions: {
		upLoad(event: DragEvent) {
			console.log(event);
		}
	}
});

export default useImageStore;