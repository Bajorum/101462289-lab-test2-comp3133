import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MissionlistComponent, MissionfilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101472085-lab-test2-comp3133';

  @ViewChild('missionList') missionListComponent!: MissionlistComponent;

  onFiltersChanged(filters: any) {
    if (this.missionListComponent) {
      this.missionListComponent.getMissions(filters);
    }
  }
}
