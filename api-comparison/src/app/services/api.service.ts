import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map, Observable} from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private graphqlPath= "/graphql";
  private restPath = "/rest";
  private fullRestUrl = `${environment.restApiUrl}` + this.restPath;
  private fullGraphqlUrl = `${environment.graphqlApiUrl}` + this.graphqlPath;

  constructor(private http: HttpClient, private apollo: Apollo) {}

  getRestData(): Observable<any> {
    return this.http.get(this.fullRestUrl);
  }

  getGraphQLData(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query bookDetails {
          bookById(id: "book-1") {
            id
            name
            pageCount
            author {
              id
              firstName
              lastName
            }
          }
        }
      `,
      context: {
        uri: this.fullGraphqlUrl,
      },
    })
      .valueChanges.pipe(map((result: any) => result.data.books));
  }
}
