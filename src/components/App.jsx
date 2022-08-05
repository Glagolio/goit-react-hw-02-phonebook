import Phonebook from './Phonebook/Phonebook';
import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import Main from './Main/Main';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  clickOnBtnSubmit = e => {
    e.preventDefault();

    const id = nanoid();
    this.state.contacts.push({
      name: this.state.name,
      number: this.state.number,
      id: id,
    });
    console.dir(this.state.contacts);

    this.reset();
  };

  render() {
    return (
      <Main title="Phonebook">
        <Phonebook
          onChange={this.handleChange}
          onSubmit={this.clickOnBtnSubmit}
          value={this.state.name}
          contactsList={this.state.contacts}
          notEmptyList={this.state.contacts.length}
          valueName={this.state.name}
          valueNumber={this.state.number}
        />
      </Main>
    );
  }
}

export default App;
