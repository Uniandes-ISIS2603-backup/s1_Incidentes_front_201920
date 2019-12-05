import { Empleado } from '../empleado/empleado';

import { Tecnico } from '../tecnico/tecnico';

import { Coordinador } from '../coordinador/coordinador';

export class Incidente {
    id: number;
    fechaHoraInicio: string;
    fechaHoraFinal: string;
    descripcion: string;
    observaciones: string;
    calificacion: number;
    categoria: string;
    prioridad: string;
    solucionado: string;
    reabrir: string;
    equipo: string;
    tecnico: Tecnico;
    empleado: number;
    coordinador: Coordinador;
    
  } 