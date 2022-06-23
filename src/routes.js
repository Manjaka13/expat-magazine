import App from "@/views/App.vue";
import ArticleDisplay from "@/views/ArticleDisplay.vue";

/*
    Export our routes
*/

const routes = [
    {
        path: "/",
        name: "App",
        component: App,
    },
    {
        path: "/article/:id",
        name: "ArticleDisplay",
        component: ArticleDisplay,
    },
];

export default routes;
