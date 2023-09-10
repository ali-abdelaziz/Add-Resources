import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showFixedTime: boolean = false
  showDatesCount: boolean = false
  showDaysSetup: boolean = false

  ngOnInit() {

  }

  toggleFixedTime() {
    this.showFixedTime=!this.showFixedTime
  }

  toggleDatesCount() {
    this.showDatesCount =! this.showDatesCount
  }

  toggleDaysSetup() {
    this.showDaysSetup =! this.showDaysSetup
  }

}
