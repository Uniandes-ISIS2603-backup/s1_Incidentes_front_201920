import { Component, OnInit, Input } from '@angular/core';
import { Actuacion } from '../actuacion';
import { ActuacionService } from '../actuacion.service';
import { DatePipe } from '@angular/common';
import { Incidente } from '../../incidente/incidente';

@Component({
  selector: 'app-actuacion-list',
  templateUrl: './actuacion-list.component.html',
  styles: []
})
export class ActuacionListComponent implements OnInit {

  actuaciones: Actuacion[] = [];
  @Input() incidente : Incidente

  constructor(private actuacionService: ActuacionService) { }

  ngOnInit() {
    this.getActuaciones();
  }

  getActuaciones(): void {
    console.log("getActuaciones on init");
    this.actuacionService.getActuaciones(this.incidente.id).subscribe(actuaciones => {
      actuaciones.forEach((actuacion: Actuacion)=>{
        actuacion.fechaHora = actuacion.fechaHora.slice(0,-5);
        this.actuaciones.push(actuacion);
      })
    });
  } 

}
