import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';

import { Observable, of } from 'rxjs';

import { environment } from 'environments/environments';
import { User, AuthStatus } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private httpClient: HttpClient = inject(HttpClient);

  private _currentUser: WritableSignal<User | null> = signal<User | null>(null);
  private _authStatus: WritableSignal<AuthStatus> = signal<AuthStatus>(AuthStatus.checking);

  login(email: string, password: string): Observable<boolean> {
    return of(true);
  }

}
