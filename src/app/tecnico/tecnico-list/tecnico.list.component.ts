import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {TecnicoService} from '../tecnico.service';
import {Tecnico} from '../tecnico';
import {TecnicoDetail} from '../tecnico-detail';

/**
* TEl componente list de tecnico
*/
@Component({
    selector: 'app-tecnico',
    templateUrl: './tecnico.list.component.html',
    styleUrls: ['./tecnico.list.component.css']
})
export class TecnicoListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param tecnicoService El service del tecnico
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private tecnicoService: TecnicoService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) {}

    /**
    * la lista de tecnicos
    */
    tecnicos: Tecnico[];

    /**
    * El id del tecnico que quiere ver el usuario
    */
    author_id: number;

    /**
    * Mueestra o esconde el tecnicocreate
    */
    showCreate: boolean;

    /**
     * muestra o esconde el detail del tecnico
     */
    showView: boolean;

    /**
     * El tecnico que el usuario ha seleccionado
     */
    selectedTecnico: Tecnico;


    /**
    * muestra el tecnico
    */
    onSelected(tecnico_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.tecnico_id = tecnico_id;
        this.selectedTecnico = new TecnicoDetail();
        this.getTecnicoDetail();
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showView = false;
        this.showCreate = !this.showCreate;
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(tecnico_id: number): void {
        if  (this.showEdit && tecnico_id != this.selectedTecnico.id) {
            this.showView = false;
            this.showCreate = false;
            this.tecnico_id = author_id;
            this.selectedTecnico = new TecnicoDetail();
            this.getTecnicoDetail();
        }
        else {
            this.showView = true;
        }
    }

    /**
    * Asks the service to update the list of tecnicos
    */
    getTecnicos(): void {
        this.tecnicoService.getTecnicos()
            .subscribe(tecnicos => {
                this.tecnicos = tecnicos;
            });
    }

    getTecnicoDetail(): void {
        this.tecnicoService.getTecnicoDetail(this.tecnico_id)
            .subscribe(selectedTecnico => {
                this.selectedTecnico = selectedTecnico
            });
    }

    updateTecnico(): void {
        this.showEdit = false;
        this.showView = true;
    }

    /**
    * Borra un tecnico
    */
    deleteTecnico(tecnicoId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar un tecnico',
            childComponent: SimpleModalComponent,
            data: {text: 'Está seguro de querer eliminar este tenico?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.tecnicoService.deleteTecnico(tecnicoId).subscribe(() => {
                            this.toastrService.error("el tecnico ha sido eliminado", "Tecnico eliminado");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }


    /**
    * Inicializa los componentes from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showView = false;
        this.selectedTecnico = undefined;
        this.tecnico_id = undefined;
        this.getTecnicos();
    }
}