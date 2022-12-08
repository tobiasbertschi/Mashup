package ch.bbw.mashupbackend.controller;

import ch.bbw.mashupbackend.service.CatService;
import ch.bbw.mashupbackend.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @Autowired
    final WeatherService weatherService;
    final CatService catService;

    public ApiController(WeatherService weatherService, CatService catService) {
        this.weatherService = weatherService;
        this.catService = catService;
    }

    @GetMapping("/weather")
    public String getWeather() {
        return weatherService.getWeather();
    }

    @GetMapping("/cats")
    public String getCats() {
        return catService.getCat();
    }

}