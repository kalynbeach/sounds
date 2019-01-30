import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

// Shallow rendering apparently doesn't support React Hooks yet
it('renders without crashing', () => {
  shallow(<App />);
});
