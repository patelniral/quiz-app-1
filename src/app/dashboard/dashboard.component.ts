import { Component, OnInit , trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    constructor(private router : Router) {

    }

    ngOnInit() {
    }
}