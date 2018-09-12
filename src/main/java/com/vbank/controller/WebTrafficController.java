package com.vbank.controller;

import com.vbank.model.ResponseData;
import com.vbank.model.RequestData;
import com.vbank.services.FormProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;

@RestController
public class WebTrafficController {
    @Autowired
    FormProcessor formProcessor;

    @PostMapping("/myForm")
    public ResponseEntity<?> myForm(@Valid @RequestBody RequestData requestData, 
            Errors errors) {
        ResponseData responseData = formProcessor.processData(requestData, errors);
        return ResponseEntity.ok(responseData);
    }
}