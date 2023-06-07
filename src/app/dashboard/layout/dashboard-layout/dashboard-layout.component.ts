import { Component, Signal, computed, inject } from '@angular/core';
import { User } from 'src/app/auth/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authService: AuthService = inject(AuthService);

  public user: Signal<User | null> = computed(() => this.authService.currentUser());

}
