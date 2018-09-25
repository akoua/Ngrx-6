import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {tap} from "rxjs/operators"

import { Repo } from "../../model/repo.model";
import { Observable } from 'rxjs';
import { Console } from '@angular/core/src/console';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  reposUrl = 'https://api.github.com/users/codeconcept/repos';

  constructor(private http: HttpClient) { }

  getRepos(): Observable<Repo[]>{
    return this.http.get<Repo[]>(this.reposUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      )
  }
}
