import { Photo } from "../interfaces/photo";

export function buildPhotoList(): Photo[] {
    const photos = []
    for (let i = 0; i < 10; i++) {
        photos.push({ id: i, url: '', description: '' });
    }
    return photos;
}