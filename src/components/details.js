import React from 'react';
import { useSelector } from 'react-redux';

export default function Details() {
  const state = useSelector((state) => state.homeReducer);
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
        {state.regions((region) => (
          <li key={region.id}>
            <p>{region.name}</p>
            <div>
              <p>
                {region.today_confirmed}
                {' '}
                Cases
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
