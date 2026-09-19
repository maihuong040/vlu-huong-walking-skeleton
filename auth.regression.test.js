const { login } = require("./auth");

describe("Login Regression Tests", () => {

    test("Password is incorrect", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Username is empty", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Password is empty", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Both username and password are empty", () => {
        expect(login("", "")).toBe(false);
    });

    test("Password contains special characters", () => {
        expect(login("admin", "123@#")).toBe(false);
    });

    test("Locked account cannot login", () => {
        expect(login("locked", "123")).toBe(false);
    });

    test("Username does not exist", () => {
        expect(login("user123", "123")).toBe(false);
    });

    test("Password contains spaces", () => {
        expect(login("admin", "12 3")).toBe(false);
    });

});
