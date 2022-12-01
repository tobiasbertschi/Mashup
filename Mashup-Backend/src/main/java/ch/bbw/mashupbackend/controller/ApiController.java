package ch.bbw.mashupbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.HttpURLConnection;
import java.net.URL;

@RestController
public class ApiController {

    private String openWeatherKey = "3eb44406d378ea59d127e5daa17b4bee";
    private String request = "https://api.openweathermap.org/data/2.5/weather?q=Zuerich&appid=" + openWeatherKey;

    @GetMapping("/weather")
    public String getWeather() {

        try {
            URL url = new URL(request);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            //return con.ge;
        } catch (Exception e) {
            System.out.println(e);
        }

        return "fail";
    }

}