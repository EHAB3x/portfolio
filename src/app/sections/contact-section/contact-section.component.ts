import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(100)]],
      email_body: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  get f() { return this.contactForm.controls; }

  sendEmail(event: Event) {
    event.preventDefault();
    this.submitError = '';
    this.submitSuccess = false;
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    emailjs
      .sendForm(
        environment.emailsJsServiceId,
        environment.emailsJsTemplateId,
        event.target as HTMLFormElement,
        {
          publicKey: environment.emailsJsPublicKey,
        }
      )
      .then(
        () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
        },
        (error) => {
          this.isSubmitting = false;
          this.submitError = (error as EmailJSResponseStatus).text || 'Failed to send email.';
        }
      );
  }
}
