import React, { useState } from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
  const [searchName, setSearchName] = useState('');//спросили
  const [serachResult, setSerachResult] = useState('');//получили результат
  const [searchNameByType, setSearchNameByType] = useState('');//спросили
  const [serachResultByType, setSerachResultByType] = useState('');//получили результат


  // const searchFilm = () => {
  //   API.searchFilmsByTitle(searchName)
  //     .then(res=>{
  //       console.log(res);
  //       if(res.data.Response==='True'){//т.к. у нас не булевое значение а стринга
  //         setSerachResult(JSON.stringify(res.data.Search));//JSON.stringify-JSON-в строку
  //       }else{
  //         setSerachResult(res.data.Error)
  //       }
  //     })
  //     .catch(err=>
  //       console.log(err))
  // };

  //async await-новая тема

  //async function f() {}//так подключается async к обычной функции
  // const searchFilm = async () => {
  //   const responce = await API.searchFilmsByTitle(searchName);
  //   //код останавливается и ждет пока не получит с сервака респонс->т.е не создает
  //   //никакой микротаски-ждет->получает->идет дальше. Но если что-то пойдет не так-приложение рухнет
  //   //поэтому обворачивают в tryCatch
  //       console.log(responce);
  // };

  //теперь мы если получим ошибку, то в catch сможем ее словить и обработать
  const searchFilm = async () => {
    try {
      // const responce = await API.searchFilmsByTitle(searchName);
      // console.log(responce);

      // при помощи деструктуризации можно получать сразу data
      const {data} = await API.searchFilmsByTitle(searchName);
      if(data.Response==='True'){//т.к. у нас не булевое значение а стринга
        setSerachResult(JSON.stringify(data.Search));//JSON.stringify-JSON-в строку
      } else {
        setSerachResult(data.Error);
              }
    } catch (e) {
      console.log(e);
    }

  };

  //здесь разгребает откуда кнопка: У первого ряда одна кнопка- у нее нет dataSet
  //у второго ряда dataSet есть
  const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
    API.searchFilmsByType(searchNameByType, type);
  };

  return (
    <div>
      <h1>Promises</h1>
      <div>
        <h3><p>Search by name:</p></h3>
        <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
        <button onClick={searchFilm}>Search</button>
        <div>
          {serachResult}
        </div>
      </div>

      <div>
        <h3><p>Search by type:</p></h3>
        <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
        <button onClick={searchByType} data-t='movie'>Movie</button>
        <button onClick={searchByType} data-t='series'>Series</button>
        <div>
          {serachResultByType}
        </div>
      </div>
    </div>
  );
};
export default Lesson3;