import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { StorageService } from 'src/app/@core/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup = new FormGroup({});
  submited: boolean = false;

  currentRole!: string;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.initForm();
    this.handleRole()
  }

  ngOnInit(): void {}

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  handleRole(){
    if (this.router.url.includes('admin')) {
      this.currentRole = 'admin';
    } else if (this.router.url.includes('user')) {
      this.currentRole = 'user';
    }
  }

  setStaticCred() {
    this.loginForm.patchValue({
      username: 'mor_2314',
      password: '83r5^_',
    });
  }

  onSubmit(): void {
    this.submited = true;
    this.setStaticCred();
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (rsp) => {
          const role = this.currentRole;
          this.storageService.set('token', rsp.token);
          this.storageService.set('role', role);
          if(role === 'admin'){
            this.router.navigate(['admin'])
          }
          if(role === 'user'){
            this.router.navigate(['user'])
          }
          this.snackBar.open('success');
        },
      });
    }
  }
}
