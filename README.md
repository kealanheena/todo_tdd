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
$ git clone https://github.com/kealanheena/todo_tdd
```

```sh
$ cd todo_tdd
```

#### To Start

Run

```
node server
```

you can then use Postman to make api calls:

```
GET
GET: http://localhost:3000/todos/

GET BY ID
GET: http://localhost:3000/todos/:id

POST
POST: http://localhost:3000/todos/:id

PUT
PUT: http://localhost:3000/todos/:id

DELETE
DELETE: http://localhost:3000/todos/:id
```

## Running the tests

to run tests:

```
$ npm test
```

## Tests 

### Unit Tests

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


### Intergration Tests

- GET Intergration Tests
  - GET /todos/
- GET by ID Intergration Tests
  - GET by ID /todos/
  - todo doesn't exist
- POST Intergration Tests
  - POST /todos/
  - should return error 500 on malformed data with post /todos/
- PUT Intergration Tests
  - PUT /todos/
  - should return 404 on PUT /todos/
- DELETE Intergration Tests
  - DELETE /todos/
  - should return 404 on PUT /todos/
