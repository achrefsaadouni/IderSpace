import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'

class ChatBot extends Component {

    constructor() {
        super();
        this.state = {
            messageList: []
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
                    teamName: 'IderBot',
                    imageUrl: 'https://symphony.com/images/web/icon/apps/chat-bot_1024.png'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
            />
        </div>)
    }
}
export default ChatBot;