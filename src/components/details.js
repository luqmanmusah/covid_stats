import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function Details() {
  const state = useSelector((state) => state.homeReducer.covid_data);
  const location = useLocation();
  const id = location.pathname.slice(9);

  // state.map((object) => console.log(object.cases));
  return (
    <div>
      <div>
        <div>
          <h2>{state.name}</h2>
          <p>
            {state.cases}
            {' '}
            Cases
          </p>
          <p>in 2020-03-10</p>
        </div>
      </div>
      <p>Stated By Regions</p>
      <ul>
        {state.map((object) => (
          object.id === id && (
          <li key={object.id}>
            <p>{object.country}</p>
            <div>
              <div>
                {object.data.map((obj) => (
                  <>
                    <p key={obj.id}>
                      Total Number of Confirmed Cases:
                      {obj.today_confirmed}

                    </p>
                    <p>
                      Total Number of New Cases:
                      {obj.today_new_confirmed}

                    </p>
                    <p>
                      New Cases Today:
                      {obj.today_open_cases}

                    </p>
                    <p>
                      Total Deaths:
                      {obj.today_deaths}

                    </p>
                    <p>
                      New Death Today:
                      {obj.today_new_deaths}

                    </p>
                    <p>
                      Recovered People Today:
                      {obj.today_recovered}

                    </p>
                    <p>
                      Today cases as compared to yesterday:
                      {obj.today_vs_yesterday_confirmed}

                    </p>

                  </>
                ))}
              </div>
            </div>
          </li>
          )
        ))}
      </ul>
    </div>
  );
}
