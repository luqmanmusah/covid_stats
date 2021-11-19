import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadCountryDetail, getCountry } from '../redux/home';
// import Countries from '../redux/countries';
import Details from './details';

export default function Home() {
  const state = useSelector((state) => state.homeReducer.covid_data);
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    if (state.length === 0) {
      loadCountryDetail().then((data) => {
        console.log(data);
        dispatch(getCountry(data));
      });
    }
  }, []);

  return (
    <div>
      <div>
        <div>
          <h2>Covid_19</h2>
          <p>Number of Cases</p>
          <p>in 2020-03-10</p>
        </div>
      </div>
      <p>State By Country</p>
      <ul>
        {state.map((object) => (
          <li key={object.id}>
            <NavLink to={`/details/${object.id}`} onClick={() => <Details id={object.id} />}>
              <div>
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
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
