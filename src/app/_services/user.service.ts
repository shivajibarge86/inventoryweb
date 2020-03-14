import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.API_URL}/users`);
    }

    register(user: User) {
        return this.http.post(`${environment.API_URL}/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.API_URL}/users/${id}`);
    }
}