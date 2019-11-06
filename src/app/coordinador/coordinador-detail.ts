import {Coordinador} from "./coordinador";
import {Incidente} from "./incidente";
import {Tecnico} from "./tecnico";

export class CoordinadorDetail extends Coordinador{

  tecnicos:Tecnico[];
  incidentes:Incidente[];
}