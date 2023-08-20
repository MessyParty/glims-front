# Glims 🫧

자신이 경험한 향수에 대해 리뷰를 남기고, 공유하고, 또 공유받을 수 있는 향수 리뷰 플랫폼 웹 사이트입니다.

## 🛠️ 기술 스택

- Next.js
- React
- Typescript
- Tanstack Query
- Emotion
- Recoil

## 🖥️ 로컬 실행 방법

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

## 미리보기

메인 페이지, About, 베스트, 리뷰, 마이 페이지까지 총 5가지의 핵심 플로우로 구성되어 있습니다.

### Main

- 미로그인 상태

- 로그인 상태

### About

### Best

- 베스트 브랜드

- 브랜드별 향수 데이터

- 향수 상세 페이지

### Review

### My Page
