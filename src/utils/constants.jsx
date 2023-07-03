import {v4 as uuidv4} from "uuid";
//import chatIcon from "../assets/icons/icon-chat.png";
//import "../"
//import chatIcon from "../assets/icons/chatIcon.png";

export const INIT_MESSAGE=[
    {
        id:uuidv4(),
        author: "BOT",
        text:"Hi, lets talk!",
        isOut: "false",
    },
];

export const INIT_CHAT=[
    {
        id:uuidv4(),
        chatName:"First chat",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
    {
        id:uuidv4(),
        chatName:"Second chat",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
    {
        id:uuidv4(),
        chatName:"Third chat",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
];

export const BOT_MESSAGE=
{
    id:uuidv4(),
    author:"BOT",
    text:"Thanks! So, lets keep...",
    isOut: "false",
};

export const AUTHORS=[
    {id:1, authorName:"HUMAN"},
    {id:2, authorName:"BOT"},
];

export const ROUTES={
    HOME: "/",
    PROFILE: "/profile",
    CHATS: "/chats",
    CHAT: "/chats/:chatId?",
    MESSAGES: "",
    NEWS: "/news",
    NO_CHAT: "/chats/no-chat",
    NOT_FOUND: "/not-found",
};