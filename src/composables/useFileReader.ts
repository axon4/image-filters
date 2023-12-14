export default function useFileReader(file: File | null, onLoad?: EventListener) {
	const fileReader = new FileReader();

	if (file) fileReader.readAsDataURL(file);

	if (onLoad) fileReader.addEventListener('load', onLoad);

	return fileReader;
};