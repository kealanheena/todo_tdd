# Todo TDD

This is a Todo API to help me practice TDD using Jest.

## User Stories

```
As a User,
So I can remember what I have to do,
I would like to Create a todo.

As a User,
So I can see the things I need todo I would like to get the todos,
I would like to be able to Read a todo.

As a User,
So I can check off my todos,
I would like the option to Update a todo.

As a User,
So I can take permently complete a todo,
I would like the option to delete a todo.
```

## Tech Used

- JavaScript 
- MongoDB
- Node.js
- Jest

## Features

You'll be able to:

- Create a Todo
- Get a Todo
- Update a Todo
- Delete a Todo

## Getting Started

### Local Setup

```sh
$ git clone 
```

```sh
$ cd todo_tdd
```

#### To Start



## Running the tests

to run tests:

```
$ npm test
```

## Tests 

## Unit Tests

- #deleteTodo
  - should have a deleteTodo function
  - should delete with TodoModel.findByIdAndUpdate
  - should return a 200 response code and deleted todomodel
  - should handle errors
  - should return status code 404 when item doesn't exist
- #updateTodo
  - should have a updateTodo function
  - should update with TodoModel.findByIdAndUpdate
  - should return a response with json data and http code 200
  - should handle errors
  - should return status code 404 when item doesn't exist
- #getTodoById
  - should have a getTodoById function
  - should call TodoModel.findById with route parameters
  - should return json body and response code 200
  - should handle errors
  - should return status code 404 when item doesn't exist
- #getTodos
  - should have a getTodos function
  - should call TodoModel.find({})
  - should return response code with status 200 and all todos
  - should handle errors
- #createTodo
  - should have a createTodo function
  - should call TodoModel.create
  - should return a 201 response code
  - should return json body in response
  - should handle errors


## Intergration Tests
