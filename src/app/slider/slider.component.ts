import { Component, OnInit } from '@angular/core';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';
import {SliderService} from './slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  courses;
  filterCourses;
  minVal= 0;
  maxVal = 300;
  constructor(private sliderService: SliderService) { }

  ngOnInit() {
    this.courses = this.sliderService.getCourses();
  }
  myOnFinish(val) {
    this.minVal = val.from;
    this.maxVal = val.to;
  }


}
