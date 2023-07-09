/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { RootComponent } from '../src/main/root-component';

it('renders correctly', () => {
  renderer.create(<RootComponent />);
});
