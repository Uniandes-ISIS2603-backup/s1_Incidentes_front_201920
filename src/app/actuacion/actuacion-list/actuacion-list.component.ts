import { Component, OnInit } from '@angular/core';
import { Actuacion } from '../actuacion';
import { ActuacionService } from '../actuacion.service';

@Component({
  selector: 'app-actuacion-list',
  templateUrl: './actuacion-list.component.html',
  styles: []
})
export class ActuacionListComponent implements OnInit {

  actuaciones: Actuacion[];

  constructor(private actuacionService: ActuacionService) { }

  ngOnInit() {
    this.getActuaciones();
  }

  getActuaciones(): void {
    this.actuacionService.getActuaciones().subscribe(actuaciones => this.actuaciones = actuaciones);
  } 

}
