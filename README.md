# Portfolio

개인 포트폴리오 웹사이트입니다.

## 스택

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@theme`, `@utility` 커스텀 문법)
- React Router v7

## 시작하기

```bash
npm install
npm run dev
```

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 타입 체크 후 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run lint` | Oxlint 검사 |

## 프로젝트 구조

```
src/
├── main.tsx          # 앱 엔트리 (BrowserRouter)
├── main.css           # 디자인 토큰 & 반응형 타이포그래피
├── App.tsx
└── page/
    ├── layout.jsx      # 라우팅 및 페이지 전환 레이아웃
    ├── home.jsx        # 홈
    ├── aboutMe.jsx      # 소개
    ├── project.jsx      # 프로젝트
    └── contact.jsx      # 연락처
```

## 디자인 시스템

- **브레이크포인트**: mobile(기본) → tablet(768px~) → desktop(1200px~)
- **반응형 타이포그래피**: `main.css`에 정의된 `@utility` 클래스(`text-large` / `text-medium` / `text-base` / `text-small` / `text-tiny` / `text-micro` / `text-label`) 사용
- **폰트**: Pretendard
