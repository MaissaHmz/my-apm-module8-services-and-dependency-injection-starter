import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../domain/iproduct';
import { ProductsService } from 'src/app/sercices/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = '';

  products: IProduct[];

  constructor(private _service: ProductsService) { } // Dependency injection !

  ngOnInit() {
     this._service.getAllPoducts().subscribe(
     resultat => this.products = resultat,
     erreur => console.log(` ATTENTION: Il y a eu erreur : {erreur} lors de l'appel REST `)
     );
     console.log('In OnInit');
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(event): void {
        this.pageTitle = 'Product List: ' + event;
    }

}
