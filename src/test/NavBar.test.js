import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('renders NavBar with the nav-left list that contains the home icon ᐸ', async () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  const navhomeList = await screen.findByTestId('nav_home_list');
  expect(navhomeList).toBeInTheDocument();
});

test('renders NavBar with the mic icon', async () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  const micIcon = await screen.findByTestId('mic_icon');
  expect(micIcon).toBeInTheDocument();
});

test('renders NavBar with the settings icon', async () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  const settingsIcon = await screen.findByTestId('settings_icon');
  expect(settingsIcon).toBeInTheDocument();
});
