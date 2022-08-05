import Phonebook from './Phonebook/Phonebook';
import { Component } from 'react';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import { nanoid } from 'nanoid/non-secure';

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
    // this.setState(prevState => {
    //   contacts: prevState.contacts.push({ name: prevState.name });
    // });
    const id = nanoid();
    this.state.contacts.push({ name: this.state.name, id: id });
    console.dir(this.state.contacts);

    this.reset();
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Phonebook
          onChange={this.handleChange}
          onSubmit={this.clickOnBtnSubmit}
          value={this.state.name}
          contactsList={this.state.contacts}
          notEmptyList={this.state.contacts.length}
          valueName={this.state.name}
        />
      </div>
    );
  }
}

export default App;
