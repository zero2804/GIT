import React from 'react'
import s from './user.module.scss'

import { useSelector } from 'react-redux'


const User = () => {
    const user = useSelector((state) => state.users.user);
    const formatDate = (dateString) => {
      // const dateObject = new Date(dateString);
      // return dateObject.toLocaleDateString('en-EN', {
      //     year: 'numeric',
      //     month: 'numeric',
      //     day: 'numeric'
      // });
      return dateString.substring(0, 10)
  };
  return (
    <div className={s.user}>
      <div className={s.user__card}>
        <div className={s.user__left}>
            <img src={user.avatar_url} alt="" className={s.user__img} />
            <a href={user.html_url} className={s.user__link}><button className={s.user__btn}>ПОСЕТИТЬ</button></a>
        </div>
        <div className={s.user__right}>
            <p className={s.user__desc}>{user.login}</p>
            <p className={s.user__desc}>Репозиториев: <span className={s.user__span}>{user.public_repos}</span></p>
            <p className={s.user__desc}>Создан: <span className={s.user__span}>{formatDate(user.created_at)}</span></p>
            <p className={s.user__desc}>Подписщиков: <span className={s.user__span}>{user.followers}</span></p>
            <p className={s.user__desc}>Подписок: <span className={s.user__span}>{user.following}</span></p>   
        </div>
      </div>
    </div>
  )
}

export default User