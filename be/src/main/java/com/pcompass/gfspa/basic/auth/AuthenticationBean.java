package com.pcompass.gfspa.basic.auth;

public class AuthenticationBean {
  private String message;

  public AuthenticationBean(String message) {
    this.message = message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public String getMessage() {
    return message;
  }
}
