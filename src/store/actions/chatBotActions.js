import axios from "axios";
import {
    GET_ACTIVITIES,
    GET_CHATBOTQUESTION,
    LOADING
} from "./types";
import {setForumLoading} from "./forumActions";

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

export const getQuestions = () => dispatch => {
    dispatch(setForumLoading());
    axios
        .get(
            `http://localhost:2500/api/chat`
        )
        .then(res => {
            dispatch({
                type: GET_CHATBOTQUESTION,
                payload: res.data
            })

            console.log(res)
        })
        .catch(err =>
            dispatch({
                type: GET_CHATBOTQUESTION,
                payload: {}
            })
        );
};