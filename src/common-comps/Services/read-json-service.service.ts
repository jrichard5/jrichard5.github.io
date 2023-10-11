import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReadJsonServiceService {

  constructor(private httpCleint: HttpClient) { }
  getAssetJsonFunction() : Observable<any> {
    return this.httpCleint.get<any>("../../assets/strings.json");
  }
}
