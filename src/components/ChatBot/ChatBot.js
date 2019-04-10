import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'

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

    _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }

    _sendMessage(text) {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
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
                showEmoji
            />
        </div>
        )
    }
}
export default ChatBot;