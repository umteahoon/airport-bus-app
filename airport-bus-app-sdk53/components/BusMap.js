import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { getBusPosition } from '../services/api';

export default function BusMap() {
  const [busPos, setBusPos] = useState(null);

  useEffect(() => {
    const fetchBusData = async () => {
      const data = await getBusPosition('BUS_ROUTE_ID');
      if (data) {
        setBusPos({
          latitude: parseFloat(data.gpsY),
          longitude: parseFloat(data.gpsX),
        });
      }
    };

    fetchBusData();
    const interval = setInterval(fetchBusData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: busPos?.latitude || 37.5665,
        longitude: busPos?.longitude || 126.9780,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {busPos && (
        <Marker coordinate={busPos} title="공항버스 위치" />
      )}
    </MapView>
  );
}
