import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from '../../models/team.model';
import { Functions } from "../../helpers/validations";
import { TeamsService, AlertsService } from "../../services/services.index";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styles: []
})
export class TeamsComponent implements OnInit {

  public $key:string;
  public teamForm:FormGroup;
  public isLoading:boolean;
  public teams:Team[];
  public functions:Functions;

  constructor(private teamsService:TeamsService, private alertsService:AlertsService) {
    this.functions = new Functions();
  }

  ngOnInit() {
    this.initForm();
    this.getTeams();
  }

  initForm(name=null, stadium=null, coach=null){
    this.teamForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      stadium: new FormControl(stadium, [Validators.required]),
      coach: new FormControl(coach, [Validators.required])
    });
  }

  saveTeam(){
    if(!this.teamForm.invalid){
      let formBody = this.teamForm.controls;
      let team = new Team(formBody.name.value, formBody.coach.value, formBody.stadium.value);

      //New Team
      if(this.$key==null){
        this.teamsService.createTeam(team).subscribe((res:any)=>{
          if(res) {
            this.alertsService.ResultAlert(true, 'Se ha añadito un nuevo equipo');
            this.initForm();
          }
        }, _ => console.log('Ocurrió un error'));
      }
      //Update Team
      else{
        this.teamsService.updateTeam(team, this.$key).subscribe((res:any) =>{
          if(res){
            this.alertsService.ResultAlert(true, 'Se ha actualizado el equipo');
            this.initForm();
            this.$key = null;
          }
        }, _ => console.log('Ocurrió un error'));
      }
    }
  }

  listTeams(){
    this.teams = new Array();
    this.teamsService.listTeams().subscribe((res:any)=>{
      for(let key in res){
        let team = new Team(res[key].name, res[key].coach, res[key].stadium, key);
        this.teams.push(team);
      }
    });
  }

  getTeam(key:string) {
    this.teamsService.getTeam(key).subscribe((res:any)=>{
      this.$key = key;
      this.initForm(res.name, res.stadium, res.coach);
    });
  }

  getTeams(){
    this.isLoading = true;
    this.teamsService.getTeams().snapshotChanges().subscribe((res:any) =>{
      this.teams = new Array();
      res.forEach(elem=>{
        let payload = elem.payload.toJSON();
        let team = new Team(payload.name, payload.coach, payload.stadium, elem.key);
        this.teams.push(team);
      });
      this.isLoading = false;
    });
  }

}
