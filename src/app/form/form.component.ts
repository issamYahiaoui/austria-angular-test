import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

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
    private fb: FormBuilder,
    private router: Router,
    private formService: FormService,

  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',[Validators.email,Validators.required]],
      address: ['',Validators.required],
      phone: ['',[Validators.maxLength(10),Validators.minLength(10),Validators.required]],
    });
  }

  submitForm(event){
    console.log('Submitting ...')
    console.log(this.form.value)
    if(this.form.valid)   {
      this.formService.data = this.form.value
      this.router.navigate(['/overview', {data : this.form.value}]);
    }
  }





  
}
