import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, changeFilterInput }) => (
    <label className={css.label} >
        Find Contact By Name
        <input className={css.input}
        type="text"
        name={filter}
        onChange={changeFilterInput}
        placeholder="Find contacts by name"
        />
    </label>
);

Filter.propTypes = {
filter: PropTypes.string.isRequired,
changeFilterInput: PropTypes.func.isRequired,
};

export default Filter;