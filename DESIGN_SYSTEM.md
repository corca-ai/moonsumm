# Moonlight 디자인 시스템 구현 가이드

## 개요
이 문서는 Figma 디자인을 기반으로 `product-info` 프로젝트의 일관된 디자인 시스템을 구현하기 위한 실무 가이드입니다.

---

## 1. 색상 시스템 (Color System)

### 1.1 Tailwind CSS 확장 설정

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Purple - 주요 브랜드 색상
        'primary': {
          50: '#faf5fe',
          100: '#f5ebfd',
          200: '#ead7fb',
          300: '#d9b3f5',
          400: '#c48fef',
          500: '#8F5BB7',  // Main Primary
          600: '#7a4a99',  // Hover
          700: '#603E7C',  // Dark
          800: '#482F5E',  // Darker
          900: '#302040',  // Darkest
        },

        // Secondary Purple - 보조 브랜드 색상
        'secondary': {
          400: '#744C8C',
          500: '#605070',  // Main Secondary
          600: '#505060',
          700: '#482F5E',
          800: '#3a2447',
        },

        // Neutral - 중성 색상
        'neutral': {
          0: '#ffffff',
          50: '#f8f6fa',   // Light background
          100: '#f0f0f0',  // Background
          200: '#e0e0e0',  // Border
          300: '#d0d0d0',
          500: '#999999',  // Secondary text
          600: '#696969',  // Secondary text
          700: '#555555',
          800: '#333333',  // Primary text
          900: '#181818',  // Dark text
        },

        // Status Colors
        'success': {
          500: '#10b981',
          600: '#059669',
        },
        'warning': {
          500: '#f59e0b',
          600: '#d97706',
        },
        'error': {
          500: '#ef4444',
          600: '#dc2626',
        },
        'info': {
          500: '#3b82f6',
          600: '#2563eb',
        },
      },

      // Gradient presets
      backgroundImage: {
        'gradient-features': 'radial-gradient(ellipse at center bottom, #8F5BB7 0%, #774C99 25%, #603E7C 50%, #482F5E 75%, #302040 100%)',
        'gradient-hero': 'linear-gradient(to bottom, #f8f6fa, #ffffff)',
        'gradient-card': 'linear-gradient(135deg, #faf5fe 0%, #ffffff 100%)',
      },

      // Shadow system
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 24px 0 rgba(0, 0, 0, 0.1)',
        'xl': '0 15px 37.5px 0 rgba(0, 0, 0, 0.1)',
        'card': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 24px 0 rgba(143, 91, 183, 0.15)',
      },

      // Border radius system
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },

      // Spacing
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
```

### 1.2 CSS 변수 방식 (대체 방법)

```css
/* globals.css */
:root {
  /* Primary Colors */
  --color-primary: #8F5BB7;
  --color-primary-hover: #7a4a99;
  --color-primary-dark: #603E7C;
  --color-primary-darker: #482F5E;
  --color-primary-darkest: #302040;

  /* Secondary Colors */
  --color-secondary: #605070;
  --color-secondary-light: #744C8C;
  --color-secondary-dark: #482F5E;

  /* Neutral Colors */
  --color-text-primary: #181818;
  --color-text-secondary: #696969;
  --color-text-tertiary: #999999;
  --color-bg-white: #ffffff;
  --color-bg-light: #f8f6fa;
  --color-bg-gray: #f0f0f0;
  --color-border: #e0e0e0;

  /* Gradients */
  --gradient-features: radial-gradient(ellipse at center bottom, #8F5BB7 0%, #774C99 25%, #603E7C 50%, #482F5E 75%, #302040 100%);
  --gradient-hero: linear-gradient(to bottom, #f8f6fa, #ffffff);

  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 15px 37.5px rgba(0, 0, 0, 0.1);
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.05);

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* Font */
  --font-sans: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Courier New', monospace;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: #ededed;
    --color-bg-white: #0a0a0a;
    --color-bg-light: #1a1a2e;
    --color-border: #333333;
  }
}
```

---

## 2. 타이포그래피 시스템 (Typography System)

### 2.1 폰트 설정

```typescript
// lib/fonts.ts
import { Noto_Sans_KR, Pretendard } from 'next/font/google';

export const notoSansKr = Noto_Sans_KR({
  subsets: ['korean'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
  preload: true,
});

export const pretendard = Pretendard({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-pretendard',
});

// layout.tsx 또는 _app.tsx에서 사용
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${pretendard.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

### 2.2 타이포그래피 스케일 (Tailwind)

```javascript
// tailwind.config.js - theme.fontSize 확장
theme: {
  extend: {
    fontSize: {
      // Headings
      'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
      'h1-md': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
      'h1-sm': ['32px', { lineHeight: '1.2', fontWeight: '700' }],

      'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
      'h2-md': ['28px', { lineHeight: '1.3', fontWeight: '700' }],
      'h2-sm': ['24px', { lineHeight: '1.3', fontWeight: '700' }],

      'h3': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
      'h3-md': ['20px', { lineHeight: '1.4', fontWeight: '700' }],
      'h3-sm': ['18px', { lineHeight: '1.4', fontWeight: '700' }],

      // Body
      'body-lg': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
      'body-base': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
      'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      'body-xs': ['12px', { lineHeight: '1.5', fontWeight: '400' }],

      // Labels
      'label': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
    },

    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    lineHeight: {
      tight: '1.2',
      snug: '1.3',
      normal: '1.4',
      relaxed: '1.6',
      loose: '1.8',
    },

    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
    },
  },
}
```

### 2.3 타이포그래피 컴포넌트

```typescript
// components/Typography/index.tsx

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  size?: 'lg' | 'md' | 'sm';
  weight?: 'bold' | 'extrabold' | 'black';
  color?: string;
  children: React.ReactNode;
}

export function Heading({
  level = 1,
  size,
  weight = 'bold',
  color = 'text-secondary-500',
  className = '',
  children,
  ...props
}: HeadingProps) {
  const Element = `h${level}` as const;

  const sizeClasses = {
    1: size === 'sm' ? 'text-h1-sm' : size === 'md' ? 'text-h1-md' : 'text-h1',
    2: size === 'sm' ? 'text-h2-sm' : size === 'md' ? 'text-h2-md' : 'text-h2',
    3: size === 'sm' ? 'text-h3-sm' : size === 'md' ? 'text-h3-md' : 'text-h3',
  };

  const fontWeightClass = {
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  };

  return (
    <Element
      className={`${sizeClasses[level]} ${fontWeightClass[weight]} ${color} ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'lg' | 'base' | 'sm' | 'xs';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: string;
  children: React.ReactNode;
}

export function Text({
  size = 'base',
  weight = 'normal',
  color = 'text-neutral-800',
  className = '',
  children,
  ...props
}: TextProps) {
  const sizeClasses = {
    lg: 'text-body-lg',
    base: 'text-body-base',
    sm: 'text-body-sm',
    xs: 'text-body-xs',
  };

  const fontWeightClass = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <p
      className={`${sizeClasses[size]} ${fontWeightClass[weight]} ${color} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  color?: string;
  children: React.ReactNode;
}

export function Label({
  required = false,
  color = 'text-neutral-800',
  className = '',
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={`text-label font-medium ${color} ${className}`}
      {...props}
    >
      {children}
      {required && <span className="text-error-500 ml-1">*</span>}
    </label>
  );
}
```

### 2.4 사용 예시

```tsx
// 페이지에서의 사용
<Heading level={1} size="lg" color="text-secondary-500">
  Moonlight
</Heading>

<Heading level={2} size="md" color="text-secondary-500" className="mt-8">
  제품 소개
</Heading>

<Text size="lg" weight="normal" color="text-neutral-600">
  연구자를 위한 AI 논문 분석 도구
</Text>
```

---

## 3. 컴포넌트 라이브러리

### 3.1 Button 컴포넌트

```typescript
// components/Button/Button.tsx
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  fullWidth = false,
  disabled = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-md transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-200 disabled:bg-primary-300 disabled:cursor-not-allowed',
    secondary: 'bg-neutral-100 text-primary-500 hover:bg-neutral-200 border border-neutral-200 focus:ring-neutral-200 disabled:bg-neutral-50 disabled:cursor-not-allowed',
    ghost: 'bg-transparent text-primary-500 hover:bg-primary-50 focus:ring-primary-200 disabled:text-neutral-400 disabled:cursor-not-allowed',
    danger: 'bg-error-500 text-white hover:bg-error-600 focus:ring-error-200 disabled:bg-error-300 disabled:cursor-not-allowed',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-2.5 text-base gap-2',
    lg: 'px-8 py-3 text-lg gap-2.5',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-60 cursor-not-allowed' : '';

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="animate-spin">⏳</span>
          처리 중...
        </>
      ) : (
        <>
          {icon && icon}
          {children}
        </>
      )}
    </button>
  );
}
```

### 3.2 Card 컴포넌트

```typescript
// components/Card/Card.tsx
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'ghost';
  hoverable?: boolean;
  children: React.ReactNode;
}

export function Card({
  variant = 'default',
  hoverable = false,
  className = '',
  children,
  ...props
}: CardProps) {
  const baseClasses = 'rounded-lg transition-all duration-300';

  const variantClasses = {
    default: 'bg-white border border-neutral-200 shadow-card',
    elevated: 'bg-white shadow-lg',
    ghost: 'bg-neutral-50 border border-neutral-100',
  };

  const hoverClasses = hoverable
    ? 'hover:shadow-lg hover:border-primary-200 hover:-translate-y-1'
    : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardHeader({ className = '', children, ...props }: CardHeaderProps) {
  return (
    <div className={`p-6 border-b border-neutral-100 ${className}`} {...props}>
      {children}
    </div>
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardContent({ className = '', children, ...props }: CardContentProps) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardFooter({ className = '', children, ...props }: CardFooterProps) {
  return (
    <div className={`p-6 border-t border-neutral-100 flex gap-3 justify-end ${className}`} {...props}>
      {children}
    </div>
  );
}
```

### 3.3 Section 컴포넌트

```typescript
// components/Section/Section.tsx
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'gradient' | 'white';
  padding?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Section({
  variant = 'white',
  padding = 'lg',
  className = '',
  children,
  ...props
}: SectionProps) {
  const variantClasses = {
    light: 'bg-neutral-50',
    dark: 'bg-secondary-700 text-white',
    gradient: 'bg-gradient-features',
    white: 'bg-white',
  };

  const paddingClasses = {
    sm: 'py-8 px-4 md:py-12 md:px-6 lg:px-8',
    md: 'py-16 px-4 md:py-20 md:px-6 lg:px-8',
    lg: 'py-24 px-4 md:py-32 md:px-6 lg:px-8',
  };

  return (
    <section
      className={`w-full ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
```

### 3.4 Grid 컴포넌트

```typescript
// components/Grid/Grid.tsx
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export function Grid({
  columns = { base: 1, md: 2, lg: 3 },
  gap = 'md',
  className = '',
  children,
  ...props
}: GridProps) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  const gridCols = `grid-cols-1 ${columns.sm ? 'sm:grid-cols-' + columns.sm : ''} ${
    columns.md ? 'md:grid-cols-' + columns.md : ''
  } ${columns.lg ? 'lg:grid-cols-' + columns.lg : ''} ${
    columns.xl ? 'xl:grid-cols-' + columns.xl : ''
  }`;

  return (
    <div
      className={`grid ${gridCols} ${gapClasses[gap]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
```

---

## 4. 인터랙션 및 애니메이션

### 4.1 Tailwind 애니메이션 확장

```javascript
// tailwind.config.js
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.3s ease-in-out',
      'fade-in-up': 'fadeInUp 0.5s ease-out',
      'slide-in-right': 'slideInRight 0.3s ease-out',
      'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      'bounce-subtle': 'bounceSubtle 1s ease-in-out infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeInUp: {
        '0%': {
          opacity: '0',
          transform: 'translateY(16px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      slideInRight: {
        '0%': {
          opacity: '0',
          transform: 'translateX(16px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      pulseSoft: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      },
      bounceSubtle: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-4px)' },
      },
    },
    transition: {
      DEFAULT: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fast: 'all 0.15s ease-in-out',
      base: 'all 0.3s ease-in-out',
      slow: 'all 0.5s ease-in-out',
    },
  },
}
```

### 4.2 호버 및 포커스 스타일

```css
/* globals.css */
/* 버튼 호버 효과 */
button {
  @apply transition-all duration-300;
}

button:not(:disabled):hover {
  @apply -translate-y-0.5 shadow-lg;
}

button:not(:disabled):active {
  @apply translate-y-0 shadow-md;
}

/* 링크 호버 효과 */
a {
  @apply transition-colors duration-200;
}

a:hover {
  @apply text-primary-500;
}

/* 카드 호버 효과 */
.card-hover {
  @apply transition-all duration-300;
}

.card-hover:hover {
  @apply shadow-lg -translate-y-1;
}

/* 입력 필드 포커스 */
input:focus,
textarea:focus {
  @apply outline-none ring-2 ring-primary-300;
}
```

### 4.3 Scroll 애니메이션

```typescript
// hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number | number[];
  rootMargin?: string;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
}: UseIntersectionObserverProps = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

// 사용 예시
export function AnimatedCard() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* 내용 */}
    </div>
  );
}
```

---

## 5. 반응형 유틸리티

### 5.1 반응형 헬퍼 함수

```typescript
// hooks/useMediaQuery.ts
import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// 사용 예시
export function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  if (isMobile) {
    return <MobileView />;
  }

  if (isTablet) {
    return <TabletView />;
  }

  return <DesktopView />;
}
```

### 5.2 반응형 클래스 유틸리티

```typescript
// utils/responsive.ts
export const responsiveClasses = {
  // 패딩
  sectionPadding: 'px-4 py-8 md:px-6 md:py-16 lg:px-8 lg:py-24',
  cardPadding: 'p-4 md:p-6 lg:p-8',

  // 마진
  sectionMargin: 'my-8 md:my-16 lg:my-24',

  // 폰트 크기
  heroTitle: 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
  sectionTitle: 'text-2xl md:text-3xl lg:text-4xl',

  // 그리드
  gridCols: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  gridColsTwo: 'grid grid-cols-1 md:grid-cols-2',

  // 최대 너비
  container: 'max-w-6xl mx-auto',
  containerLg: 'max-w-7xl mx-auto',
  containerSm: 'max-w-4xl mx-auto',
};
```

---

## 6. 구현 체크리스트

### 6.1 색상 시스템 체크
- [ ] Tailwind config에 모든 색상 정의됨
- [ ] CSS 변수 설정 완료
- [ ] 다크 모드 색상 정의됨
- [ ] 그라데이션 프리셋 설정됨

### 6.2 타이포그래피 체크
- [ ] 폰트 import 설정됨
- [ ] 타이포그래피 스케일 정의됨
- [ ] 모든 제목에 H1-H3 태그 사용
- [ ] 텍스트 컴포넌트 생성됨

### 6.3 컴포넌트 라이브러리 체크
- [ ] Button 컴포넌트 (모든 variant)
- [ ] Card 컴포넌트 (3개 구성)
- [ ] Section 컴포넌트
- [ ] Grid 컴포넌트
- [ ] Form 컴포넌트들

### 6.4 애니메이션 체크
- [ ] Fade-in 애니메이션
- [ ] Scroll 애니메이션
- [ ] 호버 효과
- [ ] 트랜지션 시간 일관성

### 6.5 반응형 체크
- [ ] 모든 섹션이 모바일 최적화
- [ ] 데스크톱 layout 자연스러움
- [ ] 이미지 반응형 처리
- [ ] 폰트 크기 반응형

---

## 7. 파일 구조 추천

```
product-info/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Cases.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   └── styles/
│       └── animations.css
│
├── components/
│   ├── Button/
│   │   └── Button.tsx
│   ├── Card/
│   │   └── Card.tsx
│   ├── Section/
│   │   └── Section.tsx
│   ├── Grid/
│   │   └── Grid.tsx
│   ├── Typography/
│   │   └── index.tsx
│   └── Form/
│       ├── Input.tsx
│       ├── Textarea.tsx
│       ├── Select.tsx
│       └── Checkbox.tsx
│
├── hooks/
│   ├── useMediaQuery.ts
│   └── useIntersectionObserver.ts
│
├── utils/
│   ├── responsive.ts
│   ├── cn.ts (classname merge utility)
│   └── constants.ts
│
├── lib/
│   └── fonts.ts
│
├── public/
│   └── assets/
│       ├── product/
│       │   ├── icons/
│       │   ├── images/
│       │   ├── features/
│       │   └── hero/
│       └── logo/
│
└── tailwind.config.js
```

---

## 8. 성능 최적화 팁

### 8.1 이미지 최적화
```tsx
import Image from 'next/image';

// 올바른 사용
<Image
  src="/path/to/image.png"
  alt="Description"
  width={1200}
  height={600}
  priority={false}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 8.2 코드 분할 (Code Splitting)
```tsx
import dynamic from 'next/dynamic';

const FAQ = dynamic(() => import('./FAQ'), {
  loading: () => <div>로딩중...</div>,
});
```

### 8.3 메모이제이션
```tsx
import { memo } from 'react';

const FeatureCard = memo(function FeatureCard({ title, description }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
});
```

---

## 결론

이 디자인 시스템은 다음을 제공합니다:
1. **일관성**: 모든 프로젝트 요소에서 일관된 디자인
2. **확장성**: 새로운 컴포넌트 추가가 용이
3. **유지보수**: 한 곳에서 디자인 변경으로 전체 반영
4. **성능**: 최적화된 컴포넌트와 스타일링
5. **접근성**: WCAG 기준 준수

지속적인 개선과 팀 피드백을 통해 시스템을 발전시켜 나가세요.
