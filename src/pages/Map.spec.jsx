import React from 'react';
import Map from './Map';
import MapBox from "mapbox-gl";
import { render } from '@testing-library/react';

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe('Map', () => {
  it('renders map', () => {
    const { getByTestId } = render(<Map />);
    expect(MapBox.Map).toHaveBeenCalledWith({
      container: getByTestId('map'),
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.315, 59.940],
      zoom: 11,
    });
  })
})