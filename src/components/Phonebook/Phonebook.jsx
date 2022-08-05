import { Component } from 'react';
import Main from './Phonebook.styled';
import InputName from './Input/InputName/InputName';
import LabelPhoneBook from './Label/Label';
import ButtonSubmit from './ButtonSubmit/ButtonSubmit';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    console.log('sss');
  };

  render() {
    return (
      <Main>
        <form onSubmit={this.handleChange}>
          <LabelPhoneBook title="Name">
            <InputName />
          </LabelPhoneBook>
          <ButtonSubmit text="Add contact" />

          {/* <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="000-00-00"
            />
          </Label> */}
        </form>
      </Main>
    );
  }
}

export default Phonebook;
