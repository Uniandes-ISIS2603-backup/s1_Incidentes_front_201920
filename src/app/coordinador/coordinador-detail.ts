import {Coordinador} from "./coordinador";
import {Incidente} from "../incidente/incidente";
import {Tecnico} from "../tecnico/tecnico";

export class CoordinadorDetail extends Coordinador{

  tecnicos:Tecnico[];
  incidentes:Incidente[];
}