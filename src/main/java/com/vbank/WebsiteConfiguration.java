package com.vbank;

/**
 *
 * @author gopinath
 */
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.vbank.services.FormProcessor;

@Configuration
public class WebsiteConfiguration {
    @Bean
    public FormProcessor formProcessor(@Value("${vendor}") String vendor) {
        FormProcessor fp = new FormProcessor(vendor);
	return fp;
    }
}