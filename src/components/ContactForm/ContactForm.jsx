import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {        
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;
    return (
        <form onSubmit={this.handleSubmit} className={css.form}>           
            <label className={css.label} htmlFor="">
                Name
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. 
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />                
            </label>            
            <label className={css.label} htmlFor="">
                Number
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    placeholder="Number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />                
            </label>
        <button type="submit" className={css.btn}>Add contact</button>
        </form>
    );
    }
}

ContactForm.prototypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;