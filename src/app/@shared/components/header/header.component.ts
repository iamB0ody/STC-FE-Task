import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { LanguageService } from 'src/app/@core/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isAdmin: boolean = false;
  @Input() categories: string[] = [];

  constructor(private authService: AuthService, public languageService: LanguageService) {
  }

  logout() {
    this.authService.logout();
  }
}
