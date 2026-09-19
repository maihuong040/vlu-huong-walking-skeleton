const { login } = require("./auth");

test("Login successfully with valid admin account", () => {
    expect(login("admin", "123")).toBe(true);
});
