package com.pcompass.gfspa.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "**")
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

  @PutMapping("/users/{username}/todos/{id}")
  public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
                                         @RequestBody Todo todo) {
    Todo todoUpdated = todoService.save(todo);

    return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
  }

  @PostMapping("/users/{username}/todos")
  public ResponseEntity<Void> createTodo(@PathVariable String username,
                                         @RequestBody Todo todo) {
    Todo createdTodo = todoService.save(todo);

    // Location
    // Get current url resource
    // Append id
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}")
      .buildAndExpand(createdTodo.getId()).toUri();

    return ResponseEntity.created(uri).build();
  }
}
