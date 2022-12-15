package ch.bbw.mashupbackend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FactService {

    private String url = "https://useless-facts.sameerkumar.website/api";

    public String getFact() {
        try {
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

            return response.getBody().toString();
        } catch (
                Exception e) {
            System.out.println(e);
        }

        return "fail";
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}