import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RepoState } from "./repo.reducer";

//nous allons créer les differents selectors
export const getRepoState = createFeatureSelector<RepoState>('reposStore');

//des selectors bien precis maintenant
export const getAllRepos = createSelector(getRepoState, data => data.repos);
export const getRequesTimeDate = createSelector(getRepoState, data => data.requestedAt);
