import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Store } from '@ngrx/store';
import { Repo } from '../../../model/repo.model';
import { LoadClass } from '../state/repo.actions';

@Component({
  selector: 'cc-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {


  constructor(private store: Store<Repo>) { }

  ngOnInit() {
    this.store.dispatch(new LoadClass());
  }

}
