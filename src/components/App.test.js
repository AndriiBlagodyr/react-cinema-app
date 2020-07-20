import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
	afterEach(cleanup);
	test('matches snapshot when App is rendered', () => {
		const { asFragment } = render(<App />);
		expect(asFragment()).toMatchSnapshot();
	});
	screen.debug();
});
