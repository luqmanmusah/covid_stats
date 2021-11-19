import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadCountryDetail, filterRegion } from '../redux/home';
import Countries from '../redux/countries';

export default function Home() {
  const state = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.length === 0) {
      dispatch(loadCountryDetail(Countries[1]));
    }
  }, []);
  const selectCountry = (id) => {
    dispatch(filterRegion(id));
  };
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
        {Countries.map((country) => (
          <li key={country.id}>
            <NavLink to="/details" onClick={() => selectCountry(country.id)}>
              <div>
                <div>
                  <h2>
                    {country.name}
                  </h2>
                  <p>
                    {country.case}
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
