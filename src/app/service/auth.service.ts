import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject({access_token: '', expires_in: 0, token_type: ''});
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(email, password) {
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        let body = new URLSearchParams();
        body.set('password', password);
        body.set('username', email);
        body.set('grant_type', "password");
        body.set('client_id', null);
        body.set('client_secret', null);
        return this.http.post<User>(`${environment.apiUrl}/auth/login`, body.toString(), options)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        this.userSubject.next(null);
        this.redirectTo('/sign-in')
        // this.router.navigateByUrl('/sign-in');
        // window.location.reload();
    }

    register(user: any) {
        const userData = {
            email: user.email,
            password: user.passwordGroup.password,
            username: user.username
        }
        return this.http.post(`${environment.apiUrl}/auth/registerUser`, userData);
    }
    
    redirectTo(uri:string){
        this.router.navigateByUrl('/').then(()=>
        this.router.navigate([uri]));
     }

    verifyEmail(params) {
        return this.http.post(`${environment.apiUrl}/auth/verifyEmail`, params);
    }

    // getAll() {
    //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
    // }

    // getById(id: string) {
    //     return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    // }

    // update(id, params) {
    //     return this.http.put(`${environment.apiUrl}/users/${id}`, params)
    //         .pipe(map(x => {
    //             // update stored user if the logged in user updated their own record
    //             if (id == this.userValue.id) {
    //                 // update local storage
    //                 const user = { ...this.userValue, ...params };

    //                 // publish updated user to subscribers
    //                 this.userSubject.next(user);
    //             }
    //             return x;
    //         }));
    // }

    // delete(id: string) {
    //     return this.http.delete(`${environment.apiUrl}/users/${id}`)
    //         .pipe(map(x => {
    //             // auto logout if the logged in user deleted their own record
    //             if (id == this.userValue.id) {
    //                 this.logout();
    //             }
    //             return x;
    //         }));
    // }
}
