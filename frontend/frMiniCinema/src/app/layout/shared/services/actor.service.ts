import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Actor} from '../interface/common';
import { Observable } from 'rxjs';
@Injectable()
export class ActorService {
  actorData = {};
  private apiActorUrl = 'http://localhost:3000/actr';
  constructor(private http: HttpClient) {
  }

  createActor(actrData): Observable <Actor> {
    const httpOptions = {
     // headers: new HttpHeaders().set('Content-Type', 'application/json ; charset=utf-8')
    //  headers: new HttpHeaders({'Content-Type': 'application/json', 'Referrer-Policy': 'no-referrer-when-downgrade'})
    };
    this.actorData = {
        name: actrData.actorName,
        gender: actrData.gender,
        dob: actrData.dateOfBirth,
        bio: actrData.bio
    };
    return this.http.post<Actor>('http://localhost:3000/actr/createActor', this.actorData, httpOptions);
  }

  getActorDetails(): Observable <Actor[]> {
    return this.http.get<Actor[]>('http://localhost:3000/actr/getList');
  }

  deleteActorById(id:string):Observable<Actor[]> {
      return this.http.delete<Actor[]>(`http://localhost:3000/actr/deleteActors/${id}`);
  }

  updateActorById(id,actorData):Observable<Actor[]> {
    console.log(">>actorData",actorData);
    // this.actorData = {
    //   name: actorData.actorName,
    //   gender: actorData.gender,
    //   dob: actorData.dateOfBirth,
    //   bio: actorData.bio
    // }
    return this.http.put <Actor[]> (`http://localhost:3000/actr/updateActor/${id}`, actorData);
  }

  getRecordById(id:any){
  return this.http.get<Actor[]>(`http://localhost:3000/actr//FindRecordById/${id}`);
  }
}
