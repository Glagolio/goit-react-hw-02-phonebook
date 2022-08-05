import InputName from './Input/InputName/InputName';
import LabelPhoneBook from './Label/Label';
import ButtonSubmit from './Button/ButtonSubmit';
import Contacts from './Contacts/Contacts';
import InputNumber from './Input/InputName/inputNumber';
import FormPhonebook from './Form/Form';

const Phonebook = ({
  onChange,
  onSubmit,
  valueName,
  valueNumber,
  contactsList,
  notEmptyList,
}) => {
  return (
    <>
      <FormPhonebook onSubmit={onSubmit}>
        <LabelPhoneBook title="Name">
          <InputName value={valueName} onChange={onChange} />
        </LabelPhoneBook>
        <LabelPhoneBook title="Number">
          <InputNumber value={valueNumber} onChange={onChange} />
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
      </FormPhonebook>
      {notEmptyList > 0 ? (
        <Contacts name="Contacts" contactsList={contactsList} />
      ) : (
        <p>Phonebook empty</p>
      )}
    </>
  );
};

export default Phonebook;
