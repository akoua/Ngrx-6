import { Action } from "@ngrx/store";
import { Repo } from "../../../model/repo.model";

export enum RepoAction {
    Load= "[Repo] load",
    LoadSuccess= "[Repo] loadSuccess",
}

//action creators
export class LoadClass implements Action {

    type = RepoAction.Load;
    constructor(public payload:any = null) {}
}

export class LoadSuccessClass implements Action {
    type = RepoAction.LoadSuccess;
    constructor(public payload: Repo[]){}
}

//type
export type RepoActionType = LoadClass | LoadSuccessClass ;