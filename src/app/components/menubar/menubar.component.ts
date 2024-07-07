import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent implements OnInit {
  islogin: boolean = false;

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
  ngOnInit(): void {
    this.authService.currentloginStatus.subscribe((s) => {
      this.islogin = s.valueOf();
    });
  }
}
