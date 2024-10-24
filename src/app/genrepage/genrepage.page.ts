import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface ApiResponse {
  count: number;
  name: string;
  gender: string;
  probability: number;
}

@Component({
  selector: 'app-genrepage',
  templateUrl: './genrepage.page.html',
  styleUrls: ['./genrepage.page.scss'],
})

export class GenrepagePage implements OnInit {

  public name: string = '';       // Nombre ingresado por el usuario
  public nameResult: ApiResponse | null = null;  // Resultado de la API
  public errorMessage: string = '';  // Mensajes de error
  public apiConnection: String = 'https://api.genderize.io/?name=';
  constructor(public http: HttpClient) { }

  ngOnInit() {
    
  }

  onSubmit() {
    
    this.nameResult = null;
    this.errorMessage = '';

    if (!this.name) {
      this.errorMessage = 'Please enter a name';
      return;
    }

    this.http
      .get<ApiResponse>(this.apiConnection + this.name)
      .subscribe(
        (response) => {
          this.nameResult = response;
          response.probability = response.probability*100
          
          console.log('Response:', response);
        },
        (error) => {
          this.errorMessage = 'Failed to retrieve data. Please try again later.';
          console.error('Error:', error);
        }
      );
  }

}
