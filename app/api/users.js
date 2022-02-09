import apiClient from "./client";

const register = (userInfo) => apiClient.post("/users", { name: userInfo.name, email: userInfo.email, password: userInfo.password });

export default {
    register
}