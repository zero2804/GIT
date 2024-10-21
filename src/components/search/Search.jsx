import React, { useState } from 'react';
import s from './search.module.scss';

const Search = ({ setUsername }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query) {
            setUsername(query); 
            setQuery(''); 
        }
    };

    const setWeather = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='container'>
            <div className={s.search}>
                <input
                    type="text"
                    placeholder="Введите имя пользователя"
                    value={query}
                    onChange={(event) => { setQuery(event.target.value); }}
                    onKeyUp={setWeather}
                    className={s.input}
                />
                <button className={s.btn} onClick={handleSearch}>НАЙТИ</button>
            </div>
        </div>
    );
};

export default Search;