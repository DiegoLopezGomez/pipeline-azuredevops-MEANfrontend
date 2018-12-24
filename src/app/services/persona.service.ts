import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Persona } from '../models/persona';

@Injectable()
  export class PersonaService{
    public url: string;

    constructor(public _http: HttpClient){
      this.url = 'https://pfgpccbackend.azurewebsites.net' + '/api/';
    }

    getPersona(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json')
      return this._http.get(this.url + 'persona', {headers: headers});
    }

    savePersona(persona: Persona): Observable<any>{
      let params = JSON.stringify(persona);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.url + 'persona', params, {headers:headers});
    }
}
