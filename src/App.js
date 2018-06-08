import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import _ from 'lodash'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: [],
    screen: 'list'
  };

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({contacts})
    })
  }

  removeContact = (contact) => {
    this.setState(currentState => ({
      contacts: _.reject(currentState.contacts, stateContact => (stateContact.id === contact.id))
    }));

    ContactsAPI.remove(contact)
  };

  render() {
    return (
      <div>
        {this.state.screen === 'list' && <ListContacts
          contacts={this.state.contacts}
          onContactDelete={this.removeContact}
          onNavigate={() => {this.setState({screen: 'create'})}}
        />}
        {this.state.screen === 'create' && <CreateContact />}
      </div>
    );
  }
}

export default App;
