import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  profileId: string;
  chracter;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
  this.http.get('https://rickandmortyapi.com/api/character/' + this.profileId)
    .subscribe((res) => {
      this.chracter = res;
    });
  }
}
