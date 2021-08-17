import axios from "axios";

export const api = axios.create({
  baseURL: 'http://api.github.com/users/'
})

export const reposUrl = (user_name) => `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${user_name}`
