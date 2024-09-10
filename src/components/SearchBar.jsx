import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css'; 

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
    
    const handleInputChange = e => {
        setQuery(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter search term!');
            return;
        }
        onSubmit(query);
        setQuery('');
    };
    
    return (
        <header className={styles.header}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputWrapper}>
                    <input
                        type='text'
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search images and photos"
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>
                        <FaSearch /> 
                    </button>
                </div>
            </form>
        </header>
    );
};

SearchBar.propTypes = { 
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
