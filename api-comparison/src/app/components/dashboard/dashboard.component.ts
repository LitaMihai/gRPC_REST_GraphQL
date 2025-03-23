import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  restData: any;
  graphqlData: any;
  grpcData:any;

  // constructor(private apiService: ApiService, private apollo: Apollo) {}
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // REST
    this.apiService.getRestData().subscribe(response => {
      this.restData = response;
    });

    // GraphQL
    this.apiService.getGraphQLData().subscribe(response => {
      this.graphqlData = response;
      console.log(response)
    })

    // gRPC
  }
}
