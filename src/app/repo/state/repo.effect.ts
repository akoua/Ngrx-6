import { Injectable } from "@angular/core";
import { RepoService } from "../repo.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { RepoAction, LoadSuccessClass } from "./repo.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class RepoEffect{

    //nous avons un Observable sur toutes les actions ici
   constructor(private repoService: RepoService, private action$: Actions){}

   //implementation de l'effect
   @Effect()
   reposAction$: Observable<Action> = this.action$.pipe(
       //precisons l'action qui nous interesse
       ofType(RepoAction.Load),
       mergeMap(action => {
           console.log("action après filtrage", action);
           return this.repoService.getRepos().pipe(
               map(repos => {
                   console.log("repos from Effect()", repos);
                   return new LoadSuccessClass(repos); //le payload represente la collection de repos
               })
           );
       })
   );
}