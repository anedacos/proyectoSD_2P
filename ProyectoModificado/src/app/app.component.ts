import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { ConsumirdataService } from "./services/consumirdata.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  lista: any;
  frasesEscritores: any;
  isCollapse: boolean = true;
  constructor(private _consumirdataService: ConsumirdataService) {}

  ngOnInit() {
    this._consumirdataService.getJSON().subscribe((data) => {
      // console.log("imprime la informacion del servicio");
      // console.log(data.datos);
      this.lista = data;
    });
    this._consumirdataService.getJsonNew().subscribe((frase) => {
      this.frasesEscritores = frase;
    });
  }

  cambiarColapso() {
    this.isCollapse = !this.isCollapse;
  }
}
