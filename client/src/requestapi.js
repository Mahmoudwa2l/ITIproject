import axios from "axios";

const BASE_URL = "http://localhost:8800/api";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGUzMzFlOWY2YjkyNTA0NTY5NGIwZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTQ5OTkyMCwiZXhwIjoxNjk1NzU5MTIwfQ.FBqZP6hrqJhSYEHsgPMwa8qqu4ORo5eNfElFJVd7B_o";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${token}`}
});