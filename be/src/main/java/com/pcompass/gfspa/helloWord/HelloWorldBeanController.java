package com.pcompass.gfspa.helloWord;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldBeanController {

  @GetMapping(path="/hello-world-bean")
  public HelloWorldBean helloWorldBean() {
    //throw new RuntimeException("Some Error has Happened! Contact support at ***-***");
    return new HelloWorldBean("Hello World - Changed");
  }

  @GetMapping(path="/hello-world/path-variable/{name}")
  public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
    return new HelloWorldBean(String.format("Hello World, %s", name));
  }
}
