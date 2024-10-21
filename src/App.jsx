import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from './components/header/Header.jsx';
import Search from './components/search/Search.jsx';
import User from './components/user/User.jsx';
import { fetchUserData, reposUser } from './store/feauters/user.js';
import Repos from './components/repos/Repos.jsx';

const App = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('a'); 

  const user = useSelector((state) => state.users.user);
  const repos = useSelector((state) => state.users.repos);

  useEffect(() => {
    if (username) {
      dispatch(fetchUserData(username));
      dispatch(reposUser(username));
    }
  }, [username, dispatch]); 

  return (
    <div>
      <Header />
      <div className="container">
        <Search setUsername={setUsername} /> {}
        {user && repos && (
          <>
            <User />
            <Repos />
          </>
        )}
      </div>
    </div>
  );
};

export default App;