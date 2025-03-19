import { Component } from '@angular/core';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HttpLink} from "apollo-angular/http";
import {InMemoryCache} from "@apollo/client";

// export function createApollo(httpLink: HttpLink) {
//   return {
//     link: httpLink.create({ uri: 'http://localhost:8081/graphql' }),
//     cache: new InMemoryCache(),
//   }
// }

@Component({
  selector: 'app-root',
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'api-comparison';
}
