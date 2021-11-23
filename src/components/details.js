import React from 'react';
import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import style from './style.module.css';

export default function Details() {
  const state = useSelector((state) => state.homeReducer.covid_data);
  // const location = useLocation();
  // const id = location.pathname.slice(9);
  console.log(state);
  // state.map((object) => console.log(object.cases));
  return (
    <>
      <div className={style.intro}>
        <img className={style.introImg} src={state.imgUrl} alt={state.id} />
        <div className={style.introDetails}>
          <h2>{state.name}</h2>
          <p>
            {state.cases}
            {' '}
            Cases
          </p>
          <p>in 2020-03-10</p>
        </div>
      </div>
      <p className={style.mid}>Country Situation</p>
      <ul className="situations">
        {state.map((object) => (
          // object.id === id && (
          <li key={object.id}>
            <p>{object.data.regions}</p>
            <div className={style.regCases}>
              <p>
                {object.today_comfirmed}
                {' '}
                Cases
              </p>
              <ArrowRightCircle />
            </div>
          </li>
        ))}
      </ul>

    </>
  );
}
