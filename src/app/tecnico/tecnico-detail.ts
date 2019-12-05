import {Incidente} from "../incidente/incidente";
import {Tecnico} from "./tecnico";

export class TecnicoDetail extends Tecnico{
  incidentes:Incidente[]; 
}