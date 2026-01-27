# Moonlight 웹사이트 - Figma 디자인 분석 보고서

## 개요
Figma 디자인 파일 (node-id=10-95)의 시작 페이지 분석을 통해 `product-info` 프로젝트의 페이지 디자인을 개선하기 위한 가이드입니다.

**파일 링크**: https://www.figma.com/design/wBsBtqg4uabDCHMxMfHyrk/Moonlight-New-Website?node-id=10-95

---

## 1. 시작 페이지(Landing Page) 레이아웃 구조

### 1.1 전체 페이지 레이아웃
```
┌─────────────────────────────────────────┐
│           고정 헤더 (Header)             │
├─────────────────────────────────────────┤
│                                         │
│     1. Hero Section                    │
│        (메인 타이틀 + 설명)             │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│     2. Features Section                │
│        (주요 기능 소개)                 │
│        - 배경: 그라데이션 프리플 배경   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│     3. Product Details Section         │
│        (제품 상세 설명)                 │
│        - 이미지 + 텍스트 조합           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│     4. Cases/Testimonials Section      │
│        (도입 사례)                      │
│        - 카드 레이아웃                  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│     5. Pricing Section                 │
│        (요금제 비교)                    │
│        - 가격표 카드                    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│     6. FAQ Section                     │
│        (자주 묻는 질문)                 │
│        - 아코디언 레이아웃              │
│                                         │
├─────────────────────────────────────────┤
│           Footer                        │
└─────────────────────────────────────────┘
```

### 1.2 각 섹션 상세 구조

#### Hero Section
- **높이**: Full viewport (최소 100vh)
- **배경**: 흰색 또는 밝은 그라데이션
- **콘텐츠**: 중앙 정렬, 수직 중심 배치
- **레이아웃**:
  - 메인 타이틀 (H1)
  - 서브 타이틀/설명 (P)
  - CTA 버튼 (선택)

#### Features Section
- **높이**: 자동 또는 최소 600px
- **배경**: 주요 브랜드색 그라데이션
- **배경 색상**:
  - 상단: `#8F5BB7` (Primary Purple)
  - 중간: `#774C99`
  - 중간하단: `#603E7C`
  - 하단: `#482F5E` → `#302040` (Deep Purple)
- **콘텐츠**:
  - 타이틀 (큰 텍스트, 중앙 정렬)
  - 특징 아이콘들 (그리드 또는 캐러셀)

#### Product Details Section
- **레이아웃**: 좌우 분할 (이미지 + 텍스트) 또는 스택
- **데스크톱**: 좌측 50% 이미지, 우측 50% 텍스트
- **모바일**: 전체 너비에서 스택 (이미지 상단, 텍스트 하단)

#### Cases Section
- **레이아웃**: 카드 그리드 (3-4 컬럼 데스크톱, 1-2 컬럼 모바일)
- **카드 크기**: 최소 300px x 300px
- **배경**: 밝은 배경 (회색 또는 흰색)

#### Pricing Section
- **배경**: 연한 자주색 또는 흰색
- **레이아웃**: 카드 그리드 (3 컬럼 데스크톱, 1 컬럼 모바일)
- **카드 스타일**:
  - 흰색 배경
  - 상단에 가격 강조
  - 기능 목록
  - CTA 버튼

#### FAQ Section
- **레이아웃**: 단일 컬럼 중앙 정렬
- **아이템**: 아코디언 형태
- **너비**: 최대 700-800px

---

## 2. 색상 팔레트 (Color Palette)

### 2.1 Primary Colors (주요 색상)

| 색상명 | Hex 코드 | RGB | 용도 |
|--------|----------|-----|------|
| Primary Purple | `#8F5BB7` | rgb(143, 91, 183) | 주요 CTA, 강조색, 링크 호버 |
| Secondary Purple | `#605070` | rgb(96, 80, 112) | 헤더, 로고, 주요 텍스트 |
| Dark Purple | `#482F5E` | rgb(72, 47, 94) | 어두운 배경, 텍스트 |
| Deep Purple | `#302040` | rgb(48, 32, 64) | 가장 어두운 배경 |
| Light Purple | `#774C99` | rgb(119, 76, 153) | 그라데이션 중간 단계 |
| Gradient Step 4 | `#603E7C` | rgb(96, 62, 124) | 그라데이션 단계 |

### 2.2 Secondary Colors (보조 색상)

| 색상명 | Hex 코드 | RGB | 용도 |
|--------|----------|-----|------|
| Text Primary | `#181818` | rgb(24, 24, 24) | 일반 텍스트 |
| Text Secondary | `#696969` | rgb(105, 105, 105) | 보조 텍스트, 설명 |
| Background Light | `#f8f6fa` | rgb(248, 246, 250) | 섹션 배경, 강조 배경 |
| Background White | `#ffffff` | rgb(255, 255, 255) | 기본 배경, 카드 |
| Background Gray | `#f0f0f0` | rgb(240, 240, 240) | 섹션 배경 |
| Border Gray | `#e0e0e0` | rgb(224, 224, 224) | 경계선 |

### 2.3 Hover/Interactive States

| 상태 | 색상 | Hex 코드 |
|------|------|----------|
| 링크 기본 | Secondary Purple | `#605070` |
| 링크 호버 | Primary Purple | `#8F5BB7` |
| 버튼 기본 | Primary Purple | `#8F5BB7` |
| 버튼 호버 | Darker Purple | `#7a4a99` |
| 버튼 활성 | Dark Purple | `#482F5E` |

### 2.4 색상 사용 가이드

```css
/* Primary Brand Color */
--color-primary: #8F5BB7;
--color-primary-hover: #7a4a99;
--color-primary-dark: #603E7C;

/* Secondary Brand Color */
--color-secondary: #605070;
--color-secondary-light: #744C8C;

/* Text Colors */
--color-text-primary: #181818;
--color-text-secondary: #696969;
--color-text-light: #999999;

/* Background Colors */
--color-bg-white: #ffffff;
--color-bg-light: #f8f6fa;
--color-bg-gray: #f0f0f0;
--color-bg-dark: #302040;

/* Gradients */
--gradient-features: radial-gradient(ellipse at center bottom,
  #8F5BB7 0%,
  #774C99 25%,
  #603E7C 50%,
  #482F5E 75%,
  #302040 100%);
```

---

## 3. 타이포그래피 (Typography)

### 3.1 폰트 설정

| 용도 | 폰트 | 대체 폰트 | 가중치 |
|------|------|----------|--------|
| 제목 (H1-H3) | Pretendard | -apple-system, BlinkMacSystemFont, sans-serif | 700-900 |
| 본문 | Noto Sans KR | -apple-system, BlinkMacSystemFont, sans-serif | 400-500 |
| 로고/특수 | Quicksand | sans-serif | 700 |

### 3.2 타이포그래피 스케일

#### 데스크톱 (Desktop)

| 요소 | 폰트 크기 | 가중치 | 라인 높이 | 사용처 |
|------|----------|-------|----------|--------|
| H1 (Main Hero) | 48px | 700-800 | 1.2 | 메인 제목 |
| H2 (Section) | 36px | 700 | 1.3 | 섹션 제목 |
| H3 (Feature) | 24px | 700 | 1.4 | 기능 제목 |
| Body Large | 20px | 400-500 | 1.6 | 메인 설명 |
| Body Medium | 16px | 400-500 | 1.6 | 일반 텍스트 |
| Body Small | 14px | 400 | 1.5 | 보조 텍스트 |
| Label | 12px | 500 | 1.4 | 라벨, 태그 |

#### 모바일 (Mobile - < 768px)

| 요소 | 폰트 크기 | 가중치 | 라인 높이 | 사용처 |
|------|----------|-------|----------|--------|
| H1 | 32px | 700 | 1.2 | 메인 제목 |
| H2 | 24px | 700 | 1.3 | 섹션 제목 |
| H3 | 18px | 700 | 1.4 | 기능 제목 |
| Body Large | 16px | 400-500 | 1.6 | 메인 설명 |
| Body Medium | 14px | 400-500 | 1.6 | 일반 텍스트 |
| Body Small | 12px | 400 | 1.5 | 보조 텍스트 |

### 3.3 라인 높이 및 레터 스페이싱

```css
/* 제목 (Titles) */
.heading-1 {
  font-family: Pretendard, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.heading-2 {
  font-family: Pretendard, sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.3px;
}

/* 본문 (Body) */
.body-large {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0px;
}

.body-medium {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0px;
}
```

---

## 4. 컴포넌트 및 UI 요소들

### 4.1 버튼 (Buttons)

#### Primary Button
```
상태: 기본
- 배경색: #8F5BB7
- 텍스트색: #ffffff
- 패딩: 12px 24px (모바일), 16px 32px (데스크톱)
- 보더 라디우스: 8px
- 폰트 크기: 14px-16px
- 폰트 가중치: 600-700

상태: 호버
- 배경색: #7a4a99
- 텍스트색: #ffffff

상태: 활성
- 배경색: #482F5E
- 텍스트색: #ffffff
```

#### Secondary Button
```
상태: 기본
- 배경색: 투명 또는 #f8f6fa
- 테두리: 1px solid #8F5BB7
- 텍스트색: #8F5BB7
- 패딩: 12px 24px
- 보더 라디우스: 8px

상태: 호버
- 배경색: #f8f6fa
- 테두리: 1px solid #7a4a99
- 텍스트색: #7a4a99
```

### 4.2 카드 (Cards)

#### Feature Card
```
레이아웃:
- 아이콘 (상단 또는 좌측)
- 제목 (H3, 24px, 700)
- 설명 (Body, 16px, 400)
- 선택: 링크 또는 CTA

스타일:
- 배경: #ffffff
- 보더: 없음 또는 1px 밝은 회색
- 패딩: 24px (모바일), 32px (데스크톱)
- 보더 라디우스: 12px
- 박스 섀도우: 0 4px 12px rgba(0, 0, 0, 0.05)

호버 상태:
- 박스 섀도우: 0 8px 24px rgba(0, 0, 0, 0.1)
- 트랜지션: box-shadow 0.3s ease
```

#### Pricing Card
```
구조:
- 플랜명 (H3)
- 가격 (큰 숫자, Primary Purple)
- 기간 (Body Small, 보조 텍스트)
- 기능 목록 (체크 마크 + 텍스트)
- CTA 버튼

스타일:
- 배경: #ffffff
- 보더: 2px solid #e0e0e0 (일반), 2px solid #8F5BB7 (추천)
- 패딩: 24px
- 보더 라디우스: 12px

특별 플랜 (추천):
- 배경: 밝은 그라데이션 또는 강조
- 상단에 "추천" 뱃지
```

### 4.3 이미지/비디오 섹션

#### Hero Image/Video
```
데스크톱:
- 너비: 100% (max 1200px)
- 높이: auto
- 애스팩트 레이시오: 16:9 또는 4:3

모바일:
- 너비: 100%
- 높이: auto
- 애스팩트 레이시오: 1:1 또는 9:16 (세로)

스타일:
- 보더 라디우스: 8px-12px
- 박스 섀도우: 0 10px 30px rgba(0, 0, 0, 0.1)
```

#### Feature Image
```
데스크톱:
- 최대 너비: 480px-600px
- 높이: auto

모바일:
- 너비: 100%
- 높이: auto

스타일:
- 보더 라디우스: 0px (선택) 또는 8px
- 오브젝트 피트: cover
- 박스 섀도우: 선택적
```

### 4.4 헤더/네비게이션

#### Desktop Header
```
높이: 68px (고정)
배경: #ffffff
박스 섀도우: 0 2px 4px rgba(0, 0, 0, 0.05)

레이아웃:
- 좌측: 로고 (32x32px) + 회사명 (텍스트)
- 중앙: 네비게이션 링크 (6개)
- 우측: CTA 버튼 (Contact)

네비게이션 스타일:
- 폰트 크기: 16px
- 폰트 가중치: 500
- 색상: #181818
- 호버 색상: #8F5BB7
- 트랜지션: color 0.2s ease
```

#### Mobile Header
```
높이: 64px (고정)
배경: #ffffff

레이아웃:
- 좌측: 로고 (28x28px) + 회사명
- 우측: 햄버거 메뉴

메뉴 토글 애니메이션:
- 상단 라인: rotate(45deg) translate(8px, 8px)
- 중간 라인: opacity(0)
- 하단 라인: rotate(-45deg) translate(-8px, -8px)
```

#### Mobile Menu
```
위치: 헤더 하단에 슬라이드 다운
배경: #ffffff
박스 섀도우: 0 4px 12px rgba(0, 0, 0, 0.1)

구조:
- 네비게이션 링크 (각각 16px, 500)
- 분리선 (테두리)
- Contact 버튼 (풀 너비)

애니메이션:
- 진입: 0.3s ease-out (슬라이드 다운)
- 퇴장: 0.2s ease-in (슬라이드 업)
```

### 4.5 입력 필드 (Input Fields)

```
스타일:
- 배경: #ffffff
- 테두리: 1px solid #e0e0e0
- 보더 라디우스: 6px
- 패딩: 10px 12px
- 폰트 크기: 14px

호버 상태:
- 테두리: 1px solid #d0d0d0

포커스 상태:
- 테두리: 2px solid #8F5BB7
- 박스 섀도우: 0 0 0 3px rgba(143, 91, 183, 0.1)

비활성 상태:
- 배경: #f5f5f5
- 텍스트 색상: #999999
```

### 4.6 토글/체크박스

```
체크박스:
- 크기: 18x18px (기본), 16x16px (작음)
- 배경: #ffffff (체크 안 됨), #8F5BB7 (체크됨)
- 테두리: 2px solid #e0e0e0
- 보더 라디우스: 4px
- 체크 마크: #ffffff, 2px 굵기

토글:
- 너비: 48px
- 높이: 24px
- 배경: #e0e0e0 (off), #8F5BB7 (on)
- 동그란 버튼: 20x20px
- 보더 라디우스: 12px
- 트랜지션: background 0.3s ease
```

---

## 5. 반응형 레이아웃 (Responsive Design)

### 5.1 브레이크포인트 (Breakpoints)

```css
/* 모바일 (Mobile First Approach) */
@media (max-width: 640px) {
  /* sm: 모바일 스마트폰 */
}

@media (max-width: 768px) {
  /* md: 태블릿 */
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* lg: 큰 태블릿/작은 데스크톱 */
}

@media (min-width: 1024px) {
  /* xl: 데스크톱 */
}

@media (min-width: 1280px) {
  /* 2xl: 큰 데스크톱 */
}
```

### 5.2 레이아웃 변화 (Layout Changes)

#### Hero Section
```
모바일 (< 768px):
- 패딩: 16px
- H1: 32px
- P: 16px
- 고정 높이 제거, min-height: 60vh

태블릿 (768px - 1024px):
- 패딩: 24px
- H1: 40px
- P: 18px
- min-height: 70vh

데스크톱 (> 1024px):
- 패딩: 48px
- H1: 48px
- P: 20px
- min-height: 100vh
```

#### Features Section
```
모바일 (< 768px):
- 단일 컬럼
- 아이콘 크기: 80px
- 타이틀: 24px
- 설명: 14px

데스크톱 (> 768px):
- 2-3 컬럼 그리드
- 아이콘 크기: 120px
- 타이틀: 32px
- 설명: 16px
```

#### Cases/Testimonials Section
```
모바일:
- 1 컬럼
- 카드 너비: 100%
- 카드 높이: auto

태블릿:
- 2 컬럼
- 카드 최소 너비: 300px

데스크톱:
- 3-4 컬럼
- 카드 너비: 균등
```

#### Pricing Section
```
모바일:
- 1 컬럼
- 카드 너비: 100%

태블릿:
- 2 컬럼
- 카드 너비: 48%

데스크톱:
- 3 컬럼
- 카드 너비: 31%
- 중간 카드 강조
```

### 5.3 이미지 반응형 처리

```css
/* 데스크톱: 1:1 비율 또는 풀 너비 */
@media (min-width: 1024px) {
  .feature-image {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
}

/* 모바일: 풀 너비, 제한된 높이 */
@media (max-width: 768px) {
  .feature-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
```

### 5.4 그리드 시스템

```css
/* 최대 너비 */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
}

/* 반응형 패딩 */
@media (min-width: 768px) {
  .container {
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 48px;
  }
}

/* 그리드 컬럼 */
.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    gap: 32px;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 6. 이미지/아이콘 에셋

### 6.1 이미지 가이드

#### Hero Banner Image
```
크기: 1200px x 600px (데스크톱), 640px x 360px (모바일)
포맷: WebP (주) / PNG (대체)
최적화: 최대 150KB

사용처: Hero 섹션 배경 또는 메인 이미지
```

#### Feature Images
```
크기: 600px x 400px (개별 기능), 1200px x 600px (풀 너비)
포맷: WebP / PNG / JPG
최적화: 100-200KB

사용처: 각 기능별 설명 이미지
```

#### Case Study Images
```
크기: 400px x 300px (카드)
포맷: JPG / WebP
최적화: 80-120KB

사용처: 도입 사례 카드
```

#### Testimonial Images
```
크기: 80px x 80px (아바타), 400px x 300px (커버)
포맷: JPG / PNG
최적화: 20-50KB (아바타), 80-150KB (커버)

사용처: 사용자 평가 섹션
```

### 6.2 아이콘 가이드

#### Icon Sizes
```
- 모바일 네비게이션: 24px x 24px
- 헤더 로고: 32px x 32px
- 기능 아이콘: 64px x 64px (모바일), 120px x 120px (데스크톱)
- UI 컨트롤: 16px x 16px (작음), 24px x 24px (일반)
```

#### Icon Style
```
스타일: 선 아이콘 (Outline) 또는 채움 아이콘 (Filled)
선 굵기: 2px (선 아이콘)
색상:
  - 기본: #605070 (보라색)
  - 강조: #8F5BB7 (밝은 보라색)
  - 흰색: #ffffff (어두운 배경 위)
```

#### 권장 아이콘
```
- 메뉴: Hamburger, Menu
- 검색: Search, Magnifying Glass
- 사용자: User Profile, Person
- 설정: Settings, Gear
- 닫기: X, Close
- 기능: 각 기능별 맞춤 아이콘
- 소셜: 소셜 미디어 로고
```

### 6.3 이미지 로딩 최적화

```html
<!-- Lazy Loading -->
<img loading="lazy" src="..." alt="..." />

<!-- Responsive Images -->
<picture>
  <source media="(max-width: 640px)" srcset="image-mobile.webp" type="image/webp" />
  <source media="(min-width: 641px)" srcset="image-desktop.webp" type="image/webp" />
  <img src="image-fallback.jpg" alt="..." />
</picture>

<!-- Next.js Image Component -->
<Image
  src="/path/to/image"
  alt="Description"
  width={1200}
  height={600}
  priority={false}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## 7. 현재 product-info 프로젝트의 개선 사항

### 7.1 현재 상태 분석

#### 긍정적 측면
- ✓ Tailwind CSS 기반 구조로 반응형 대응 가능
- ✓ 섹션별 분리된 컴포넌트 구조
- ✓ 기본적인 색상 팔레트 일관성
- ✓ 헤더에 모바일 메뉴 구현

#### 개선 필요 영역
- 타이포그래피 스케일이 일관성 없음
- 섹션별 레이아웃이 기본적이고 과도하게 단순화
- 색상 변수화 부족
- 컴포넌트 재사용성 부족
- 반응형 이미지 최적화 미흡
- 인터랙티브 요소 (호버, 트랜지션) 부족

### 7.2 개선 방안

#### 1. 색상 시스템 구조화
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: {
        50: '#faf5fe',
        100: '#f5ebfd',
        500: '#8F5BB7',  // Main
        600: '#7a4a99',
        700: '#603E7C',
        900: '#302040',
      },
      secondary: {
        500: '#605070',
        700: '#482F5E',
      },
      // ...
    }
  }
}
```

#### 2. 타이포그래피 컴포넌트화
```tsx
// 각 타이포그래피 크기별 컴포넌트 생성
<Heading level={1} size="lg">Main Title</Heading>
<Text size="base" weight="medium">Body Text</Text>
```

#### 3. 재사용 가능한 UI 컴포넌트 확대
- Button 컴포넌트 (Primary, Secondary, Ghost 변형)
- Card 컴포넌트 (Feature, Pricing, Case 변형)
- Section 컴포넌트 (패딩, 배경 일관성)
- Grid 컴포넌트 (반응형 그리드)

#### 4. 섹션 콘텐츠 강화
```tsx
// Features Section - 카드 그리드 추가
<Grid columns={{ base: 1, md: 2, lg: 3 }}>
  {features.map(feature => (
    <FeatureCard key={feature.id} {...feature} />
  ))}
</Grid>

// Cases Section - 도입 사례 카드
// Pricing Section - 가격 비교 테이블 형식

// FAQ Section - 아코디언 인터랙션
<Accordion items={faqs} />
```

#### 5. 이미지 최적화
```tsx
// Next.js Image 컴포넌트 활용
<Image
  src="/assets/product/hero/hero-image.png"
  alt="Moonlight Hero"
  width={1200}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  priority
/>
```

#### 6. 인터랙션 강화
```css
/* 호버 및 트랜지션 효과 */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(143, 91, 183, 0.2);
}

/* Scroll 애니메이션 */
.feature-card {
  animation: fadeInUp 0.6s ease-out;
}
```

### 7.3 우선 순위별 개선 로드맵

#### Phase 1 (필수)
1. 색상 시스템 구조화 (Tailwind config)
2. 타이포그래피 스케일 정의 및 적용
3. 기본 버튼/카드 컴포넌트 확대

#### Phase 2 (중요)
4. Features, Pricing, Cases 섹션 리디자인
5. 반응형 그리드 시스템 개선
6. 이미지 최적화 및 Lazy Loading

#### Phase 3 (향상)
7. 인터랙션 및 애니메이션 추가
8. FAQ 아코디언 구현
9. 성능 최적화 (Core Web Vitals)

---

## 8. 구현 예시

### 8.1 개선된 Hero Section
```tsx
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white" />

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-500 mb-6">
          Moonlight
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          연구자를 위한 AI 논문 분석 도구
        </p>
        <button className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all">
          시작하기
        </button>
      </div>
    </section>
  );
}
```

### 8.2 개선된 Features 카드 컴포넌트
```tsx
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group p-6 md:p-8 bg-white rounded-lg border border-gray-100 hover:border-primary-500 hover:shadow-lg transition-all duration-300">
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-xl md:text-2xl font-bold text-secondary-500 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-base">
        {description}
      </p>
    </div>
  );
}
```

### 8.3 개선된 Pricing 섹션
```tsx
export function PricingSection() {
  const plans = [
    { name: 'Basic', price: '$29', features: [...] },
    { name: 'Pro', price: '$79', featured: true, features: [...] },
    { name: 'Enterprise', price: 'Custom', features: [...] },
  ];

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary-500 mb-16">
          합리적인 가격으로 시작하세요
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 9. 체크리스트

### 디자인 일관성 체크
- [ ] 모든 제목이 타이포그래피 스케일을 따르는가?
- [ ] 색상이 정의된 팔레트를 사용하는가?
- [ ] 모든 버튼이 일관된 스타일을 유지하는가?
- [ ] 카드 컴포넌트가 일관된 패딩/보더 라디우스를 사용하는가?
- [ ] 섀도우가 일관된 깊이 시스템을 따르는가?

### 반응형 체크
- [ ] 모바일(375px)에서 올바르게 표시되는가?
- [ ] 태블릿(768px)에서 레이아웃이 제대로 조정되는가?
- [ ] 데스크톱(1200px+)에서 최적으로 표시되는가?
- [ ] 이미지가 반응형으로 로드되는가?
- [ ] 폰트 크기가 디바이스별로 적절히 조정되는가?

### 성능 체크
- [ ] 이미지가 최적화되었는가? (WebP, 적절한 크기)
- [ ] Lazy Loading이 적용되었는가?
- [ ] 필수 리소스가 우선 로드되는가?
- [ ] Core Web Vitals 점수는?
- [ ] 번들 크기는 허용 범위인가?

### 접근성 체크
- [ ] 모든 이미지에 alt text가 있는가?
- [ ] 색상만으로 정보를 전달하지 않는가?
- [ ] 버튼과 링크가 충분히 커서 쉽게 클릭 가능한가?
- [ ] 콘트라스트 비율이 WCAG 기준을 만족하는가?
- [ ] 키보드 네비게이션이 가능한가?

---

## 10. 참고 자료

### Figma 파일 정보
- **파일 명**: Moonlight-New-Website
- **페이지**: Landing Page (node-id=10-95)
- **링크**: https://www.figma.com/design/wBsBtqg4uabDCHMxMfHyrk/Moonlight-New-Website?node-id=10-95

### 프로젝트 파일
- **위치**: `/product-info`
- **프레임워크**: Next.js 16
- **스타일링**: Tailwind CSS
- **컴포넌트**: React 19

### 추가 리소스
- Tailwind CSS 문서: https://tailwindcss.com/docs
- Next.js 이미지 최적화: https://nextjs.org/docs/app/api-reference/components/image
- WCAG 접근성: https://www.w3.org/WAI/WCAG21/quickref/

---

## 결론

Figma 디자인 분석을 통해 Moonlight 웹사이트의 다음과 같은 특징을 파악했습니다:

1. **일관된 색상 시스템**: 자주색 기반의 현대적인 팔레트
2. **계층적 타이포그래피**: 명확한 정보 계층구조
3. **반응형 친화적**: 모바일-우선 설계
4. **컴포넌트 기반**: 재사용 가능한 UI 요소들

이 분석 자료를 바탕으로 `product-info` 프로젝트의 페이지를 다음 단계로 개선할 수 있습니다:
- 디자인 일관성 강화
- 사용자 경험 개선
- 성능 최적화
- 접근성 준수

지속적인 디자인 개선을 통해 전문적이고 사용자 친화적인 제품 웹사이트를 완성할 수 있을 것입니다.
