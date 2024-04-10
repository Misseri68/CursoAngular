import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  
  clientes: Cliente[];

  //Esto es como definir dentro del constructor this.clienteService  = clienteService
  constructor(private clienteService: ClienteService) { }


  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    /* El primer "clientes" es el argumento que se le pasa, y lo de dentro es el metodo 
    que se haria en una funcion a parte, en este caso this.clientes = clientes (el que le has pasao de arg)
    Es lo mismo que :
      function (clientes) {
        this.clientes = clientes
      }
    );
    }
    */ 
  }

  delete(cliente: Cliente): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: `Estás seguro de que quieres eliminar al cliente ${cliente.nombre}?`,
      text: "No se podrá deshacer el cambio.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
    
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            swalWithBootstrapButtons.fire({
              title: "Borrado!",
              text: "Cliente borrado.",
              icon: "success"
            });
          }
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Tu cliente imaginario está a salvo :)",
          icon: "error"
        });
      }
    });
  }
}
