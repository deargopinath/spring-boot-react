package com.vbank.services;

import com.vbank.model.RequestData;
import com.vbank.model.ResponseData;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import org.springframework.validation.Errors;


@Service
public class FormProcessor {
    String vendorID;
    public FormProcessor(String vendor) {
        vendorID = vendor;
    }
    public ResponseData processData(RequestData requestData, Errors errors) {
        ResponseData responseData = new ResponseData();
        HashMap<String, String> detail = new HashMap<>();
        if (errors.hasErrors()) {
            responseData.setSummary("error");
            detail.put("code", "400");
            detail.put("cause", "invalid input");
            detail.put("errors", errors.getAllErrors().toString());
            responseData.setDetail(detail);
            return responseData;
        }
        detail.put("nameReceived", requestData.getUsername());
        detail.put("emailReceived", requestData.getEmail());
        detail.put("processedBy", vendorID);
        responseData.setSummary("success");
        responseData.setDetail(detail);
        return responseData;
    }
}
