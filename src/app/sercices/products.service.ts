import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // nouveau en angular6 (service disponible pour tout le module)
})
export class ProductsService {

  URL: string = 'http://localhost:3000/products';

  constructor(private _http: HttpClient) { }

  getAllPoducts(): Observable<IProduct[]> {
     return this._http.get<IProduct[]>(this.URL);
}
}
