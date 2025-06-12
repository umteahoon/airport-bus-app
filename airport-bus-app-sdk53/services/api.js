import axios from 'axios';

const SERVICE_KEY = '발급받은 키 입력 ';

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
