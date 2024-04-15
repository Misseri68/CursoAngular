import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class CartaService{
    private urlEndPoint: string = 'http://localhost:8080/api/clientes';
    private httpheaders = new HttpHeaders({'Content-Type': 'application/json' });

    constructor(private http: HttpClient, private router: Router){
        
    }
}
