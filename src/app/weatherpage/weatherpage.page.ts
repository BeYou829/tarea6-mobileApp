import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weatherpage',
  templateUrl: './weatherpage.page.html',
  styleUrls: ['./weatherpage.page.scss'],
})
export class WeatherpagePage implements OnInit {

  public city: string = 'Santo Domingo';  // Ciudad por defecto
  public weatherData: any;   // Datos del clima obtenidos de la API
  public errorMessage: string = ''; // Para manejar errores

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherForDefaultCity();
  }

  // Obtener el clima de Santo Domingo automáticamente
  getWeatherForDefaultCity() {
    this.weatherService.getWeatherByCity(this.city).subscribe(
      data => {
        this.weatherData = data;
        //this.weatherData?.city to find the name
        //this.weatherData.list[0].main.temp to find out the temp
        //this.weatherData.list[0].weather[0].main
        //this.weatherData.list[0].wind.speed
        console.log(this.weatherData.list[0].main.humidity)
        this.errorMessage = ''; // Limpiar el mensaje de error si se obtienen datos
      },
      error => {
        this.weatherData = null;
        this.errorMessage = 'Could not fetch weather data for Santo Domingo';
      }
    );
  }

}
