import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;
  comentarios: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.mensajes = this.dataService.getPosts();
    this.comentarios = this.dataService.getComments();
  }



}
