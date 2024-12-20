import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MaterialModule } from '../angular-material/material.module';


@Component({
  selector: 'app-users',
  imports: [MaterialModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  dataSource = new MatTableDataSource<any>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.dataSource.data = data;
    });
  }
}