import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import style from './style.module.css';

export default function Details() {
  const state = useSelector((state) => state.homeReducer);
  const location = useLocation();
  const id = location.pathname.slice(9);

  const filterRegion = (id) => {
    const country = state.covid_data.filter((countryDetail) => countryDetail.id
      === id);
    return [country[0]];
  };

  const filteredState = filterRegion(id);
  return (
    <>
      <div className={style.intro} key={id}>
        <img className={style.introImg} src={filteredState[0].imgUrl} alt={filteredState[0].id} />
        <div className={style.introDetails}>
          <h2>{filteredState[0].country}</h2>

          {filteredState[0].data[0].today_confirmed}
          {' '}
          Cases

          <p>in 2020-10-10</p>
        </div>
      </div>
      <p className={style.mid}>Country Situation</p>
      <ul className="situations">
        {filteredState[0].data[0].regions.map((region, index) => (
          <li key={region.id} className={index % 2 === 0 ? 'region light' : 'region dark'}>
            <p key={region.id}>{region.name}</p>

            <div className={style.regCases}>

              {region.today_confirmed}
              {' '}
              Cases

              <ArrowRightCircle />
            </div>
          </li>
        ))}
      </ul>

    </>
  );
}
