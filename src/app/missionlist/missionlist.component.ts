import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];
  allMissions: any[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.getAllMissions();
  }

  getAllMissions() {
    this.spacexService.getMissions().subscribe(data => {
      this.allMissions = data;
      this.missions = data;
    });
  }

  getMissions(filters: any) {
    const { year, launchStatus, landingStatus } = filters;

    this.missions = this.allMissions.filter(mission => {
      let matchesYear = year ? mission.launch_year === year : true;
      let matchesLaunch = true;
      let matchesLanding = true;

      if (launchStatus) {
        matchesLaunch = launchStatus === 'successful'
          ? mission.launch_success === true
          : mission.launch_success === false;
      }

      if (landingStatus) {
        matchesLanding = landingStatus === 'successful'
          ? mission.rocket.first_stage.cores.every((core: any) => core.land_success === true)
          : mission.rocket.first_stage.cores.some((core: any) => core.land_success === false);
      }

      return matchesYear && matchesLaunch && matchesLanding;
    });
  }
}
