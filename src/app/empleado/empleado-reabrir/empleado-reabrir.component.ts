import { Component, OnInit, Input } from '@angular/core';
import { Incidente } from '../../incidente/incidente';
import { IncidenteService } from "../../incidente/incidente.service";
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado-reabrir',
  templateUrl: './empleado-reabrir.component.html',
  styleUrls: ['./empleado-reabrir.component.css']
})
export class EmpleadoReabrirComponent implements OnInit {

  @Input()
  incidente:Incidente;

  @Input()
  idEmpleado;

  mostrar:boolean;

  constructor(private servcie:IncidenteService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if("false".localeCompare(this.incidente.solucionado)==0){
      this.mostrar=false;
    } else {
      this.mostrar=true;
    }
  }

  reabrir(){
    if(this.mostrar){
      this.incidente.reabrir='true';
      this.servcie.updateIncidente(this.incidente).subscribe(() => {
        this.router.navigate(['/empleado/' + this.idEmpleado]);
        this.toastrService.success("The incidente was successfully reabierto", 'Incidente reabierto');
    });
    this.mostrar=false;
    }
    else{
      this.toastrService.error("The incidente is still open", 'Incidente no calificado');
    }
  }
}
