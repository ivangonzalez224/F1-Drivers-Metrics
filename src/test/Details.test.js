import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import store from '../redux/store';
import { initSeasons } from '../redux/details/DetailsSlice';
import { initDrivers } from '../redux/drivers/DriversSlice';
import Details from '../components/pages/Details';

test('renders Details Page with season data', () => {
  const testConstructor = [
    {
      id: 'mclaren',
      constructor_name: 'Mclaren',
      constructor_img: 'https://res.cloudinary.com/dcb0zmg5w/image/upload/v1693915270/dev/mclarenCar_pfvdb9.png',
      num_drivers: 23,
    },
  ];

  const testSeason = [
    {
      id: 'mclaren',
      season: 2017,
      num_drivers: 3,
      constructor_name: 'Mclaren',
    },
    {
      id: 'mclaren1',
      season: 2016,
      num_drivers: 3,
      constructor_name: 'Mclaren',
    },
    {
      id: 'mclaren2',
      season: 2015,
      num_drivers: 3,
      constructor_name: 'Mclaren',
    },
    {
      id: 'mclaren3',
      season: 2023,
      num_drivers: 2,
      constructor_name: 'Mclaren',
    },
    {
      id: 'mclaren4',
      season: 2022,
      num_drivers: 2,
      constructor_name: 'Mclaren',
    },
    {
      id: 'mclaren5',
      season: 2021,
      num_drivers: 2,
      constructor_name: 'Mclaren',
    },
  ];

  store.dispatch(initDrivers(testConstructor));
  store.dispatch(initSeasons(testSeason));

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/details/Mclaren']}>
        <Routes>
          <Route path="/details/:driverId" element={<Details />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText('Mclaren')).toBeInTheDocument();
});
