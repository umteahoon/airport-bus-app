# 🚌 공항버스 실시간 위치 조회 앱

공공데이터포털의 **공항버스노선 정보 API** 및 **서울시 버스위치정보 조회 API**를 활용하여  
공항버스의 실시간 위치를 지도 상에서 확인할 수 있는 **모바일 앱**을 개발하였습니다.

---

## 📌 프로젝트 개요

- **목표:** 공항버스의 위치를 실시간으로 지도에 시각화하여 이용자 편의성 향상
- **기술 스택:** Expo SDK 53, React Native, react-native-maps, WebView, 공공데이터포털 OpenAPI
- **주요 기능:**
  - 공항버스 노선 선택
  - 노선별 실시간 위치 조회
  - 네이버 지도 기반 버스 위치 시각화
  - WebView를 통한 지도 표시

---

## 🚀 실행 방법

### 1. 환경 준비

- Node.js 18 이상
- Expo CLI 설치:

```bash
npm install -g expo-cli
```

### 2. 프로젝트 실행

```bash
git clone https://github.com/your-username/airport-bus-app.git
cd airport-bus-app
npm install
npx expo start
```

### 3. API 키 입력

`App.js` 또는 환경 설정 파일 내 아래 항목 수정:

```js
const serviceKey = "83sG4tbie7R5cJwtq3mPDFcL6rJa7CFGTL9PPAaj4CjIBXXWE5rtaFOSXxii74NRNKDRWdvTMkHadbbmJaYXsw==";
```

---

## 📁 프로젝트 구조

```
airport-bus-app/
├── assets/                   # 앱에서 사용하는 이미지, 아이콘, 스플래시 화면 등을 저장하는 폴더
├── components/               # 재사용 가능한 UI 컴포넌트들을 모아두는 폴더
│   └── BusMap.js             # 네이버 지도를 WebView로 표시하고 버스 위치를 시각화하는 컴포넌트
├── scripts/                  # 개발 중에 필요한 유틸리티 스크립트를 저장하는 폴더
│   └── checkHermes.js        # Hermes 엔진이 정상적으로 활성화되어 있는지 확인하는 스크립트
├── services/                 # API 요청이나 외부 서비스 관련 코드를 모아두는 폴더
│   └── api.js                # 공공데이터포털 API를 통해 버스 위치 데이터를 가져오는 함수가 포함된 파일
├── App.js                    # 앱의 진입점이 되는 메인 컴포넌트 파일
├── app.json                  # Expo 설정 파일로 앱 이름, 아이콘, 빌드 정보 등을 정의
├── package.json              # 프로젝트 메타 정보와 사용 중인 npm 패키지 목록, 실행 스크립트 등이 포함됨
├── package-lock.json         # 설치된 정확한 npm 패키지 버전이 기록되어 있어 동일한 환경 재현 가능
├── README.md                 # 프로젝트 소개, 설치 방법, 사용법 등을 설명하는 문서
└── .env                      # (선택 사항) API 키와 같은 민감한 환경 변수들을 저장하는 파일 (코드에서는 불포함)

```

---

## 🧠 주요 기능

- 🗺 공항버스 실시간 위치 지도 표시
- 🚌 노선별 버스 위치 시각화
- 🔄 실시간 API 통신 처리
- 📱 WebView로 네이버 지도 연동

---

## 🔧 개선 및 고도화 작업

- [x] Expo SDK 53 최신 환경 대응
- [x] Hermes 충돌 없는 설정
- [ ] 버스 정류장 위치 정보 표시 예정
- [ ] 사용자 위치 기반 근처 노선 추천 기능

---

## 📚 사용한 API 정보

- **공공데이터포털 API**
  - 공항버스노선 정보 API
  - 서울시 버스위치정보조회 API
  - [https://www.data.go.kr](https://www.data.go.kr)

---

## 🙋‍♂️ 개발자 정보

- 이름: 엄태훈  
- 이메일: am2869@naver.com  
- GitHub: [https://github.com/umteahoon](https://github.com/umteahoon)

- 이름: 손우혁  
- 이메일: woo2483@naver.com  
- GitHub: [https://github.com/Last55](https://github.com/Last55)
