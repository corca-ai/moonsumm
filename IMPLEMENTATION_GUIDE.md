# Moonlight 페이지 구현 가이드

## 개요

이 문서는 Figma 디자인을 기반으로 `product-info` 프로젝트의 페이지를 실제로 개선하고 구현하는 단계별 가이드입니다.

---

## Phase 1: 기초 설정 (1-2일)

### Step 1: Tailwind 설정 업데이트

**파일**: `tailwind.config.js`

현재 설정에 다음을 추가합니다:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#faf5fe',
          100: '#f5ebfd',
          500: '#8F5BB7',
          600: '#7a4a99',
          700: '#603E7C',
          800: '#482F5E',
          900: '#302040',
        },
        'secondary': {
          500: '#605070',
          700: '#482F5E',
        },
        'neutral': {
          50: '#f8f6fa',
          100: '#f0f0f0',
          200: '#e0e0e0',
          600: '#696969',
          800: '#333333',
          900: '#181818',
        },
      },
      backgroundImage: {
        'gradient-features': 'radial-gradient(ellipse at center bottom, #8F5BB7 0%, #774C99 25%, #603E7C 50%, #482F5E 75%, #302040 100%)',
      },
      boxShadow: {
        'card': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 24px 0 rgba(143, 91, 183, 0.15)',
      },
    },
  },
  plugins: [],
};
```

### Step 2: 글로벌 스타일 업데이트

**파일**: `app/globals.css`

```css
@import "tailwindcss";

:root {
  --color-primary: #8F5BB7;
  --color-primary-hover: #7a4a99;
  --color-secondary: #605070;
  --color-text-primary: #181818;
  --color-text-secondary: #696969;
  --color-bg-light: #f8f6fa;
  --font-noto-sans-kr: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
}

@theme inline {
  --color-background: #ffffff;
  --color-foreground: #181818;
  --font-sans: var(--font-noto-sans-kr);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: #ededed;
    --color-bg-light: #1a1a2e;
  }
}

body {
  @apply font-sans bg-white text-neutral-900;
}

/* 버튼 기본 스타일 */
button {
  @apply transition-all duration-300;
}

/* 링크 기본 스타일 */
a {
  @apply transition-colors duration-200;
}

/* 이미지 최적화 */
img {
  @apply max-w-full h-auto;
}

/* 하이라이트 숨기기 */
#__next-build-watcher,
#__next-route-announcer,
nextjs-portal,
[data-nextjs-turbopack-indicator] {
  @apply hidden !important;
}
```

### Step 3: 기본 컴포넌트 생성

**파일**: `components/Button.tsx`

```typescript
'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-200',
    secondary: 'bg-neutral-100 text-primary-500 hover:bg-neutral-200 border border-neutral-200 focus:ring-neutral-200',
    ghost: 'bg-transparent text-primary-500 hover:bg-primary-50 focus:ring-primary-200',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

**파일**: `components/Card.tsx`

```typescript
'use client';

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  children: React.ReactNode;
}

export function Card({
  hoverable = false,
  className = '',
  children,
  ...props
}: CardProps) {
  const baseClasses = 'rounded-lg bg-white border border-neutral-100 shadow-card transition-all duration-300';
  const hoverClasses = hoverable ? 'hover:shadow-card-hover hover:border-primary-200 hover:-translate-y-1' : '';

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
```

---

## Phase 2: 섹션별 개선 (2-3일)

### Step 1: Hero 섹션 개선

**파일**: `app/page.tsx` - Hero 섹션 수정

```typescript
// 기존 Hero Section 대체
<section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white pt-[68px]">
  <div className="text-center max-w-4xl mx-auto px-4 md:px-8">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-500 mb-6 leading-tight">
      Moonlight
    </h1>
    <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
      연구자를 위한 AI 논문 분석 도구
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" variant="primary">
        지금 시작하기
      </Button>
      <Button size="lg" variant="secondary">
        더 알아보기
      </Button>
    </div>
  </div>
</section>
```

### Step 2: Features 섹션 개선

**파일**: `app/components/FeaturesGrid.tsx` (새 파일)

```typescript
'use client';

import { Card } from '@/components/Card';
import Image from 'next/image';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 'summary',
    icon: '/assets/product/icons/summary.svg',
    title: 'SUMMARY',
    description: '논문의 핵심 내용을 키워드, 3줄 요약으로 정리해서 보여줍니다.',
  },
  {
    id: 'analysis',
    icon: '/assets/product/icons/analysis.svg',
    title: 'ANALYSIS',
    description: '논문의 연구 방법론과 결과를 자동으로 분석하고 제시합니다.',
  },
  {
    id: 'search',
    icon: '/assets/product/icons/search.svg',
    title: 'SEARCH',
    description: '키워드와 주제로 관련 논문을 빠르게 검색할 수 있습니다.',
  },
];

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {features.map((feature) => (
        <Card
          key={feature.id}
          hoverable
          className="p-6 lg:p-8"
        >
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 bg-secondary-500 rounded-lg flex items-center justify-center mb-6">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-2xl font-bold text-secondary-500 mb-3 uppercase">
              {feature.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

**파일**: `app/page.tsx` - Features 섹션 수정

```typescript
import { FeaturesGrid } from './components/FeaturesGrid';

// 기존 Features Section 대체
<section id="features" className="w-full bg-gradient-features py-24 px-4 md:px-8 lg:px-12">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        논문 연구에 필요한<br />
        모든 기능들이 준비되어 있습니다.
      </h2>
      <p className="text-xl text-white/80 max-w-2xl mx-auto">
        Moonlight는 연구자의 효율성을 위해 설계된 포괄적인 도구입니다.
      </p>
    </div>
    <FeaturesGrid />
  </div>
</section>
```

### Step 3: Cases 섹션 개선

**파일**: `app/components/CasesGrid.tsx` (새 파일)

```typescript
'use client';

import { Card } from '@/components/Card';
import Image from 'next/image';

interface CaseItem {
  id: string;
  image: string;
  title: string;
  description: string;
  author: string;
  role: string;
  avatar: string;
}

const cases: CaseItem[] = [
  {
    id: '1',
    image: '/assets/product/cases/case-1.jpg',
    title: '박사 과정 학생의 문헌 조사 시간 70% 단축',
    description: 'Moonlight를 사용하여 논문 정리 시간을 획기적으로 줄였습니다.',
    author: '김연구',
    role: '박사 과정 학생',
    avatar: '/assets/product/avatars/avatar-1.jpg',
  },
  {
    id: '2',
    image: '/assets/product/cases/case-2.jpg',
    title: '대학교수의 연구 효율성 300% 증대',
    description: '여러 논문을 동시에 분석하여 연구 속도를 크게 향상시켰습니다.',
    author: '이교수',
    role: '대학교 교수',
    avatar: '/assets/product/avatars/avatar-2.jpg',
  },
  {
    id: '3',
    image: '/assets/product/cases/case-3.jpg',
    title: '연구 기관의 팀 협업 능력 향상',
    description: '공동 논문 관리와 분석을 통해 팀 생산성을 높였습니다.',
    author: '박팀장',
    role: '연구 기관 팀장',
    avatar: '/assets/product/avatars/avatar-3.jpg',
  },
];

export function CasesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {cases.map((caseItem) => (
        <Card
          key={caseItem.id}
          hoverable
          className="overflow-hidden"
        >
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={caseItem.image}
              alt={caseItem.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-secondary-500 mb-3">
              {caseItem.title}
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              {caseItem.description}
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
              <Image
                src={caseItem.avatar}
                alt={caseItem.author}
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-neutral-900">{caseItem.author}</p>
                <p className="text-sm text-neutral-600">{caseItem.role}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

**파일**: `app/page.tsx` - Cases 섹션 수정

```typescript
import { CasesGrid } from './components/CasesGrid';

// 기존 Cases Section 대체
<section id="cases" className="w-full py-24 px-4 md:px-8 lg:px-12 bg-neutral-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-secondary-500 mb-6">
        도입 사례
      </h2>
      <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
        실제 사용자들의 경험과 성과를 확인하세요
      </p>
    </div>
    <CasesGrid />
  </div>
</section>
```

### Step 4: Pricing 섹션 개선

**파일**: `app/components/PricingCards.tsx` (새 파일)

```typescript
'use client';

import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  featured?: boolean;
  features: string[];
  cta: string;
}

const plans: PricingPlan[] = [
  {
    id: 'basic',
    name: '베이직',
    price: '$29',
    period: '월',
    description: '개인 연구자를 위한 기본 기능',
    features: [
      '월 100회 논문 분석',
      '기본 요약 및 분석',
      '검색 기능',
      '이메일 지원',
    ],
    cta: '시작하기',
  },
  {
    id: 'pro',
    name: '프로',
    price: '$79',
    period: '월',
    description: '연구팀을 위한 고급 기능',
    featured: true,
    features: [
      '무제한 논문 분석',
      '심화 분석 및 맞춤형 요약',
      '고급 검색 및 필터링',
      '팀 협업 기능',
      '우선 지원',
      'API 접근',
    ],
    cta: '지금 선택하기',
  },
  {
    id: 'enterprise',
    name: '엔터프라이즈',
    price: '맞춤',
    period: '연도',
    description: '대규모 조직을 위한 맞춤 솔루션',
    features: [
      '무제한 사용자',
      '무제한 논문 분석',
      '완전한 커스터마이징',
      '전용 계정 관리자',
      '고급 보안 기능',
      '온프레미스 배포 옵션',
    ],
    cta: '연락하기',
  },
];

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {plans.map((plan) => (
        <Card
          key={plan.id}
          hoverable={!plan.featured}
          className={`p-8 flex flex-col ${
            plan.featured ? 'ring-2 ring-primary-500 relative' : ''
          }`}
        >
          {plan.featured && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                추천 플랜
              </span>
            </div>
          )}

          <div className="mb-8 pt-4">
            <h3 className="text-2xl font-bold text-secondary-500 mb-2">
              {plan.name}
            </h3>
            <p className="text-neutral-600 text-sm mb-4">
              {plan.description}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-primary-500">
                {plan.price}
              </span>
              <span className="text-neutral-600">
                {plan.period ? `/${plan.period}` : ''}
              </span>
            </div>
          </div>

          <ul className="flex-1 space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            variant={plan.featured ? 'primary' : 'secondary'}
            size="lg"
            fullWidth
          >
            {plan.cta}
          </Button>
        </Card>
      ))}
    </div>
  );
}
```

**파일**: `app/page.tsx` - Pricing 섹션 수정

```typescript
import { PricingCards } from './components/PricingCards';

// 기존 Pricing Section 대체
<section id="pricing" className="w-full py-24 px-4 md:px-8 lg:px-12 bg-neutral-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-secondary-500 mb-6">
        합리적인 가격
      </h2>
      <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
        나에게 맞는 플랜을 선택하고 지금 시작하세요
      </p>
    </div>
    <PricingCards />
  </div>
</section>
```

### Step 5: FAQ 섹션 개선

**파일**: `app/components/FAQAccordion.tsx` (새 파일)

```typescript
'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 'q1',
    question: 'Moonlight는 어떤 논문 포맷을 지원하나요?',
    answer: 'PDF, DOC, DOCX 등 대부분의 일반 문서 형식을 지원합니다. 또한 많은 학술 데이터베이스에서 직접 가져올 수 있습니다.',
  },
  {
    id: 'q2',
    question: '무료로 사용할 수 있나요?',
    answer: '네, 기본 기능은 무료로 제한된 횟수만큼 사용 가능합니다. 더 많은 기능을 원하시면 프로 플랜으로 업그레이드 하세요.',
  },
  {
    id: 'q3',
    question: '내 논문의 기밀성은 보장되나요?',
    answer: '물론입니다. 모든 논문은 SSL 암호화로 보호되며, 우리는 절대로 당신의 데이터를 제3자와 공유하지 않습니다.',
  },
  {
    id: 'q4',
    question: '팀과 함께 사용할 수 있나요?',
    answer: '네, 프로 플랜 이상에서 팀 협업 기능을 제공합니다. 팀원을 초대하고 함께 논문을 관리할 수 있습니다.',
  },
  {
    id: 'q5',
    question: '환불이 가능한가요?',
    answer: '구독 후 30일 이내면 전액 환불을 받을 수 있습니다. 추가 질문은 support@moonlight.com으로 연락하세요.',
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between hover:text-primary-500 transition-colors"
      >
        <span className="text-lg font-semibold text-neutral-900 text-left">
          {item.question}
        </span>
        <svg
          className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6 text-neutral-600 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
```

**파일**: `app/page.tsx` - FAQ 섹션 수정

```typescript
import { FAQAccordion } from './components/FAQAccordion';

// 기존 FAQ Section 대체
<section id="faq" className="w-full py-24 px-4 md:px-8 lg:px-12 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-secondary-500 mb-6">
        자주 묻는 질문
      </h2>
      <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
        궁금하신 점을 확인하세요
      </p>
    </div>
    <FAQAccordion />
  </div>
</section>
```

---

## Phase 3: 최적화 및 완성 (1-2일)

### Step 1: 이미지 최적화

**파일**: `next.config.js` 확인/수정

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },
};

module.exports = nextConfig;
```

### Step 2: 성능 최적화

**파일**: `app/layout.tsx` 업데이트

```typescript
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['korean'],
  variable: '--font-noto-sans-kr',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Moonlight - 연구자를 위한 AI 논문 분석 도구',
  description: '논문 요약, 분석, 관리를 한 곳에서. 연구 효율성 3배 증대',
  keywords: ['논문', '분석', '요약', 'AI', '연구'],
  openGraph: {
    title: 'Moonlight',
    description: '연구자를 위한 AI 논문 분석 도구',
    url: 'https://moonlight.example.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <head>
        <meta name="theme-color" content="#8F5BB7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
```

### Step 3: 접근성 개선

모든 이미지에 alt text 추가:
```tsx
<Image
  src="/path/to/image.png"
  alt="설명적인 텍스트"
  width={600}
  height={400}
/>
```

모든 버튼과 링크에 aria-label 추가:
```tsx
<button aria-label="메뉴 열기">
  {/* 콘텐츠 */}
</button>
```

---

## Phase 4: 테스트 및 배포

### Step 1: 로컬 테스트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드 테스트
npm run build
npm run start

# 성능 분석
npm run build --analyze
```

### Step 2: 반응형 테스트

다음 해상도에서 테스트:
- 모바일: 375px, 414px
- 태블릿: 768px, 1024px
- 데스크톱: 1280px, 1920px

### Step 3: 브라우저 호환성

- Chrome (최신 2버전)
- Firefox (최신 2버전)
- Safari (최신 2버전)
- Edge (최신 2버전)

### Step 4: Core Web Vitals 확인

PageSpeed Insights 또는 웹사이트 분석 도구로 확인:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 완성된 파일 구조

```
product-info/
├── app/
│   ├── layout.tsx (수정됨)
│   ├── page.tsx (대폭 수정됨)
│   ├── globals.css (수정됨)
│   ├── components/
│   │   ├── Header.tsx (기존)
│   │   ├── FeaturesGrid.tsx (신규)
│   │   ├── CasesGrid.tsx (신규)
│   │   ├── PricingCards.tsx (신규)
│   │   └── FAQAccordion.tsx (신규)
│   └── favicon.ico
├── components/
│   ├── Button.tsx (신규)
│   └── Card.tsx (신규)
├── public/
│   └── assets/
│       └── product/
│           ├── icons/
│           ├── images/
│           ├── cases/
│           ├── avatars/
│           └── features/
├── package.json
├── tailwind.config.js (수정됨)
├── next.config.js
└── FIGMA_DESIGN_ANALYSIS.md (참고용)
└── DESIGN_SYSTEM.md (참고용)
└── IMPLEMENTATION_GUIDE.md (본 파일)
```

---

## 주요 체크리스트

### 디자인 체크
- [ ] 모든 색상이 팔레트를 따르는가?
- [ ] 타이포그래피 스케일이 일관성 있는가?
- [ ] 모든 버튼이 동일한 스타일인가?
- [ ] 섀도우 시스템이 일관성 있는가?

### 반응형 체크
- [ ] 모바일(375px)에서 정상 작동?
- [ ] 태블릿(768px)에서 정상 작동?
- [ ] 데스크톱(1280px)에서 정상 작동?
- [ ] 이미지가 반응형인가?

### 성능 체크
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] 번들 크기 < 200KB

### 접근성 체크
- [ ] 모든 이미지에 alt text?
- [ ] 색상 대비율 충분한가? (WCAG AA)
- [ ] 키보드 네비게이션 가능한가?
- [ ] 스크린 리더 호환?

---

## 트러블슈팅

### 색상이 표시되지 않는 경우
```bash
# Tailwind CSS 캐시 초기화
rm -rf .next
npm run build
```

### 이미지가 로드되지 않는 경우
- public 폴더 경로 확인
- 파일 확장자 확인 (대소문자 구분)
- next.config.js에서 이미지 설정 확인

### 타이포그래피가 적용되지 않는 경우
- 폰트 import 확인
- Tailwind config의 fontSize 설정 확인
- className 적용 확인

---

## 다음 단계

1. **모니터링**: Google Analytics 또는 다른 분석 도구 추가
2. **SEO**: Sitemap, robots.txt 추가
3. **CMS 통합**: 콘텐츠 관리 시스템 연동 (선택사항)
4. **추가 섹션**: Blog, Team, Press Kit 등 추가 페이지 개발
5. **A/B 테스트**: 전환율 최적화를 위한 A/B 테스트

---

## 참고 문서

- FIGMA_DESIGN_ANALYSIS.md - Figma 디자인 상세 분석
- DESIGN_SYSTEM.md - 디자인 시스템 구현 가이드
- Tailwind CSS 공식 문서: https://tailwindcss.com
- Next.js 공식 문서: https://nextjs.org

---

이 가이드를 따라 단계별로 진행하면 전문적인 수준의 Moonlight 웹사이트를 완성할 수 있습니다.
