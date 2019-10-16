import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    private router: Router,
    private formService: FormService,
  ) { }

  data

  ngOnInit() {

    this.data = this.formService.data
    console.log('data' , this.data)
  }


  goBackToForm(){
    this.router.navigate(['/form']);
  }
}
