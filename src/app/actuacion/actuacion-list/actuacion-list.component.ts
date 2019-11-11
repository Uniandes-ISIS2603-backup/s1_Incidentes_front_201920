import { Component, OnInit } from '@angular/core';
import { Actuacion } from '../actuacion';
import { ActuacionService } from '../actuacion.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-actuacion-list',
  templateUrl: './actuacion-list.component.html',
  styles: []
})
export class ActuacionListComponent implements OnInit {

  actuaciones: Actuacion[] = [];

  constructor(private actuacionService: ActuacionService) { }

  ngOnInit() {
    this.getActuaciones();
  }

  getActuaciones(): void {
    console.log("getActuaciones on init");
    this.actuacionService.getActuaciones().subscribe(actuaciones => {
      actuaciones.map((actuacion: Actuacion)=>{
        actuacion.fechaHora = actuacion.fechaHora.slice(0,-5);
        this.actuaciones.push(actuacion);
      })
    });
  } 

}
