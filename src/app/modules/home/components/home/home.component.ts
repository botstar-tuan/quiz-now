import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/modules/test/services/test.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }


}
