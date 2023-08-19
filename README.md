# Glims
자신이 경험한 향수에 대해 리뷰를 남기고, 공유하고, 또 공유받을 수 있는 향수 리뷰 플랫폼 웹 사이트입니다.

## 기술 스택
Next.js, React, Typescript, Tanstack Query, Emotion, Recoil

## 로컬 실행 방법
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

## 구현 기능
- 카카오 로그인을 통한 인증 기능 구현.
- 향수 목록에 대한 무한 스크롤 기능 구현.
- Tanstack Query을 활용하여 새로고침 없이 좋아요 갯수 실시간 반영.
- 여러 개의 모달을 효율적으로 관리할 수 있도록 Atom Family를 활용하여 Custom Hook 구현.
- Next.js를 활용하여 SSR, SEO 대응.

