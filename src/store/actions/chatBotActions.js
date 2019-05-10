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
            .post("https://iderspace.herokuapp.com/api/chat", question)
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

export  const addIntent = async (intent)  => {
    return new Promise (resolve =>{

        axios
            .post("https://iderspace.herokuapp.com/api/chat/intent", intent)
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





export  const deleteQuestion = async question  => {
    return new Promise (resolve =>{

        axios
            .delete("https://iderspace.herokuapp.com/api/chat", {data:{question:question}})
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
            `https://iderspace.herokuapp.com/api/chat`
        )
        .then(res => {
            dispatch({
                type: GET_CHATBOTQUESTION,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: GET_CHATBOTQUESTION,
                payload: {}
            })
        );
};