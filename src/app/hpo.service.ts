import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class HpoService {

  constructor(private oidcSecurityServices: OidcSecurityService, private httpClient : HttpClient) { }

  public getSomeData(): Observable<HttpResponse<string>> {
    const token = this.oidcSecurityServices.getToken();
    // TODO or getIdToken() ??

    const url = 'http://localhost:8080/hapiour-entreprise-api/v1/test';
    return this.httpClient.get<string>(url, {
      observe: 'response',
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }
}