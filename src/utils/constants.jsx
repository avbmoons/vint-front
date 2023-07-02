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