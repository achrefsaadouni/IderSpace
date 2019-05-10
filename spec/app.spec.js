/*const ActivityController = require("../backend/controllers/Activities");
const Add = require("../backend/app");
const Request = require("request");

describe("Server", () => {
    var server;

    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3002/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("All activities!");
        });
    });
    describe("GET /test", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3002/test", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(500);
        });
        it("Body", () => {
            expect(data.body.message).toBe("This is an error response");
        });
    });
});
*/