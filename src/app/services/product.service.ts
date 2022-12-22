import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private myAppUlr: string;
 

  constructor( private http: HttpClient) {
    this.myAppUlr = environment.endpoint;
   }

getListClient(): Observable<Client[]> {

  const headers = new HttpHeaders({
    'user' : environment.user,
    'password': environment.password
  })
  return this.http.get<Client[]>(this.myAppUlr, {headers});
}

saveClient(client: Client): Observable<void>{
  const headers = new HttpHeaders({
    'user' : environment.user,
    'password': environment.password
  })
  return this.http.post<void>(this.myAppUlr, client, {headers})
}

deleteCLient(id: number): Observable<void>{
  const headers = new HttpHeaders({
    'user' : environment.user,
    'password': environment.password
  })
  return this.http.delete<void>(this.myAppUlr+id,{headers})
}

getClient(id: number): Observable<Client>{
  const headers = new HttpHeaders({
    'user' : environment.user,
    'password': environment.password
  })
  return this.http.get<Client>(this.myAppUlr+id,{headers})
}

updateClient(id: number, client: Client): Observable<void>{
  const headers = new HttpHeaders({
    'user' : environment.user,
    'password': environment.password
  })
  return this.http.put<void>(this.myAppUlr+id, client,{headers})
}

}
