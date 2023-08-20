# 🫧 Glims

자신이 경험한 향수에 대해 리뷰를 남기고, 공유하고, 또 공유받을 수 있는 향수 리뷰 플랫폼 웹 사이트입니다.

## 🛠️ 기술 스택

- Next.js
- React
- Typescript
- Tanstack Query
- Emotion
- Recoil

## 🕹️ 로컬 실행 방법

1. 프로젝트 클론

```
git clone git@github.com:MessyParty/glims-front.git
```

2. 의존성 설치

```
npm install
```

3. 환경 설정 파일 추가 (.env.local)

```
NEXT_PUBLIC_BASE_URL=서버주소
NEXT_PUBLIC_OAUTH_URL=서버주소
RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=false
```

4. 프로젝트 실행

```
npm run dev
```

## 💡 구현 기능

- 카카오 로그인을 통한 인증 기능 구현
- 향수 목록에 대한 Tanstack Query를 활용하여 observer를 통해 무한 스크롤 기능 구현
- Tanstack Query을 활용한 좋아요 갯수 및 리뷰 데이터 실시간 반영
- 여러 개의 모달을 효율적으로 관리할 수 있도록 Atom Family를 활용하여 Custom Hook 구현
- Next.js를 활용하여 SSR으로 SEO 대응
- useRecoilCallback을 활용한 전역적인 로그인 상태 관리
- useState, useEffect, useRef를 활용하여 특정 위치 스크롤 기능
- MUI를 활용하여 효율적인 공통 컴포넌트 관리

## 🖥️ 미리보기

메인 페이지, About, 베스트, 브랜드, 리뷰, 마이 페이지까지 총 6가지의 핵심 플로우로 구성되어 있습니다.

### Main

- 미로그인 상태
![image](https://github.com/MessyParty/glims-front/assets/50559373/1613e260-2ee1-40dc-93f4-6c9be8082446)

- 로그인 모달
![image](https://github.com/MessyParty/glims-front/assets/50559373/c101e95f-85c1-46bc-b752-881c17f1199d)

- 로그인 상태
![Group 74](https://github.com/MessyParty/glims-front/assets/50559373/a64060f5-a190-4339-903b-92dfa41153f1)


### About
![image](https://github.com/MessyParty/glims-front/assets/50559373/b209e2be-d650-402d-b08b-4835c07bcb73)

### Best

- 베스트 향수
![image](https://github.com/MessyParty/glims-front/assets/50559373/e7492bdd-49ea-420a-a3f6-22e1ab4b6e81)


### Brand

- 브랜드
![Aug-20-2023 18-46-47](https://github.com/MessyParty/glims-front/assets/50559373/869987e0-fee5-4244-a142-0e09bae5a9f0)

- 브랜드별 향수 목록
![Group 75](https://github.com/MessyParty/glims-front/assets/50559373/ddf9d5d4-a549-45a1-b2ee-3a568393f79f)

  
- 향수 상세 페이지
![image](https://github.com/MessyParty/glims-front/assets/50559373/08b1e61a-de6d-4403-9d23-ca450a5de742)

### Review
![image](https://github.com/MessyParty/glims-front/assets/50559373/92629f7a-583c-48fb-a81a-821f879e6757)

- 리뷰 상세 페이지
![image](https://github.com/MessyParty/glims-front/assets/50559373/538ad299-635c-43df-8e1a-1a3f7871c9a0)


### My Page
![image](https://github.com/MessyParty/glims-front/assets/50559373/f43fedc1-36a5-442e-abb7-795584d5e530)

### 검색
![image](https://github.com/MessyParty/glims-front/assets/50559373/cfd1dd96-76ac-4cea-b869-51a61c6098fb)
![image](https://github.com/MessyParty/glims-front/assets/50559373/d4cb9760-d15c-47cc-9ace-322b455c736f)


