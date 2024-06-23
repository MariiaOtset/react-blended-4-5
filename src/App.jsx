import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components';
import Home from 'pages/Home';
import Rates from 'pages/Rates';
import { useEffect } from 'react';
import { featchBaseCurrency } from 'reduxState/operation';
import { useDispatch } from 'react-redux';
import { setbaseCurrency } from 'reduxState/currencySlice';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(featchBaseCurrency(pos.coords));
    }

    function error() {
      dispatch(setbaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
