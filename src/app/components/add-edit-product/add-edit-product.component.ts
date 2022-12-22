import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/interfaces/client'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
form: FormGroup;
id: number;
operacion: string = 'Agregar ';
disable: boolean = false;


constructor(
  private fb: FormBuilder, 
  private _productService: ProductService, 
  private toastr: ToastrService,
  private route : Router,
  private oRouter: ActivatedRoute
)
  {
  this.form = this.fb.group({
    nombre_comercial: ['', Validators.required],
    razon_social: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['', Validators.required],
    nit: ['', Validators.required],
    estado: ['', Validators.required],
    direccion: ['', Validators.required],
  })
this.id = Number(oRouter.snapshot.paramMap.get('id'));
console.log(this.id)

}

ngOnInit(): void {
  if(this.id != 0){
     this.operacion = 'Editar ';
     this.validarInput();
     this.getClient(this.id);
  }
}

validarInput(){
  if(this.form.get('email')){
    this.disable = true;
  }
}

getClient(id: number){
  this._productService.getClient(id).subscribe((data:Client)=>{
    console.log(data)
    this.form.setValue({
    nombre_comercial: data.nombre_comercial,
    razon_social: data.razon_social,
    telefono: data.telefono,
    email: data.correo,
    nit: data.nit,
    estado: data.estado,
    direccion: data.direccion,
    })
  })
}

addClient(){
  const client: Client = {
    nombre_comercial: this.form.value.nombre_comercial,
    razon_social: this.form.value.razon_social,
    telefono: this.form.value.telefono,
    correo: this.form.value.email,
    nit: this.form.value.nit,
    estado: this.form.value.estado,
    direccion: this.form.value.direccion
  }

  if(this.id !== 0){
    client.id = this.id;
    this._productService.updateClient(this.id,client).subscribe(()=>{
      this.toastr.success('Registro Actulizado con exito', 'Registro Actualizado');
      this.route.navigate(['/'])}
     )
  }else{
    this._productService.saveClient(client).subscribe(()=>{
      this.toastr.info('Registro Agregado con exito', 'Registro Agregado');
      this.route.navigate(['/'])}
     )
  }



}

}
