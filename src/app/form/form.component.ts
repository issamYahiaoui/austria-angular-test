import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  

  ngOnInit() {
  }

  form: FormGroup;
  submitted = false;
  loading = null ;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      address: [''],
      phone: [''],
    });
  }

  
}
