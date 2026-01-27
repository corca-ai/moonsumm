# Moontest - Research Paper Analysis Platform (Moonlight)

A Next.js application for research paper analysis and knowledge exploration with dual interfaces: marketing pages and lab interface.

## Architecture Overview

**Routing Structure**:
- `/` - Empty root (returns null - redirects handled elsewhere)
- `/moonlab` - Main lab interface with ProfileMenu
- `/product` - Marketing website with scroll-based sections

**Component Organization**:
- `app/components/` - Shared components (ProfileMenu, LabSettingsModal)
- `app/moonlab/` - Lab interface pages
- `app/product/` - Marketing pages (Header, Features)

**Asset Structure**:
```
public/assets/
├── product/
│   ├── common/     # Shared assets
│   ├── features/   # Feature section assets
│   ├── hero/       # Hero section assets
│   └── icons/      # UI icons
└── [root assets]   # Profile, lab icons
```

## Development Server

**Custom Port Configuration**:
```bash
npm run dev  # Runs on localhost:3002 (not 3000)
```

Configured in package.json: `"dev": "next dev -p 3002"`

## Component Patterns

### ProfileMenu Component
Located: `app/components/ProfileMenu.tsx`

**Key Features**:
- Toggle-based dropdown menu
- Modal integration for Lab Settings
- Badge system for active lab features
- Backdrop click-to-close pattern

**State Management**:
```tsx
const [isOpen, setIsOpen] = useState(true);  // Menu starts open
const [isLabModalOpen, setIsLabModalOpen] = useState(false);
const [labActiveCount, setLabActiveCount] = useState(0);
```

**Positioning Pattern**:
```tsx
{/* Profile Button */}
<button className="bg-[#a69db1] rounded-full w-[40px] h-[40px]">

{/* Backdrop */}
<div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

{/* Menu */}
<div className="absolute right-0 top-[30px] z-50">
```

### Modal Pattern
Shared between ProfileMenu and LabSettingsModal:
- Fixed positioning with backdrop
- z-index layering (backdrop z-40, content z-50)
- Click outside to close
- State lifted to parent component

## Product Pages Architecture

### Scroll-Based Sections
`app/product/page.tsx` uses anchor-based navigation:
```tsx
<section id="home" className="min-h-screen">
<section id="product" className="min-h-screen">
<section id="features">
<section id="cases" className="min-h-screen">
<section id="pricing" className="min-h-screen bg-[#f8f6fa]">
<section id="faq" className="min-h-screen">
```

### Header Component
Fixed header with scroll navigation:
- `position: fixed` with `top-0`
- `pt-[68px]` padding on main content to compensate
- Navigation links scroll to section IDs

## Design System

### Color Palette
Defined across components:
- Primary Purple: `#605070` (headings, branding)
- Secondary Purple: `#a69db1` (buttons, accents)
- Text Grays: `#696969`, `#787ea1`, `#292929`
- Neutral Gray: `#d4d4d8` (dividers)
- Backgrounds: `#f8f6fa` (light purple tint), `#f9f9fb` (input fields)

### Typography Scale
```tsx
text-[48px]  // Hero headings
text-[36px]  // Section headings
text-[20px]  // Hero subheadings
text-[18px]  // Section subheadings
text-[16px]  // Input placeholders
text-[14px]  // Example cards
text-[13px]  // Menu items
text-[12px]  // Secondary menu text
```

### Spacing Patterns
- Container gaps: `gap-[10px]`, `gap-[30px]`
- Padding: `px-[15px] py-[20px]` (menu items)
- Border radius: `rounded-[10px]` (cards), `rounded-[30px]` (search box)

## Image Handling

**Icon System**:
All icons in `/public/assets/` with explicit dimensions:
```tsx
<Image src="/assets/icon-lab.svg" alt="Lab" width={16} height={16} />
<Image src="/assets/profile-icon.svg" alt="Profile" width={16} height={18} />
```

**Profile Icons**: Nested in colored circles
```tsx
<div className="bg-[#a69db1] rounded-full w-[40px] h-[40px]">
  <Image src="/assets/profile-icon.svg" width={16} height={18} />
</div>
```

## Layout Patterns

### Centered Content
```tsx
<div className="min-h-screen flex items-center justify-center">
  <div className="text-center">
```

### Fixed Positioning with Absolute Child
```tsx
<div className="relative">  // Parent (ProfileMenu button)
  <div className="absolute right-0 top-[30px]">  // Child (menu)
```

### Responsive Containers
```tsx
<div className="w-full max-w-[1280px]">
<div className="w-full md:w-[250px]">  // Mobile full-width, desktop fixed
```

## Korean Language Context

**UI Text**: All user-facing text in Korean
- Menu items: "내 계정", "화면 설정", "실험실"
- Marketing copy: "연구자를 위한 AI 논문 분석 도구"
- Placeholders: "논문, 저자, 개념에 대해 물어보세요"

**Example Queries** (Korean research topics):
- Fusion reactor designs (ITER, SPARC)
- Plasma confinement in tokamak reactors
- Oxide TFT backplane technology for displays

## Component Communication

**Parent → Child Props**:
```tsx
<LabSettingsModal
  isOpen={isLabModalOpen}
  onClose={() => setIsLabModalOpen(false)}
  onCountChange={setLabActiveCount}
/>
```

**Callback Pattern**:
- Modal triggers `onClose()` to update parent state
- `onCountChange()` updates badge count on ProfileMenu

## Styling Conventions

**Hover Transitions**:
```tsx
className="hover:opacity-90 transition-opacity"
className="hover:bg-[#ffffee] transition-colors"
```

**Shadow System**:
```tsx
shadow-sm              // Cards
shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]  // Dropdown menus
```

**Border Patterns**:
```tsx
border border-dashed border-[#808090]  // Example cards
border-2 border-[#787ea1]              // Search box
```

## Common Tasks

**Adding Menu Items**:
1. Create icon in `/public/assets/`
2. Add `<MenuItem>` in ProfileMenu.tsx menu group
3. Use consistent sizing: `width={16} height={16}`

**Adding Product Sections**:
1. Add section with unique `id` in product/page.tsx
2. Update Header.tsx navigation links
3. Use `min-h-screen` for full-screen sections

**Modifying Lab Features**:
Update LabSettingsModal.tsx switches and sync count with ProfileMenu badge
