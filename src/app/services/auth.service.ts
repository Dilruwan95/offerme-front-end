import { Router } from '@angular/router';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { shareReplay, first } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$: Subject<User> = new Subject<User>();
   user: User= {
    id : 0,
    name : '',
    telephone : '',
    address : '',
    username : '',
    email : '',
    password : ''
   }

  constructor(private http: HttpClient, private router:Router) { }

  checkUsernameAvailability(username: string) {
    return this.http.get<any>(`/api/user/checkUsernameAvailability?username=${username}`);
  }

  checkEmailAvailability(email: string) {
    return this.http.get<any>(`/api/user/checkEmailAvailability?email=${email}`);
  }


  register(user: User){
    return this.http.post(`http://localhost:8080/api/auth/signup`, user);

  }


  /*login2(username: string, password: string) {
    return this.http.post<any>('http://localhost:8080/api/auth/signin', {"usernameOrEmail": username, "password": password})
        .pipe(tap(res => this.setSession(res)),
        shareReplay()); 
  }*/

  login(username: String, password: String){
    return this.http.post('http://localhost:8080/api/auth/signin', {"usernameOrEmail": username, "password": password}) 
    .pipe(tap(
      res => this.setSession(res),
      err => {
        console.error(err); 
        alert(err.error.message);        
      }),
    shareReplay());
  }

  logout() {
     localStorage.removeItem('accessToken');
     localStorage.removeItem('currentUser');
     this.currentUser$.next(undefined);
     this.router.navigate(['/home']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  getUserProfile(username): any {
    return this.http.get(`http://localhost:8080/api/users/${username}`);
  }

  getUserById() {
    return this.http.get<User>(`http://localhost:8080/api/users/me`);
  }

  public getUser(){
    const ab = localStorage.getItem('accessToken');
    return this.http.get(`http://localhost:8080/api/user/${ab}`);
  }

  editUserProfile(user:User){
    console.error(user);
    return this.http.put(`http://localhost:8080/api/auth/Update/${user.id}`,user);
  }

  private setSession(authResult) {
    localStorage.setItem('accessToken', authResult.accessToken);
    const ab = authResult.accessToken;
    this.http.get(`http://localhost:8080/api/user/me/${ab}`)
      .pipe(first())
      .subscribe((user: User) => {
        console.error(user);
        
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user);
        this.currentUser$.next(user);
      },
        error => {
          console.log(error);
      });

    // this.aaaService.get()
    // .subscribe(
    //   data => {
        
    //   },
    //   error =>{

    //   }
    // );
  }



updateCurrentUser(user:User):Observable<any>{

  return this.http.put(`http://localhost:8080/api/auth/Update/${user.id}`,user,{
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  })
  // .pipe(catchError(this.handlerError));
}
}