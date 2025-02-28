import { Component, inject, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  private hardcodedAuthenticationService = inject(HardcodedAuthenticationService);

    ngOnInit(): void {
      this.hardcodedAuthenticationService.logout();
    }

}
