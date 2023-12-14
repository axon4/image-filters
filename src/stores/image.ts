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
			const file = event.dataTransfer?.files[0];

			if (file) {
				if (file.type.match('image.*')) this.file = file;
			};
		}
	}
});

export default useImageStore;