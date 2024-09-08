import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery ] = useState ('');
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
        <header>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                value={query}
                onChange={handleInputChange}
                placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );

};

SearchBar.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;