import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message';
  name = '';
  welcomeMessageFromService?: string;

  private route = inject(ActivatedRoute);
  private service = inject(WelcomeDataService);

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }
  
  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe({
      next: (response) => { this.handleSucessfulResponse(response) },
      error: (error) => {this.handleErrorResponse(error)}
    });
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe({
      next: (response) => { this.handleSucessfulResponse(response) },
      error: (error) => {this.handleErrorResponse(error)}
    });
  }

  private handleSucessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
  }

  private handleErrorResponse(error: HttpErrorResponse) {
    this.welcomeMessageFromService = error.error.message;
  }
}
