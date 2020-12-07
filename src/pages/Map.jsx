import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGlhbmEyMTAyMTk5NCIsImEiOiJja2kxdmkzdDAwYm91MnBtdm9oYXJjNXo4In0.UDGy3Yom3vQ5xIgZ8vQAiQ';


class Map extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.315, 59.940],
      zoom: 11
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <>
        <div className='map-wrapper' data-testid='map' ref={this.mapContainer} />
      </>
    );
  }
}

export default Map;