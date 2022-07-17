import { Component, OnInit } from '@angular/core';
import { faCubes, faRocket, faRobot, faLaptopCode, faThList, faCog, faChartArea } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'pulumi-front';
  faCubes = faCubes;
  faRocket = faRocket;
  faRobot = faRobot;
  faLaptopCode = faLaptopCode;
  faThList = faThList;
  faCog = faCog;
  faChartArea = faChartArea;

  showView = "inventory";

  constructor() { }

  ngOnInit(): void {
  }

  changeView(newView) {
    this.showView=newView;
  }

}
