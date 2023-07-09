import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl ='http://localhost:3000/user';

  constructor(private http:HttpClient) { }
  getuser():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }
  getUsers(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createCat(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateCat(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteCat(id: string): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${id}`);
  }

  signUp(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/signup', { username, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/login', { username, password });
  }
}



