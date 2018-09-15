import axios from "axios";

export default {
    searchArticles: function (topic, begin, end) {
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=37cab2b154c74cecbeb7457431037df1?q=${topic}?begin_date=${begin}?end_date=${end}`);
    }
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