const TodoController = require("../../controllers/todo.controller");
const TodoModel      = require("../../model/todo.model");
const httpMocks      = require("node-mocks-http");
const newTodo        = require("../mock-data/new-todo.json");
const allTodos       = require("../mock-data/all-todos.json")

TodoModel.create = jest.fn();
TodoModel.find = jest.fn();
TodoModel.findById = jest.fn();
TodoModel.findByIdAndUpdate = jest.fn();

describe("TodoController", () => {

  let req, res, next;
  let todoId = "5ef12ccfa293162e4204ce88";
  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
  });

  describe("#updateTodo", () => {
    it("should have a updateTodo function", () => {
      expect(typeof TodoController.updateTodo).toBe("function");
    });

    it("should update with TodoModel.findByIdAndUpdate", async () => {
      req.params.id = todoId;
      req.body = newTodo;
      await TodoController.updateTodo(req, res, next);

      expect(TodoModel.findByIdAndUpdate).toHaveBeenCalledWith(todoId, newTodo, {
        new: true,
        useFindAndModify: false
      });
    });

    it("should return a response with json data and http code 200", async () => {
      req.params.id = todoId;
      req.body = newTodo;
      TodoModel.findByIdAndUpdate.mockReturnValue(newTodo);
      await TodoController.updateTodo(req, res, next);

      expect(res._isEndCalled()).toBeTruthy();
      expect(res.statusCode).toBe(200);
      expect(res._getJSONData()).toStrictEqual(newTodo);
    });
  });

  describe("#getTodoById", () => {
    it("should have a getTodoById function", () => {
      expect(typeof TodoController.getTodoById).toBe("function");
    });

    it("should call TodoModel.findById with route parameters", async () => {
      req.params.id = todoId;
      await TodoController.getTodoById(req, res, next);

      expect(TodoModel.findById).toBeCalledWith(todoId);
    });

    it("should return json body and response code 200", async () => {
      TodoModel.findById.mockReturnValue(newTodo);
      await TodoController.getTodoById(req, res, next);

      expect(res.statusCode).toBe(200);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getJSONData()).toStrictEqual(newTodo);
    });

    it("should handle errors", async () => {
      const errorMessage = { message: "Error finding todo" };
      const rejectedPromise = Promise.reject(errorMessage);
      TodoModel.findById.mockReturnValue(rejectedPromise);
      await TodoController.getTodoById(req, res, next);

      expect(next).toHaveBeenCalledWith(errorMessage);
    });

    it("should return status code 404 when item doesn't exist", async () => {
      TodoModel.findById.mockReturnValue(null);
      await TodoController.getTodoById(req, res, next);

      expect(res.statusCode).toBe(404);
      expect(res._isEndCalled()).toBeTruthy();
    });
  });

  describe("#getTodos", () => {
    it("should have a getTodos function", () => {
      expect(typeof TodoController.getTodos).toBe("function");
    });

    it("should call TodoModel.find({})", async () => {
      await TodoController.getTodos(req, res, next);

      expect(TodoModel.find).toHaveBeenCalledWith({});
    });

    it("should return response code with status 200 and all todos", async () => {
      TodoModel.find.mockReturnValue(allTodos);
      await TodoController.getTodos(req, res, next);

      expect(res.statusCode).toBe(200);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getJSONData()).toStrictEqual(allTodos);
    });

    it("should handle errors", async () => {
      const errorMessage = { message: "Error finding" };
      const rejectedPromise = Promise.reject(errorMessage);
      TodoModel.find.mockReturnValue(rejectedPromise);
      await TodoController.getTodos(req, res, next);

      expect(next).toHaveBeenCalledWith(errorMessage)
    });
  });

  describe("#createTodo", () => {

    beforeEach(() => {
      req.body = newTodo;
    });

    it("should have a createTodo function", () => {
      expect(typeof TodoController.createTodo).toBe("function");
    });

    it("should call TodoModel.create", () => {
      TodoController.createTodo(req, res, next);
      
      expect(TodoModel.create).toBeCalledWith(newTodo);
    });

    it("should return a 201 response code", async () => {
      await TodoController.createTodo(req, res, next);

      expect(res.statusCode).toBe(201);
      expect(res._isEndCalled()).toBeTruthy();
    });

    it("should return json body in response", async () => {
      TodoModel.create.mockReturnValue(newTodo);
      await TodoController.createTodo(req, res, next);

      expect(res._getJSONData()).toStrictEqual(newTodo);
    });

    it("should handle errors", async () => {
      const errorMessage = { message: "Done proprerty missing"}
      const rejectedPromise = Promise.reject(errorMessage);
      TodoModel.create.mockReturnValue(rejectedPromise);
      await TodoController.createTodo(req, res, next);

      expect(next).toBeCalledWith(errorMessage);
    });
  });

});