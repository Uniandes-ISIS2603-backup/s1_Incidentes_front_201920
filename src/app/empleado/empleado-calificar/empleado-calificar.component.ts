import { Component, OnInit, Input } from '@angular/core';
import { Incidente } from '../../incidente/incidente';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidenteService } from '../../incidente/incidente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empleado-calificar',
  templateUrl: './empleado-calificar.component.html',
  styleUrls: ['./empleado-calificar.component.css']
})
export class EmpleadoCalificarComponent implements OnInit {

  @Input()
  incidente:Incidente;

  @Input()
  idEmpleado;

  mostrar:boolean;

  show:boolean=false;

  calificacion:number;

  constructor(private servcie:IncidenteService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.incidente.solucionado=='false'){
      this.mostrar=false;
    } else {
      this.mostrar=true;
    }
  }

  calificar(){
    if(this.mostrar==true){
      this.incidente.calificacion=this.calificacion;
      this.show = !this.show;
      this.servcie.updateIncidente(this.incidente).subscribe(() => {
        this.router.navigate(['/empleado/' + this.idEmpleado]);
        this.toastrService.success("The incidente was successfully calificado", 'Incidente calificado');
    });
    this.mostrar=false;
    }
    else{
      this.toastrService.error("The incidente is still open", 'Incidente no calificado');
    }
  }

  onEnter(value: string) {
    this.calificacion = parseInt(value); 
    this.calificar();
  }
}
