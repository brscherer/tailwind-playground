# Tailwind CSS - Theme Variables

This project demonstrates **Theme Customization** and extending Tailwind's design system with custom variables.

## What are Theme Variables?

Theme variables allow you to customize Tailwind CSS to match your brand and design system. Using the `extend` configuration, you can add custom colors, spacing, typography, and more while preserving Tailwind's defaults.

## Key Concepts

### 1. **Extend vs Override**

#### Extend (Recommended)
```javascript
// Add custom values while keeping defaults
theme: {
  extend: {
    colors: { brand: {...} }
  }
}
```

#### Override
```javascript
// Replace defaults (not recommended)
theme: {
  colors: { brand: {...} }
}
```

## Custom Theme Values

This project demonstrates:

### Custom Colors
- **Brand Color Scale** - 10-shade palette (50-900)
- **Accent Colors** - Lightweight shorthand format

```javascript
colors: {
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... through 900
  },
  accent: {
    light: '#fbbf24',
    DEFAULT: '#f59e0b',
    dark: '#d97706',
  }
}
```

### Spacing
Extend the default spacing scale with custom values:

```javascript
spacing: {
  '13': '3.25rem',   // 52px
  '15': '3.75rem',   // 60px
  '128': '32rem',    // 512px
  '144': '36rem',    // 576px
}
```

Usage:
```html
<div class="w-13 h-13">Square 13</div>
<div class="p-15">Padding 15</div>
<div class="max-w-128">Max width 128</div>
```

### Font Sizes
Define custom font sizes with matching line heights:

```javascript
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  // ...
}
```

### Border Radius
Create a consistent curve style:

```javascript
borderRadius: {
  'none': '0',
  'sm': '0.25rem',
  'base': '0.375rem',
  'md': '0.5rem',
  'lg': '0.75rem',
  'xl': '1rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  'full': '9999px',
}
```

### Shadows
Add custom shadow depths for visual hierarchy:

```javascript
boxShadow: {
  'none': 'none',
  'sm': '0 1px 2px...',
  'base': '0 1px 3px...',
  'md': '0 4px 6px...',
  'lg': '0 10px 15px...',
  'xl': '0 20px 25px...',
  'premium': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
}
```

### Animations & Keyframes
Define custom animations:

```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in',
  'slide-up': 'slideUp 0.5s ease-out',
  'pulse-slow': 'pulse 3s cubic-bezier(...) infinite',
},
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { transform: 'translateY(10px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
}
```

## Configuration Structure

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Add custom values here
      colors: { /* ... */ },
      spacing: { /* ... */ },
      fontSize: { /* ... */ },
      borderRadius: { /* ... */ },
      boxShadow: { /* ... */ },
      animation: { /* ... */ },
      keyframes: { /* ... */ },
    },
  },
  plugins: [],
}
```

## Usage Examples

### Using Custom Colors
```html
<!-- Brand colors -->
<button class="bg-brand-500 hover:bg-brand-600 text-white">
  Brand Button
</button>

<!-- Accent colors -->
<div class="bg-accent-light text-accent-dark">
  Accent Background
</div>
```

### Using Custom Spacing
```html
<!-- Custom spacing values -->
<div class="p-13 w-15 gap-128">
  Custom Spacing
</div>
```

### Using Custom Typography
```html
<!-- Custom font sizes with line heights -->
<h1 class="text-3xl">Heading</h1>
<p class="text-base">Body text</p>
<span class="text-xs">Small text</span>
```

### Using Custom Border Radius
```html
<div class="rounded-2xl">Box</div>
<button class="rounded-full">Circular button</button>
```

### Using Custom Shadows
```html
<div class="shadow-base">Card</div>
<div class="shadow-premium">Premium card</div>
```

### Using Custom Animations
```html
<div class="animate-fade-in">Fades in</div>
<div class="animate-slide-up">Slides up</div>
<div class="animate-pulse-slow">Pulses slowly</div>
```

## Component Consistency

Theme variables enable consistent component design across your application:

```html
<!-- Every button uses the same brand color -->
<button class="bg-brand-500 hover:bg-brand-600 rounded-xl shadow-lg">
  Consistent Button
</button>

<!-- Cards use the same spacing and shadow -->
<div class="p-13 rounded-lg shadow-base border border-gray-200">
  Consistent Card
</div>

<!-- Typography follows the same scale -->
<h1 class="text-3xl font-bold">Heading</h1>
<p class="text-base text-gray-600">Description</p>
```

## Best Practices

### 1. Use `extend` Not Override
```javascript
// ✅ Good: Adds to defaults
theme: {
  extend: {
    colors: { brand: {...} }
  }
}

// ❌ Avoid: Removes all defaults
theme: {
  colors: { brand: {...} }
}
```

### 2. Create Color Scales
```javascript
// ✅ Good: Complete scale (50-900)
brand: {
  50: '#...',  // lightest
  100: '#...',
  200: '#...',
  300: '#...',
  400: '#...',
  500: '#...',  // primary
  600: '#...',
  700: '#...',
  800: '#...',
  900: '#...',  // darkest
}
```

### 3. Use Semantic Names
```javascript
// ✅ Good: Descriptive names
colors: {
  primary: '#0ea5e9',
  success: '#10b981',
  error: '#ef4444',
}

// ❌ Avoid: Color-based names
colors: {
  blue: '#0ea5e9',
  green: '#10b981',
  red: '#ef4444',
}
```

### 4. Document Custom Values
Keep a reference of all custom theme values for your team.

### 5. Minimal Customization
Only add custom values you actually need. Don't over-customize.

## Common Customizations Checklist

- [ ] Brand/Primary colors
- [ ] Secondary/Accent colors
- [ ] Font sizes and families
- [ ] Spacing scale extensions
- [ ] Border radius consistency
- [ ] Shadow depths
- [ ] Custom animations
- [ ] Dark mode colors (if using dark mode)

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open your browser to `http://localhost:5177`

4. Explore the custom theme values used throughout the project

5. Modify `tailwind.config.js` to experiment with your own values

6. Build for production:
   ```bash
   pnpm build
   ```

## Learning Resources

- [Tailwind CSS Theme Configuration](https://tailwindcss.com/docs/theme)
- [Extending the Default Theme](https://tailwindcss.com/docs/theme#extending-the-default-theme)
- [Color Palette Design](https://www.smashingmagazine.com/2016/04/web-design-color-scheme/)
- [Design System Documentation](https://design.systems/)

## Tips

- Use tools like [Tailwind UI](https://tailwindui.com/) for inspiration
- Test your custom colors against WCAG contrast guidelines
- Create a style guide documenting all custom theme values
- Use CSS variables if you need more dynamic theming
