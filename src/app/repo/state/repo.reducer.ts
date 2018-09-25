import { Repo } from "../../../model/repo.model";

export interface RepoState{
    repos: Repo[],
    requestedAt: Date;
    errorMessage: string;
}