import { Point } from './../../models/point.model';
import { PointService } from './../../services/point.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-points-component',
  templateUrl: './listpoints.component.html',
})
export class ListpointsComponent implements OnInit {

  Points: Point[];
  constructor(private PointsService: PointService){}

  ngOnInit() {
    this.PointsService.getPoints().subscribe(data => {
      this.Points = data;
    });
  }

}
