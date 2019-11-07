import { InMemoryDbService } from "angular-in-memory-web-api";

export class CoordinadorClientService implements InMemoryDbService {
  createDb() {
    let coordinadores = [
      {
        "id": 1,
        "name": "Juan",
        "username": "juan",
        "password": "juan",
        "tecnicos": [
          {
            "id": 1,
            "username": "t1",
            "password": "t1",
            "incidentesAsignados": 2,
            "especialidad" : "HARDWARE"
          },
          {
            "id": 2,
            "username": "t2",
            "password": "t2",
            "incidentesAsignados": 1,
            "especialidad" : "HARDWARE"
          },
          {
            "id": 3,
            "username": "t3",
            "password": "t3",
            "incidentesAsignados": 3,
            "especialidad" : "HARDWARE"
          },
          {
            "id": 4,
            "username": "t4",
            "password": "t4",
            "incidentesAsignados": 0,
            "especialidad" : "SW_SO"
          },
          {
            "id": 5,
            "username": "t5",
            "password": "t5",
            "incidentesAsignados": 1,
            "especialidad" : "SW_SO"
          },
          {
            "id": 6,
            "username": "t6",
            "password": "t6",
            "incidentesAsignados": 4,
            "especialidad" : "SW_AD"
          }
        ],
        "incidentes": [
          {
            "id": 1,
            "fechaHoraInicial": "fecha1",
            "fechaHoraFinal": "fecha2",
            "descripcion": "descripcion1",
            "observaciones": "observacion1",
            "calificacion": 1,
            "categoria": "categoria1",
            "prioridad": "prioridad1",
            "solucionado": "true",
            "reabrir": "false",
            "equipo": "equipo1",
            "tecnico": "tecnico1",
            "empleado": "empleado1",
            "coordinador": "coordinador1",
            "actuaciones": []
        },
        {
            "id": 2,
            "fechaHoraInicial": "fecha3",
            "fechaHoraFinal": "fecha4",
            "descripcion": "descripcion2",
            "observaciones": "observacion2",
            "calificacion": 1,
            "categoria": "categoria2",
            "prioridad": "prioridad2",
            "solucionado": "true",
            "reabrir": "false",
            "equipo": "equipo2",
            "tecnico": "tecnico2",
            "empleado": "empleado2",
            "coordinador": "coordinador2",
            "actuaciones": []
        }
        ]

      },
      {
        "id": 2,
        "name": "Pedro",
        "username": "ususario",
        "password": "clave"
      },
      {
        "id": 3,
        "name": "Pablo",
        "username": "soyPablo",
        "password": "aaaaaa"
      },
      {
        "id": 4,
        "name": "Monica",
        "username": "moni",
        "password": "1234"
      }
    ];
    return { coordinadores };
  }
}