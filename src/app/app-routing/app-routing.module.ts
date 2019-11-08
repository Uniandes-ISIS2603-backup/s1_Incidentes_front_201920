import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import { CoordinadorListComponent } from '../coordinador/coordinador-list/coordinador-list.component';
import { CoordinadorDetailListComponent } from '../coordinador/coordinador-detail-list/coordinador-detail-list.component';
import { CoordinadorCreateComponent } from '../coordinador/coordinador-create/coordinador-create.component';
import { IncidenteListComponent } from '../incidente/incidente-list/incidente-list.component';
import { CoordinadorTecnicosComponent } from '../coordinador/coordinador-tecnicos/coordinador-tecnicos.component';
import { CoordinadorIncidentesComponent } from '../coordinador/coordinador-incidentes/coordinador-incidentes.component';
import { EmpleadoListComponent } from '../empleado/empleado-list/empleado-list.component';
import { IncidenteDetailListComponent } from '../incidente/incidente-detail-list/incidente-detail-list.component';
import { EmpleadoDetailComponent } from '../empleado/empleado-detail/empleado-detail.component';

const routes: Routes = [

    {
        path: 'coordinador',
        children: [
            {
                path: ":id",
                component: CoordinadorDetailListComponent,
                children: [
                    {
                        path: "tecnicos",
                        component: CoordinadorTecnicosComponent
                    },
                    {
                        path: "incidentes",
                        component: CoordinadorIncidentesComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'coordinadores',
        component: CoordinadorListComponent,
        children: [
            {
                path: "create",
                component: CoordinadorCreateComponent
            }
        ]
    },
    {
        path: 'incidente',
        children: [
            {
                path: ":id",
                component: IncidenteDetailListComponent,
                children: [
                    {
                        path: "actuaciones",
                        component: IncidenteDetailListComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'incidentes',
        component: IncidenteListComponent,
    },
    {
        path: 'empleados',
        component: EmpleadoListComponent,
    },
    {
        path: 'empleado',
        children: [
            {
                path: ":id",
                component: EmpleadoDetailComponent,
            }
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
