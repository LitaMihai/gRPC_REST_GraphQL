import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import {gql} from "@apollo/client";
import {Apollo} from "apollo-angular";

const GET_DATA = gql`
  query {
    getData {
      message
    }
  }
`;

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  data: any;
  message: string = ""

  // constructor(private apiService: ApiService, private apollo: Apollo) {}
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // REST
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });

    // GraphQL
    // this.apollo.watchQuery<any>({
    //   query: GET_DATA,
    // }).valueChanges.subscribe(({ data }) => {
    //   this.message = data.getData().message;
    // })
  }
}
