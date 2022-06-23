/*
    Export constants from here
*/

const baseUrl = "https://www.expat.com";
const requestHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://www.expat.com"
};
const defaultType = "All types";
const dateOrderList = ["Newest article", "Oldest article"];
const titleOrderList = ["A-Z title", "Z-A title"];
const socialList = [
    {
        title: "View my Facebook profile",
        link: "https://www.facebook.com/Manjaka13",
        icon: ["fab", "facebook"],
    },
    {
        title: "Check my repos",
        link: "https://github.com/Manjaka13",
        icon: ["fab", "github"],
    },
    {
        title: "Connect with LinkedIn",
        link: "https://www.linked.com/in/harijaona-rajaonson",
        icon: ["fab", "linkedin"],
    },
];

export {
    baseUrl,
    requestHeaders,
    defaultType,
    dateOrderList,
    titleOrderList,
    socialList
};
