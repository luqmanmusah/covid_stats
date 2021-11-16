import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadCountryThunk } from '../redux/home';
import Header from './header';

export default function home() {
  const state = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.length === 0) {
      dispatch(loadCountryThunk());
    }
  }, []);
  return (
    <div>
      <Header />
      <div>
        <div>
          <h2>Covid_19</h2>
          <p>Number of Cases</p>
          <p>in 2020-03-10</p>
        </div>
      </div>
      <p>State By Country</p>
      <ul>
        {state.map((country) => (
          <li>
            <NavLink>
              <div>
                <div>
                  <h2>{country.name}</h2>
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
