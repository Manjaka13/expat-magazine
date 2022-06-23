import { toTimestamp } from "@/helpers/utils";
import http from "@/service/http.js";

/*
    Export available actions on store
*/

// Actions to be dispatched
const actions = {
    // Fetches news from API
    getNews({ commit }) {
        http
            .get("news")
            .then((news) => {
                news = news.map((item) => {
                    // Save news item timestamp for later date sort
                    item.timestamp = toTimestamp(item.date);
                    // Add current news type to store
                    commit("addType", item.type);
                    return item;
                });
                // Save complete news list
                commit("setNews", news);
            })
            .catch((err) => console.error(err));
    },
    // Updates filtered news list according to upper component rules
    updateFilteredNews({ commit }, list) {
        commit("setFilteredNews", list);
    }
};

export default actions;