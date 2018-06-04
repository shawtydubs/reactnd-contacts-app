import React, { Component } from 'react'
import ListContacts from './ListContacts'
import _ from 'lodash';

class App extends Component {
  state = {
    contacts: [
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "karen_isgrigg",
        avatarURL: "http://localhost:5001/karen.jpg"
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg"
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg"
      }
    ]
  };

  removeContact = (contact) => {
    this.setState(currentState => ({
      contacts: _.reject(currentState.contacts, stateContact => (stateContact.id === contact.id))
    }))
  };

  render() {
    return (
      <ListContacts
        contacts={this.state.contacts}
        onContactDelete={this.removeContact}
      />
    );
  }
}

export default App;
