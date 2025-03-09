package com.pcompass.gfspa.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoResource {

  @Autowired
  private TodoHardcodedService todoService;

  @GetMapping("/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) {
    return todoService.findAll();
  }

  @GetMapping("/users/{username}/todos/{id}")
  public ResponseEntity<Todo> getTodo(@PathVariable String username, @PathVariable long id) {
    Optional<Todo> todo = todoService.findById(id);
    if (todo.isPresent()) {
      return ResponseEntity.ok(todo.get());
    } else {
      return ResponseEntity.notFound().build(); // Return 404 if not found
    }
  }

  @DeleteMapping("/users/{username}/todos/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
    Todo todo = todoService.deleteById(id);
    if (todo !=null) {
      return ResponseEntity.noContent().build();
    }

    return ResponseEntity.notFound().build();
  }
}
