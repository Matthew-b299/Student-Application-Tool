import React, { Component } from 'react';

class Message extends Component{
constructor(props) {
  super(props);

this.state = {
    text: {
      recipient: '',
      textmessage: ''
    }
    
  }


}
  sendText = () => {
    const { text } = this.state;

    fetch(`http://127.0.0.1:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.error(err))
  }
    render() {
        const { text } = this.state;
     
        const textArea = {
          borderRadius: 4
        }
        return (
          <div className="App">
            <div style={{ marginTop: 10 }} >
              <h2> Send Text Message </h2>
              <label> Your Phone Number </label>
              <br />
              <input value={text.recipient}
                onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
              <div />
              <label> Message </label>
              <br />
              <textarea rows={3} value={text.textmessage} style={textArea}
                onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
              <div/>
              <button onClick={this.sendText}> Send Text </button>
            </div>
          </div>
        );
      }
    }

export default Message;
