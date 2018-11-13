import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamsService, AlertsService } from "../../../services/services.index";

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styles: []
})
export class TeamItemComponent implements OnInit {

  @Input() public team:Team;
  @Input() public pos:number;

  @Output() teamUpdate: EventEmitter<string> = new EventEmitter();

  constructor(private teamsService:TeamsService, private alertsService:AlertsService) { }

  ngOnInit() {

  }

  editTeam(key){
    this.teamUpdate.emit(key);
  }

  deleteTeam(key){
    this.alertsService.DeleteConfirmation('team', key).then(()=>{
      this.alertsService.ResultAlert(true, 'Se ha eliminado el equipo');
    });
  }
}
