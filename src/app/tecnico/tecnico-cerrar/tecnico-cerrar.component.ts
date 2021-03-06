import { Component, OnInit, Input } from '@angular/core';
import { Incidente } from '../../incidente/incidente';
import { IncidenteService } from '../../incidente/incidente.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnico-cerrar',
  templateUrl: './tecnico-cerrar.component.html',
  styleUrls: ['./tecnico-cerrar.component.css']
})
export class TecnicoCerrarComponent implements OnInit {

  @Input()
  incidente:Incidente;

  mostrar:boolean;

  constructor(private servcie:IncidenteService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.incidente.id);
    console.log(this.incidente.solucionado);
    if("false".localeCompare(this.incidente.solucionado)==0){
      this.mostrar=true;
    } else {
      this.mostrar=false;
    }
  }

  cerrar(){
    if(this.mostrar==true){
      this.incidente.solucionado='true';
      this.servcie.updateIncidente(this.incidente).subscribe(() => {
        this.router.navigate(['/tecnico/list']);
        this.toastrService.success("The incidente was successfully cerrado", 'Incidente cerrado');
    });
    this.mostrar=false;
    }
    else{
      this.toastrService.error("The incidente is still open", 'Incidente no cerrado');
    }
  }
}
