import React, { useEffect, useState } from 'react';
import s from './repos.module.scss';
import ReposItem from './ReposItem.jsx';
import { useSelector } from 'react-redux';

const Repos = () => {
  const repos = useSelector((state) => state.users.repos);
  const [sortedRepos, setSortedRepos] = useState([]);
  const [activeButton, setActiveButton] = useState(null);



  useEffect(() => {
    setSortedRepos(repos); 
  }, [repos]);

  const handleSortButtonClick = (buttonName) => { 
    setActiveButton(buttonName);
    sortRepos(buttonName);
  };

  const sortRepos = (criteria) => {
    const sorted = [...repos].sort((a, b) => {
      switch (criteria) {
        case 'name':
          return a.name.localeCompare(b.name); 
        case 'stars':
          return b.stargazers_count - a.stargazers_count; 
        case 'date':
          return new Date(b.created_at) - new Date(a.created_at); 
        default:
          return 0;
      }
    });
    setSortedRepos(sorted);
  };

  return (
    <div className="container">
      <div className={s.repos}>
        <h2 className={s.repos__title}>Сортировка</h2>
        <div className={s.repos__btn_box}>
          <div className={s.repos__btn}>
            <button 
              className={`${s.btn} ${activeButton === 'name' ? s.active : ''}`} 
              onClick={() => handleSortButtonClick('name')} 
            >
              ИМЯ
            </button>
            <button 
              className={`${s.btn} ${activeButton === 'stars' ? s.active : ''}`} 
              onClick={() => handleSortButtonClick('stars')} 
            >
              ЗВЕЗДЫ
            </button>
            <button 
              className={`${s.btn} ${activeButton === 'date' ? s.active : ''}`} 
              onClick={() => handleSortButtonClick('date')} 
            >
              ДАТА
            </button>
          </div>
        </div>
        <div className={s.repos__list}>
          {sortedRepos.map((repo) => (
            <ReposItem repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repos;