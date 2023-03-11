import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isAdmin: boolean = false;
  @Input() categories: string[] = [];

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
