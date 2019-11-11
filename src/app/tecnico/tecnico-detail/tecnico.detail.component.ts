import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TecnicoService } from '../tecnico.service';
import { TecnicoDetail } from '../tecnico-detail';

@Component({
    selector: 'app-tecnico-detail',
    templateUrl: './tecnico.detail.component.html',
    styleUrls: ['./tecnico.detail.component.css']
})
export class TecnicoDetailComponent implements OnInit {

    /**
    * El tecnico
    */
    @Input() tecnicoDetail: TecnicoDetail;
    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param tecnicoService The tecnico services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private tecnicoService: TecnicoService 
    ) { }

    
    

    /**
    * El id del tecnico
    */
    tecnico_id: number;
    /**
    * Extrae los detalles que queremos mostrar del tecnco en especifico
    */
    getTecnicoDetail(): void {
        this.tecnicoService.getTecnicoDetail(this.tecnico_id)
            .subscribe(authorDetail => {
                this.tecnicoDetail = TecnicoDetail
            });
    }

   
    /**
    * The method which initializes the component.
    * Creamos el tecnico
    */
    ngOnInit() {
        this.tecnico_id = +this.route.snapshot.paramMap.get('id');
        if (this.tecnico_id){
        this.tecnicoDetail = new TecnicoDetail();
        this.getTecnicoDetail();
        }
    }
}