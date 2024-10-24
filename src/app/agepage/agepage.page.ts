import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';

interface ApiResponse{
  count: number,
  name: String,
  age: number
}


@Component({
  selector: 'app-agepage',
  templateUrl: './agepage.page.html',
  styleUrls: ['./agepage.page.scss'],
})
export class AgepagePage implements OnInit {

  constructor(private http: HttpClient) { }

  public name: string = '';       // Nombre ingresado por el usuario
  public ageResult: ApiResponse | null = null;  // Resultado de la API
  public errorMessage: string = '';  // Mensajes de error
  public apiConnection: String = 'https://api.agify.io/?name=';
  public ternure: String = '';

  ngOnInit() {
  }

  getTernure(ageNumber: number){
    var ternure = '';
    if(ageNumber<0){
      return false
    }
    if(ageNumber<= 18){
      ternure = 'joven'
    }else if(ageNumber>18 && ageNumber<60){
      ternure = 'adulta'
    }else{
      ternure = 'anciana'
    }
    return ternure
  }

  onSubmit(){
    this.ageResult = null;
    this.errorMessage = ''
    if(!this.name){
      this.errorMessage = 'Insert a valid name';
    }
    this.http
    .get<ApiResponse>(this.apiConnection + this.name)
    .subscribe(
      (response) => {
        this.ageResult = response
        this.ternure = this.getTernure(this.ageResult.age).toString()
      },
      (error)=>{
        this.errorMessage = 'Invalida name'
      }
    )

  }

}
