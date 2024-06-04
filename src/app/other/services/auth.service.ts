import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): Observable<boolean> {
    const isLoggedIn = !!localStorage.getItem('authToken');
    return of(isLoggedIn); // Retornamos un observable que emite el estado de autenticación
  }
  
}
