import { Injectable } from '@angular/core';
import { TeamsService } from '../teams/teams.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private teamsService:TeamsService) { }

  DeleteConfirmation(model:string, $key:string) : Promise<any>{
    return new Promise<any>((resolve, reject)=>{
      swal({
        title: 'Está seguro de eliminar?',
        text: "Luego de eliminar no habrá marcha atrás",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then((result)=> {
        if(result.value){
          switch(model)  {
            case 'team': {
              this.teamsService.deleteTeam($key).subscribe(res => resolve(res));
            } break;

            default : {
              reject('Error!');
            } break;
          }      
        }
      })
    })
  }

  ResultAlert(ok:boolean, message:string){
    let type;
    let title;
    if(ok){ type = 'success'; title = 'Hecho!'; }
    else{  type = 'warning'; title = 'Ops!'; }
    swal({
      type: type,
      title: title,
      text: message,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
