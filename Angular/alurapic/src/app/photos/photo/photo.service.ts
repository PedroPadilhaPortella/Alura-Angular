import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Photo } from './photo';
import { PhotoComment } from './photo-comment';

const API = environment.apiUrl;

@Injectable({ providedIn: 'root' })
// Define que esse serviço é injetável e é acessado uma única vez, no escopo raiz, qualquer componente pode acessa-lo
export class PhotoService {

    constructor(private http: HttpClient) { }

    listFromUser(userName: string) {
        return this.http.get<Photo[]>(API + `/${userName}/photos`)
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Photo[]>(API + `/${userName}/photos`, { params })
    }

    upload(description: string, allowComments: boolean, file: File) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);

        return this.http.post(API + '/photos/upload', formData,  {
                observe: 'events',
                reportProgress: true
        });
    }

    findById(photoId: string) {
        return this.http.get<Photo>(API + '/photos/' + photoId);
    }

    getComments(photoId: number) {
        return this.http.get<PhotoComment[]>(API + '/photos/' + photoId + '/comments');
    }

    addComment(photoId: number, commentText: string) {
        return this.http.post(API + '/photos/' + photoId + '/comments', { commentText });    
    }

    removePhoto(photoId: number) {
        return this.http.delete(API + '/photos/' + photoId);
    }

    indById(id: string) {
        return this.http.get<Photo>(API + '/photos/' + id);
    }

    like(photoId: number) {
        return this.http.post(API + '/photos/' + photoId +  '/like', {}, {observe: 'response'})
            .pipe(map(res => true))
            .pipe(catchError(err => {
                return err.status == '304' ? of(false) : throwError(err);
            }));
    }
}
