/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { loadCountryDetail, getCountry } from '../redux/home';
import style from './style.module.css';
import coronavirus from '../assets/coronavirus.jpg';

export default function Home() {
  const state = useSelector((state) => state.homeReducer.covid_data);
  const dispatch = useDispatch();

  const dark = () => {
    const con = document.querySelectorAll('.country');
    for (let j = 0; j < con.length; j += 4) {
      if (j % 2 === 0) {
        j + 1 < con.length && (con[j + 1].classList.add('dark'));
        j + 2 < con.length && (con[j + 2].classList.add('dark'));
      }
    }
  };
  useEffect(() => {
    if (state.length === 0) {
      loadCountryDetail().then((data) => {
        dispatch(getCountry(data));
      }).then(
        dark,
      );
    }
    dark();
  }, []);

  return (
    <div>
      <div className={style.intro}>
        <img src={coronavirus} className={style.introImg} alt="Corona" />
        <div className={style.introDetails}>
          <h2>Covid_19</h2>
          <p>Number of Cases</p>
          <p>in 2020-10-10</p>
        </div>
      </div>
      <p className={style.mid}>State By Country</p>
      <ul className="countries">
        {state.map((object) => (
          <li key={object.id} className="country">
            <NavLink to={`/details/${object.id}`}>
              <div className="countryName">
                <ArrowRightCircle className="arrow" />
                <div>
                  <h2>
                    {object.country}
                  </h2>
                  <p>
                    {object.data.map((obj) => (
                      <p key={obj.id}>{obj.today_confirmed}</p>
                    ))}
                    {' '}
                    Cases
                  </p>
                </div>
              </div>
              <img className="countryImg" src={object.imgUrl} alt="maps" />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
