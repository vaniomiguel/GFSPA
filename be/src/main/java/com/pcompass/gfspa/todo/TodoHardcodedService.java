package com.pcompass.gfspa.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TodoHardcodedService {

  private static List<Todo> todos = new ArrayList<>();
  private static int idCounter = 0;


  static {
    todos.add(new Todo(++idCounter, "in28minutes",
      "Learn to Dance", new Date(), false));
    todos.add(new Todo(++idCounter, "in28minutes",
      "Learn about MicroServices", new Date(), false));
    todos.add(new Todo(++idCounter, "in28minutes",
      "Learn about Angular", new Date(), false));
  }

  public static List<Todo> findAll() {
    return todos;
  }

  public Todo deleteById(long id) {
    Optional<Todo> todo = findById(id);
    if (todo.isEmpty()) {
      return null;
    }

    if (todos.remove(todo.get())) {
      return todo.get();

    }
    return null;
  }

  private Optional<Todo> findById(long id) {
    return todos.stream().filter(todo -> todo.getId() == id).findFirst();
  }
}
