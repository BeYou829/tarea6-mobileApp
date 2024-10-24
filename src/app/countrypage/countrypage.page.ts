import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


// export type Root = ApiResponse[]

export interface ApiResponse {
  alpha_two_code: string
  domains: string[]
  stateprovince: String
  country: string
  name: string
  web_pages: string[]
}
//haciendo la interfaz

@Component({
  selector: 'app-countrypage',
  templateUrl: './countrypage.page.html',
  styleUrls: ['./countrypage.page.scss'],
})
export class CountrypagePage implements OnInit {

  constructor(private http: HttpClient) { }

  public countryName: String = '';
  public countryResult: ApiResponse | any = null;
  public countryApi: String = 'http://universities.hipolabs.com/search?country=';
  public errorMessage: String = '';
  ngOnInit() {
  }

  onSubmit() {

    this.countryResult = null;
    this.errorMessage = '';
    if (!this.countryName) {
      this.errorMessage ="We couldn't trace your country"
      return false
    }

    this.http.get<ApiResponse>(this.countryApi.toString() + this.countryName)
      .subscribe(
        (response) => {

          this.countryResult = response
          console.log(`${this.countryResult[0].country} has the following universities: `)

          //Necesitamos Mostrar las universidad de dicho pais
          //Nombre de la universidad
          //Dominio
          //Link a la pagina web

          this.countryResult.forEach((c: ApiResponse) => {
            console.log(`${c.name}`)
            c.domains.forEach(d => console.log(d))
            c.web_pages.forEach(wp => console.log(wp))
          });
        },
        (error) => {
          this.errorMessage ="We couldn't trace your country"
          return console.log('Error', error)
        } 
      )
      return true
  }
}
