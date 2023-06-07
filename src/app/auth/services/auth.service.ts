import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';

import { Observable, map, of, tap } from 'rxjs';

import { environment } from 'environments/environments';
import { User, AuthStatus, LoginResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private httpClient: HttpClient = inject(HttpClient);

  private _currentUser: WritableSignal<User | null> = signal<User | null>(null);
  private _authStatus: WritableSignal<AuthStatus> = signal<AuthStatus>(AuthStatus.checking);

  public currentUser: Signal<User | null> = computed(() => this._currentUser());
  public authStatus: Signal<AuthStatus> = computed(() => this._authStatus());

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };
    return this.httpClient.post<LoginResponse>(url, body)
      .pipe(
        tap(({user, token}) => {
          this._currentUser.set(user);
          this._authStatus.set(AuthStatus.authenticated);
          localStorage.setItem('token', token);
          console.log(user, token)
        }),
        map(() => true)
      );
  }

}
