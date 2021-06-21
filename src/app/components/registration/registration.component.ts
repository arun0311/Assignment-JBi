import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../../validators/must-match.validator';

const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{3})+$/;
const mobileRegex = /^([6-9]{1}[0-9]{9})+$/;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;
  public submitted: boolean = false;
  public showloader: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.initialitzeForm();
  }

  /**
   * initialize the registration form
   * @method initialitzeForm
   */
  private initialitzeForm() {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3),]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      userName: ['', [Validators.required, Validators.minLength(3),]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(mobileRegex)]],
      address: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  /* convenience getter for easy access to form fields */
  get f() { return this.registrationForm.controls; }

  /** 
   * submit the registeration form if valid
   * @method onSubmit
   */
  public onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    this.showloader = true;
    setTimeout(() => {
      this.showloader = this.submitted = false;
      this.route.navigate(['/show-record']);
    }, 3);
  }

}
