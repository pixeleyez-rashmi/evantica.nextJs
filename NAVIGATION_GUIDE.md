# Navigation Styles Guide

This guide explains how to use different navbar components on different pages.

## Overview

The application supports multiple navbar styles, each with unique design and features:
- **Business**: Standard business navbar with search and social links
- **Education**: Education-focused navbar with yellow accent
- **Event**: Event navbar with yellow accent and special container design
- **Freelancer**: Glassmorphism navbar with purple accent
- **Medical**: Teal background navbar with dark blue accents
- **Music**: Centered logo layout with cyan accent
- **Tech**: Offset background effect with purple accent

## How It Works

The `NavigationWrapper` component automatically selects the appropriate navbar component based on the current route using a configuration object.

## Configuration

Edit `src/components/Layouts/Navbar/NavigationWrapper.tsx` to configure which pages use which navbar:

```typescript
const navigationConfig: Record<string, 'business' | 'education' | 'event' | 'freelancer' | 'medical' | 'music' | 'tech'> = {
    '/': 'business',                    // Home page uses Business navbar
    '/home-freelancer': 'freelancer',  // Freelancer page uses Freelancer navbar
    '/home-tech': 'tech',               // Tech page uses Tech navbar
    '/home-education': 'education',     // Education page uses Education navbar
    '/home-medical': 'medical',          // Medical page uses Medical navbar
    '/home-music': 'music',             // Music page uses Music navbar
    '/home-event': 'event',              // Event page uses Event navbar
    // Add more routes as needed
};
```

## Adding New Routes

To add a new route with a specific navbar:

1. Open `src/components/Layouts/Navbar/NavigationWrapper.tsx`
2. Add your route to the `navigationConfig` object:

```typescript
const navigationConfig: Record<string, 'business' | 'education' | 'event' | 'freelancer' | 'medical' | 'music' | 'tech'> = {
    // ... existing routes
    '/your-new-route': 'education',  // Choose from: business, education, event, freelancer, medical, music, tech
};
```

## Default Behavior

If a route is not specified in the configuration, it defaults to **Business** navbar.

## Alternative: Route Groups with Different Layouts

If you need more control, you can use Next.js route groups to create separate layouts:

### Option 1: Route Groups

Create different layouts for different navigation styles:

```
src/app/
├── (light-nav)/
│   ├── layout.tsx          # Uses Style-1 Navigation
│   └── home-campus/
│       └── page.tsx
└── (dark-nav)/
    ├── layout.tsx          # Uses Style-2 Navigation
    └── home-language/
        └── page.tsx
```

### Option 2: Nested Layouts

Create nested layouts for specific routes:

```
src/app/
├── layout.tsx              # Root layout (no navigation)
└── (Home)/
    ├── layout.tsx          # Uses NavigationWrapper
    └── home-campus/
        └── page.tsx
```

## Manual Override

If you need to manually specify navigation on a specific page, you can:

1. Create a custom layout for that route group
2. Import and use the specific navigation component directly

Example:

```typescript
// src/app/(dark-pages)/layout.tsx
import NavigationStyle2 from '../../components/Layouts/Topbar/Style-2/Navigation';

export default function DarkLayout({ children }) {
  return (
    <>
      <NavigationStyle2 />
      {children}
    </>
  );
}
```

## Available Navbar Components

All navbar components are located in `src/components/Layouts/Navbar/`:
- `Business/` - Standard business navbar
- `Education/` - Education navbar with yellow accent
- `Event/` - Event navbar with special container design
- `Freelancer/` - Glassmorphism navbar
- `Medical/` - Medical navbar with teal background
- `Music/` - Music navbar with centered logo
- `Tech/` - Tech navbar with offset background effect

## Current Configuration

Default route mappings:
- `/` → Business navbar
- `/home-freelancer` → Freelancer navbar
- `/home-tech` → Tech navbar
- `/home-education` → Education navbar
- `/home-medical` → Medical navbar
- `/home-music` → Music navbar
- `/home-event` → Event navbar

You can customize these mappings in `NavigationWrapper.tsx` to match your routing structure.

