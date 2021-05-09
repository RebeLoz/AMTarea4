import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  characters = [];
  profileId: string;
  chracter;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res => {
      console.log(res);
      this.characters = res.results;
    });
  }

  ngProfile(){
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
  this.http.get('https://rickandmortyapi.com/api/character/' + this.profileId)
    .subscribe((res) => {
      this.chracter = res;
    });
  }
}
