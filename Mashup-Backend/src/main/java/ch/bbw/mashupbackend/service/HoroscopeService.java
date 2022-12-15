package ch.bbw.mashupbackend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class HoroscopeService {

    private String url = "https://aztro.sameerkumar.website/?sign=scorpio&day=today";

    public String createHoroscope() {
        return "";
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}