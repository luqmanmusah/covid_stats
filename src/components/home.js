import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    </div>
  );
}
