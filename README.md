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

## Intergration Tests
