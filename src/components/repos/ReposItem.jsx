import React from 'react'
import s from './repos.module.scss'

const ReposItem = ({ repo }) => {
    const formatDate = (dateString) => {
      return dateString.substring(0, 10)
    }
  return (
    <div className={s.repos__item}>
        <p className={s.item__title}>{repo.name}</p>
        <p className={s.item__quantity}>{repo.stargazers_count}</p>
        <p className={s.item__date}>{formatDate(repo.created_at)}</p>
        {/* .{s.repos__item_ri} */}
        <a href={repo.html_url}><button className={s.item__btn}>ПОСЕТИТЬ</button></a>
    </div>
  )
}
 
export default ReposItem
