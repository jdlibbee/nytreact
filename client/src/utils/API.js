import axios from "axios";

export default {
    getArticles: function () {
        return axios.get("/api/saved");
    },
    getArticle: function (id) {
        return axios.get(`/api/saved/${id}`);
    },
    deletArticle: function (id) {
        return axios.delete(`/api/saved/${id}`);
    },
    saveArtice: function (articleData) {
        return axios.post("/api/saved", articleData);
    }
};