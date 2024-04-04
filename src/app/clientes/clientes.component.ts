import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';



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

}
