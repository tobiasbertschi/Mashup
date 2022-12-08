package ch.bbw.mashupbackend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    private String openWeatherKey = "3eb44406d378ea59d127e5daa17b4bee";
    private String request = "https://api.openweathermap.org/data/2.5/weather?q=Zuerich&appid=" + openWeatherKey;

    public String getWeather() {
        try {
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(request, String.class);

            return response.getBody().toString();
        } catch (
                Exception e) {
            System.out.println(e);
        }

        return "fail";
    }

    public String getOpenWeatherKey() {
        return openWeatherKey;
    }

    public void setOpenWeatherKey(String openWeatherKey) {
        this.openWeatherKey = openWeatherKey;
    }

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }
}