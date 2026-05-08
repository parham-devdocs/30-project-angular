import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.html',
  imports:[ReactiveFormsModule,CommonModule],
  styleUrl: './feedback-form.css',
})
export class FeedbackForm {
 name="parham"
 email="p@gmail.com"
 description="this is the desccription"
  fb = new FormBuilder()
  submitted = false;
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    description:['', [Validators.required, Validators.minLength(10)]]
  })

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value.email,this.form.value.email,this.form.value.description)
    if (this.form.valid) {
      this.name=this.form.value.name as string
      this.email=this.form.value.email as string
      this.description=this.form.value.description as string


    }
  }
}
