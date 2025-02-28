import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message';
  name = '';

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name'];
  }
  

}
