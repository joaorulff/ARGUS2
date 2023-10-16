import { Component } from '@angular/core';
import { GlobalFlagsService } from 'src/app/services/globalFlags.service';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  constructor( public globalFlags: GlobalFlagsService ){}
  
}
