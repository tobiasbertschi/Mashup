package ch.bbw.mashupbackend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Random;

@Service
public class CatService {

    Random random = new Random();
    private String url = "http://placekitten.com/";

    public String getCat() {
        try {
            int width = random.nextInt(900) + 100;
            int height = random.nextInt(900) + 100;
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(url + width + "/" + height, String.class);

            return response.getBody();
        } catch (
                Exception e) {
            System.out.println(e);
        }

        return "fail";
    }

    public Random getRandom() {
        return random;
    }

    public void setRandom(Random random) {
        this.random = random;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}