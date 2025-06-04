import axios from 'axios';

const SERVICE_KEY = '83sG4tbie7R5cJwtq3mPDFcL6rJa7CFGTL9PPAaj4CjIBXXWE5rtaFOSXxii74NRNKDRWdvTMkHadbbmJaYXsw%3D%3D';

export const getBusPosition = async (routeId) => {
  try {
    const url = `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?serviceKey=${SERVICE_KEY}&busRouteId=${routeId}&resultType=json`;
    const res = await axios.get(url);
    const items = res.data.msgBody?.itemList;

    return items && items.length > 0 ? items[0] : null;
  } catch (err) {
    console.error('버스 위치 가져오기 실패:', err);
    return null;
  }
};
