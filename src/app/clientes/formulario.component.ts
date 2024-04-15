import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  titulo: string = 'Formulario';
  protected errores: string[];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.clienteService
          .getCliente(id)
          .subscribe((cliente) => (this.cliente = cliente));
      }
    });
  }

  create(): void {
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(json => {
      this.router.navigate(['/clientes']);
      Swal.fire(
        'Cliente guardado',
        `Cliente ${json.nombre} creado con exito!`,
        'success'
      );
    },
    err =>{
      this.errores= err.error.errors as string[];

    }
    );
  }

  update(): void {
    this.clienteService.update(this.cliente).subscribe((cliente) => {
      this.router.navigate(['/clientes']);
      Swal.fire(
        'Cliente actualizado',
        `Cliente ${this.cliente.nombre} actualizado con exito`,
        'success'
      );
    },
    err =>{
      this.errores= err.error.errors as string[];
      
    });
  }

  
}
