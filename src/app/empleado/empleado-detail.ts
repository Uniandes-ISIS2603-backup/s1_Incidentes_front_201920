import { Empleado } from "./empleado";
import { Incidente } from "../incidente/incidente";

export class EmpleadoDetail extends Empleado{

  incidentes: Incidente[];
}