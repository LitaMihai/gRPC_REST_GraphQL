import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map, Observable} from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private fullRestUrl = `${environment.restApiUrl}` + "/books";
  private fullGraphqlUrl = `${environment.graphqlApiUrl}` + "/graphql";

  constructor(private http: HttpClient, private apollo: Apollo) {}

  getRestData(): Observable<any> {
    return this.http.get(this.fullRestUrl);
  }

  getGraphQLData(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query {
          getAllBooks {
            id
            title
            author
            releaseDate
            totalPages
            genre
          }
        }
      `,
      context: {
        uri: this.fullGraphqlUrl,
      },
    })
      .valueChanges.pipe(map((result: any) => result.data.getAllBooks));
  }
}
