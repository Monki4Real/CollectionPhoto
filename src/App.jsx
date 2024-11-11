import React, { useState } from 'react'

import { Collection } from './Collection'

const category = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
]


function App() {
  const [collections, setCollections] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [categoryActive, setCategoryActive] = React.useState(0);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    setisLoading(true);

    const changeCategory = categoryActive ? `category=${categoryActive}` : ''


    fetch(`https://6731efae7aaf2a9aff12caea.mockapi.io/photoCollection/collections?page=${page}&limit=3&${changeCategory}`)
      .then(res => res.json())
      .then(json => {
        setCollections(json);
      })
      .catch(err => {
        console.warn(err);
        alert('Ошибка при получении данных');
      }).finally(() => setisLoading(false))
  }, [categoryActive, page]);

  return (
    <>
      <div className='App'>
        <h1>Коллекция фотографий</h1>
        <div className='top'>
          <ul className='tags'>
            {
              category.map((obj, i) => <li onClick={() => setCategoryActive(i)} className={categoryActive === i ? 'active' : ''} key={obj.name}>{obj.name}</li>)
            }
          </ul>
        </div>
        {isLoading ? (
          <h2>Идёт загрузка...</h2>
        ) : (
          <div className="collections-container">
            {collections.map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))}
          </div>
        )}
        <ul className='pagination'>
          {
            [...Array(3)].map((_, i) => <li onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>{i + 1}</li>)
          }
        </ul>
      </div>
    </>
  )
}

export default App
