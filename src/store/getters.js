/*
    Here is how we access data in store
*/

const getters = {
    news: state => state.news,
    types: state => state.types,
    filteredNews: state => state.filteredNews
};

export default getters;