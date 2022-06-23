import { generateRandomColor, generateIcon } from "@/helpers/utils";

/*
    How we set data into store
*/

// Setters
const mutations = {
    // When we set the news, also default filtered news to complete list
    setNews: (state, newsList) => {
        state.news = newsList;
        state.filteredNews = newsList;
    },
    // Add news type with its color and icon
    addType: (state, typeName) => {
        if (!state.types[typeName]) {
            // Always reassing to trigger component re-render
            state.types = {
                ...state.types,
                [typeName]: {
                    color: generateRandomColor(),
                    icon: generateIcon()
                }
            };
        }
    },
    // Set filtered news (filtered by external component)
    setFilteredNews: (state, filteredNews) => state.filteredNews = filteredNews
};

export default mutations;