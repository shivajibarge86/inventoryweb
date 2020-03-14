import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {environment} from '../../environments/environment';
import { User } from '../_models/index';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private theBoolean: BehaviorSubject<boolean>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.theBoolean = new BehaviorSubject<boolean>(false);
    }
    public getTheBoolean(): Observable<boolean> {
        return this.theBoolean.asObservable();
    }

    public setTheBoolean(newValue: boolean): void {
        this.theBoolean.next(newValue);
    }
    
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username, password) {
       
        
    return this.http.post<any>(`${environment.API_URL}/authenticate`, { username, password })
            .pipe(map(user => {
                debugger;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                this.setTheBoolean(true);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.setTheBoolean(false);
    }
}