import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnico } from '../tecnico';
import { TecnicoService } from '../tecnico.service';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})

export class TecnicoListComponent implements OnInit {
 /**
     * Constructor for the component
     * @param tecnicoService 
     */
    constructor(private tecnicoService: TecnicoService) { }
    
    /**
     * The list of tecnicos
     */
    tecnicos: Tecnico[];

    /**
     * Asks the service to update the list of tecnicos
     */
    getTecnicos(): void {
        this.tecnicoService.getTecnicos().subscribe(tecnicos => this.tecnicos = tecnicos);
    }

    /**
     * This will initialize the component by retrieving the list of tecnicos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getTecnicos();
    }
}
