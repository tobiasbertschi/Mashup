package ch.bbw.mashupbackend.controller;

import ch.bbw.mashupbackend.service.CatService;
import ch.bbw.mashupbackend.service.FactService;
import ch.bbw.mashupbackend.service.HoroscopeService;
import ch.bbw.mashupbackend.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @Autowired
    final WeatherService weatherService;
    final CatService catService;
    final FactService factService;
    final HoroscopeService horoscopeService;

    public ApiController(WeatherService weatherService, CatService catService, FactService factService, HoroscopeService horoscopeService) {
        this.weatherService = weatherService;
        this.catService = catService;
        this.factService = factService;
        this.horoscopeService = horoscopeService;
    }

    @GetMapping("/weather")
    public String getWeather() {
        return weatherService.getWeather();
    }

    @GetMapping("/cats")
    public String getCats() {
        return catService.getCat();
    }

    @GetMapping("/fact")
    public String getFact() {
        return factService.getFact();
    }

    @PostMapping("/horoscope")
    public String postHoroscope() {
        return horoscopeService.createHoroscope();
    }

}