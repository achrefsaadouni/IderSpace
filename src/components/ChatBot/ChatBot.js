import {ask} from '../../store/actions/chatBotActions';
import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
import './chatBot.css';
class ChatBot extends Component {

    constructor() {

        super();

        this.state = {
                messageList: [ {type: 'text', author: "them", data: { text: "Welcome To IderSpace Platform"} },
                    {type: 'text', author: "them", data: { text: "I'am IderSpace chat bot my only job is to assist you while you are here"} },
                    {type: 'text', author: "them", data: { text: "Just ask me what you need"}}
                ],
        };

    }


    _sendMessage(text) {
        this.setState({
            messageList: [...this.state.messageList, {
                author: 'them',
                type: 'text',
                data: { text },

            }]
        })
    }


    async  _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message],

        });
        var Question = {
            "question" : message.data.text
        };
        await ask(Question).then(e => {
            this._sendMessage(e.data)
        })

    }


    render() {

        return (<div>
            <Launcher
                agentProfile={{
                    teamName: 'IderSpace ChatBot',
                    imageUrl: process.env.PUBLIC_URL + '/img/chatBot.png',
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji = {false}
            />
        </div>
        )
    }
}
export default ChatBot;