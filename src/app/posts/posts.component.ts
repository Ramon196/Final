import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MaterialModule } from '../angular-material/material.module';

@Component({
  selector: 'app-posts',
  imports: [MaterialModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<any>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.dataSource.data = data;
    });
  }
}