import Phonebook from './Phonebook/Phonebook';
import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import Main from './Main/Main';
import Contacts from './Phonebook/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],

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
    if (
      this.state.contacts.filter(contact => contact.name === data.name).length >
      0
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: data.name,
          number: data.number,
          id: id,
        },
      ],
    });
  };

  onClickDelete = e => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== e.currentTarget.id
      ),
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
        {this.state.contacts.length > 0 ? (
          <Contacts
            name="Contacts"
            contactsList={visibleContacts}
            onChange={this.handleChange}
            value={this.state.filter}
            onClickDelete={this.onClickDelete}
          />
        ) : (
          <p>Phonebook empty</p>
        )}
      </Main>
    );
  }
}

export default App;
