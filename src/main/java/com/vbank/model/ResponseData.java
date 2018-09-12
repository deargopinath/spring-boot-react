package com.vbank.model;

import java.util.HashMap;

public class ResponseData {
    String summary;
    HashMap<String, String> detail;
    public String getSummary() {
        return summary;
    }
    public HashMap<String, String> getDetail() {
        return detail;
    }
    public void setSummary(String summary) {
        this.summary = summary;
    }
    public void setDetail(HashMap<String, String> detail) {
        this.detail = detail;
    }
}