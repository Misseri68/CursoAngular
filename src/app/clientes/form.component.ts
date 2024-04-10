import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{

  public titulo: string = "Crear Cliente";

  public cliente: Cliente = new Cliente();

  constructor(private clienteService : ClienteService, private router: Router, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (!isNaN(id)) {
        // Si id es un número, llamamos a cargarCliente()
        this.cargarCliente();
      } else {
        // Si id no es un número, estamos en modo de creación, no es necesario cargar un cliente
      }
    });
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente ) => this.cliente = cliente)
      }
    })
  }

  create(): void{
    this.clienteService.create(this.cliente).subscribe( cliente=>  {
      this.router.navigate(['/clientes'])
      Swal.fire('Nuevo cliente', `Cliente ${this.cliente.nombre} creado con éxito `, 'success')
    }
    )
  }  

  update():void{
    this.clienteService.update(this.cliente).subscribe(
      cliente => { 
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente actualziado', `Cliente  ${this.cliente.nombre} actualizado con éxito!`, 'success')
      }
    )
  }
 
}
