import {v4 as uuidv4} from "uuid";

export const INIT_MESSAGE=[
    {
        id:uuidv4(),
        author: "BOT",
        text:"Hi, lets talk!",
        isOut: "false",
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
    CHAT: ":chatId",
    MESSAGES: "",
    NEWS: "/news",
    NO_CHAT: "/chats/no-chat",
    NOT_FOUND: "/not-found",
};

export const chats=[
    {
        id:uuidv4(),
        chatName:"Chat-1",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
    {
        id:uuidv4(),
        chatName:"Chat-2",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
    {
        id:uuidv4(),
        chatName:"Chat-3",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
    {
        id:uuidv4(),
        chatName:"Chat-4",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
];

export const initialChats=[
    {
        id:uuidv4(),
        chatName:"Chat 1",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
    {
        id:uuidv4(),
        chatName:"Chat 2",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
    {
        id:uuidv4(),
        chatName:"Chat 3",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
    {
        id:uuidv4(),
        chatName:"Chat 4",
        chatIcon:"../../assets/icons/chatIcon.png",
    },
];
