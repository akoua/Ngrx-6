import { Repo } from "../../../model/repo.model";
import { RepoAction, RepoActionType } from "./repo.actions";

export interface RepoState{
    repos: Repo[],
    requestedAt: Date;
    errorMessage: string;
}

const initialState: RepoState ={
    repos: [],
    requestedAt: null,
    errorMessage:''
}

export function reducer(state = initialState, action: RepoActionType) {
    switch (action.type) {
        case RepoAction.Load:
            return {
                ...state,
                requestedAt: new Date().toISOString()
            }
        default:
            return state;
    }
}