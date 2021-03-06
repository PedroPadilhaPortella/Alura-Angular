import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = `${environment.apiUrl}/imgs/`;

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})

export class PhotoComponent {

    private _url = '';
    @Input() description = '';

    @Input() set url(url: string) {
        if(!url.startsWith('data'))
            this._url = API + url;
        else
            this._url = url;
    };

    get url() {
        return this._url;
    }
}
