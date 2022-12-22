import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/interfaces/client';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Client[] = []

validarFila = (id: any) =>{
  const res = id/2
  return res
 }
  constructor( private _productService: ProductService, private toastr: ToastrService){
  }

  ngOnInit(): void {
    this.getListClient();
  }

  getListClient(){
    this._productService.getListClient().subscribe((data: Client[]) =>{
      this.listProducts = data
    })
  }

  deleteClient(id: number){
    this._productService.deleteCLient(id).subscribe((data)=>{
      this.getListClient();
      this.toastr.warning('El Registro fue Eliminado con exito', 'Registro Eliminado')
    })
  }

}
