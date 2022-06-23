import { defaultType } from "@/helpers/const";

/*
    Various usefull functions
*/

// Generates random number
const random = (max) => Math.floor(Math.random() * max) + 1;

// Generates random dark color
const generateRandomColor = () => `rgb(${random(180)}, ${random(180)}, ${random(180)})`;

// Generates icon for the news type
const generateIcon = () => {
    const list = ["leaf", "star", "gears", "newspaper", "microphone", "laptop", "mouse"];
    return list[random(6)];
};

// Removes HTML tags in a string
const removeTags = (str) => str.replace(/(<([^>]+)>)/ig, "");

// Converts [YYYY-MM-DD HH:mm:ss] to timestamp
const toTimestamp = (date) => Math.floor(new Date(date.replace(" ", "T")).getTime() / 1000);

// Sort news by newest or oldest date
const sortNewsDate = (news, direction) => direction === "Newest article" ? news.sort((a, b) => a.timestamp - b.timestamp) : news.sort((a, b) => b.timestamp - a.timestamp);

// Sort news by keywords
const sortNewsKeyword = (news, keyword) => news.filter(value => value.title.match(new RegExp(keyword, "gi")) || value.introduction.match(new RegExp(keyword, "gi")) || value.body.match(new RegExp(keyword, "gi")));

// Sort news by type
const sortNewsType = (news, type) => type === defaultType ? news : news.filter(value => value.type.toLowerCase() === type.toLowerCase());

// Sort alphabetically (ascending or descending)
const sortNewsTitle = (news, direction) => direction === "A-Z title" ? news.sort((a, b) => removeTags(a.title).localeCompare(removeTags(b.title))) : news.sort((a, b) => (-1) * removeTags(a.title).localeCompare(removeTags(b.title)));

// Extracts date from article datetime
const extractDate = (date) => date.split(" ")[0].split("-").reverse().join("-");

// Extract body content of article
const extractBody = (body) => new RegExp(/<body[^>]*>([\w|\W]*)<\/body>/im).exec(body)[0].replace(/<body[^>]*>/im, "").replace(/<\/body>/im, "");

// Extract description content from article introduction
const extractDescription = (intro) => intro.replace(/<p[^>]*>/im, "").replace(/<\/p>/im, "");

export {
    random,
    removeTags,
    toTimestamp,
    generateRandomColor,
    generateIcon,
    sortNewsDate,
    sortNewsKeyword,
    sortNewsType,
    sortNewsTitle,
    extractDate,
    extractBody,
    extractDescription
};
