const request = require("supertest");
const app = require("../../app");
const newTodo = require("../mock-data/new-todo.json");
const { response } = require("../../app");

const endpointUrl = "/todos/";
const testData = { title: "Make intergration test for put", done: true };
const nonExistingTodoId = "5ef12ccfa293162e1111ce88"

let firstTodo, newTodoId;

describe(endpointUrl, () => {

  describe('POST Intergration Tests', () => {
    it(`POST ${endpointUrl}`, async () => {
      const response = await request(app)
        .post(endpointUrl)
        .send(newTodo);
  
      expect(response.statusCode).toBe(201);
      expect(response.body.title).toBe(newTodo.title);
      expect(response.body.done).toBe(newTodo.done);
      newTodoId = response.body._id;
    });
  
    it(`should return error 500 on malformed data with post ${endpointUrl}`, async () => {
      const response = await request(app)
        .post(endpointUrl)
        .send({ title: "Missing done property" });
  
      expect(response.statusCode).toBe(500);
      expect(response.body).toStrictEqual({
        message: 
          "Todo validation failed: done: Path `done` is required."
      });
    });
  }); 

  describe('GET Intergration Tests', () => {
    it(`GET ${endpointUrl}`, async () => {
      const response = await request(app)
        .get(endpointUrl);
  
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body[0].title).toBeDefined();
      expect(response.body[0].done).toBeDefined();
      firstTodo = response.body[0];
    });
  });

  describe('GET by ID Intergration Tests', () => {
    it(`GET by ID ${endpointUrl}`, async () => {
      const response = await request(app)
        .get(endpointUrl + firstTodo._id);
  
      expect(response.statusCode).toBe(200);
      expect(response.body.title).toBe(firstTodo.title);
      expect(response.body.done).toBe(firstTodo.done);
    });

    it("todo doesn't exist", async () => {
      const response = await request(app).get(
        `${endpointUrl}${nonExistingTodoId}`
      );

      expect(response.statusCode).toBe(404);
    });
  });

  describe('PUT Intergration Tests', () => {
    it(`PUT ${endpointUrl}`, async () => {
      const res = await request(app)
        .put(endpointUrl + newTodoId)
        .send(testData);

      expect(res.statusCode).toBe(200);
      expect(res.body.title).toBe(testData.title);
      expect(res.body.done).toBe(testData.done);
    });

    it(`should return 404 on PUT ${endpointUrl}`, async () => {
      const res = await request(app)
        .put(endpointUrl + nonExistingTodoId)
        .send(testData);

      expect(res.statusCode).toBe(404);
    });
  });
  
  describe("DELETE Intergration Tests", () => {
    it(`DELETE ${endpointUrl}`, async () => {
      const res = await request(app)
        .delete(endpointUrl + newTodoId)
        .send(testData);

      expect(res.statusCode).toBe(200);
      expect(res.body.title).toBe(testData.title);
      expect(res.body.done).toBe(testData.done);
    });

    it(`should return 404 on PUT ${endpointUrl}`, async () => {
      const res = await request(app)
        .delete(endpointUrl + nonExistingTodoId)
        .send();

      expect(res.statusCode).toBe(404);
    });
  });
})