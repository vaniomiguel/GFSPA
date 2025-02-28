import { Component, inject, OnInit, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  public hardcodedAuthenticationService = inject(HardcodedAuthenticationService);

  ngOnInit(): void {
  }


}
