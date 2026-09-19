function login(username, password) {
    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Username hoặc password rỗng
    if (!username || !password) {
        return false;
    }

    // Password chứa ký tự đặc biệt
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        return false;
    }

    // Kiểm tra tài khoản và mật khẩu
    return username === "admin" && password === "123567";
}

module.exports = { login };
