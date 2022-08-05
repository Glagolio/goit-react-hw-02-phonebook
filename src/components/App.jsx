import Phonebook from './Phonebook/Phonebook';
import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import Main from './Main/Main';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  formSubmitHandle = data => {
    const id = nanoid();
    this.state.contacts.push({
      name: data.name,
      number: data.number,
      id: id,
    });
  };

  render() {
    const normolizeFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );
    return (
      <Main title="Phonebook">
        <Phonebook
          onChange={this.handleChange}
          onSubmit={this.formSubmitHandle}
          contactsList={visibleContacts}
          notEmptyList={this.state.contacts.length}
          valueFilter={this.state.filter}
        />
      </Main>
    );
  }
}

export default App;
