import { Action } from "@ngrx/store";

export enum RepoAction {
    Load= "[Repo] load"
}

//action creators
export class LoadClass implements Action {

    type = RepoAction.Load;
    constructor(payload?:string) {}
}

//type
export type RepoType = LoadClass;