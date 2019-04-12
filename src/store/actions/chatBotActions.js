import axios from "axios";

import {
    GET_UNANSWERED_QUESTIONS,
} from "./types";

export  const ask = async question  => {
    return new Promise (resolve =>{

        axios
            .post("http://localhost:2500/api/chat", question)
            .then(res =>
                {
                    return resolve(res);
                }
            )
            .catch(err =>
                {
                    return resolve(err);}
            );
    });




};