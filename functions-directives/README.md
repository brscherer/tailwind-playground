# Functions & Directives in Tailwind CSS

This proof-of-concept demonstrates the advanced functions and directives that unlock the full power of Tailwind CSS. These tools allow you to extend Tailwind beyond utilities and create sophisticated, maintainable stylesheets.

## 🎯 What You'll Learn

- **Core directives** (@tailwind, @layer, @apply, @supports)
- **The theme() function** - Access configuration values in custom CSS
- **CSS @-rules** (@media, @keyframes, @import, @font-face)
- **CSS Variables integration** - Dynamic theming with Tailwind
- **Progressive enhancement** - Support for all browsers
- **Practical patterns** - Real-world examples and best practices

## 📚 Core Concepts

### Tailwind Directives

Tailwind provides several directives that process your CSS at build time:

#### @tailwind
Injects Tailwind's CSS output into your stylesheet. Must be placed at the top of your main CSS file:

```css
@tailwind base;      /* Resets and base styles */
@tailwind components; /* Custom component classes */
@tailwind utilities;  /* Utility classes (largest) */
```

These three lines are replaced with actual CSS during the build process.

#### @layer
Organizes CSS into cascade layers (base → components → utilities). This controls specificity and override behavior:

```css
@layer components {
  .btn-custom {
    @apply px-4 py-2 bg-blue-600 text-white rounded;
  }
}

@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
}
```

**Cascade order (lowest to highest specificity):**
1. Base (lowest)
2. Components
3. Utilities (highest)

#### @apply
Mix utility classes into your custom CSS. Reduces class bloat in HTML:

```css
/* Instead of: class="px-6 py-3 bg-blue-600 text-white rounded" */
.btn-primary {
  @apply px-6 py-3 bg-blue-600 text-white rounded;
  @apply hover:bg-blue-700 active:bg-blue-800 transition-colors;
}
```

### The theme() Function

Access your Tailwind config values directly in CSS:

```css
.header {
  background-color: theme('colors.blue.600');
  padding: theme('spacing.8');
  font-size: theme('fontSize.lg');
  border-radius: theme('borderRadius.md');
}
```

**Common paths:**
- `theme('colors.*')` - Any color from your palette
- `theme('spacing.*')` - Spacing/sizing values
- `theme('fontSize.*')` - Font sizes
- `theme('borderRadius.*')` - Border radius values
- `theme('screens.*')` - Breakpoint values

**Benefits:**
- Keeps custom CSS in sync with config changes
- Single source of truth for design tokens
- Enables config-driven theming

### CSS Variables + theme()

Combine for ultimate flexibility:

```css
:root {
  --color-primary: theme('colors.indigo.600');
  --color-text: theme('colors.gray.900');
  --spacing-base: theme('spacing.4');
}

/* Use in HTML */
<div style="background-color: var(--color-primary)">...</div>
```

This allows runtime color switching while maintaining config consistency.

### Advanced CSS @-Rules

#### @media
Media queries for responsive and preference-based styling:

```css
/* Responsive */
@media (max-width: theme('screens.md')) {
  .sidebar { display: none; }
}

/* User preferences */
@media (prefers-dark-interface) {
  body { background: #1f2937; color: #f3f4f6; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

#### @keyframes
Define custom animations:

```css
@keyframes gradient-shift {
  0% { background-position: 0% center; }
  50% { background-position: 100% center; }
  100% { background-position: 0% center; }
}

.animated { animation: gradient-shift 15s ease infinite; }
```

#### @supports
Feature detection for progressive enhancement:

```css
/* Fallback for all browsers */
.layout { display: flex; }

/* Modern CSS Grid support */
@supports (display: grid) {
  .layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
```

#### @import
Load external resources (fonts, stylesheets):

```css
@import url('https://fonts.googleapis.com/css2?family=Inter');

@layer base {
  body { font-family: 'Inter', sans-serif; }
}
```

#### @font-face
Define custom fonts from files:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-weight: 400;
}

@layer base {
  body { font-family: 'CustomFont', sans-serif; }
}
```

## 🎓 Examples in This Project

### Using theme() for Component Styling
```css
@layer components {
  .notification {
    border-left: 4px solid theme('colors.blue.600');
    background-color: theme('colors.blue.50');
    padding: theme('spacing.4');
    border-radius: theme('borderRadius.md');
  }
}
```

### CSS Variables for Theming
```css
@layer base {
  :root {
    --color-brand: theme('colors.indigo.600');
    --color-brand-light: theme('colors.indigo.100');
    --spacing-base: theme('spacing.4');
  }
}
```

### Animations with @keyframes
```css
@keyframes slide-in {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.hero { animation: slide-in 0.6s ease-out; }
```

### Accessibility with @media
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Progressive Enhancement with @supports
```css
@supports (display: grid) {
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: theme('spacing.4');
  }
}
```

## 📊 When to Use What

| Situation | Solution |
|-----------|----------|
| Styling simple elements | Use Tailwind utilities directly |
| Reusable component pattern | Use @apply in @layer components |
| Color from config in custom CSS | Use theme('colors.*') |
| Dynamic theming at runtime | Use CSS variables with theme() |
| Complex animations | Use @keyframes |
| Responsive styling | Use responsive prefixes OR @media queries |
| Progressive enhancement | Use @supports |
| Custom fonts | Use @font-face in @layer base |
| Respect user preferences | Use @media (prefers-*) |

## 🚀 Best Practices

**DO:**
- Use theme() to reference config values
- Use @layer to organize custom CSS
- Use @apply sparingly (prefer utilities 90% of the time)
- Use @supports for progressive enhancement
- Use @media (prefers-*) for accessibility
- Keep CSS variables for truly dynamic values
- Structure: base → components → utilities

**DON'T:**
- Use @apply with !important
- Hardcode values instead of using theme()
- Over-nest @media queries
- Use @supports for browser detection
- Create too many CSS variables (use config instead)
- Ignore accessibility preferences
- Forget to close @media/@keyframes blocks

## 🔧 Layer Priority

The @layer directive controls CSS specificity:

```
Specificity (low to high):
base (resets, typography, etc.)
  ↓
components (reusable patterns)
  ↓
utilities (single purpose)
```

This means:
- Utility classes override component styles
- Component styles override base styles
- Within layers, normal CSS specificity rules apply

## 🎨 Practical Workflow

1. **Base layer** - Global resets, typography, CSS variables
2. **Components layer** - Reusable patterns using @apply
3. **Utilities** - Tailwind's built-in utilities + custom utilities
4. **HTML** - Compose with utility classes

```css
/* style.css */
@tailwind base;        /* base layer is included here */
@tailwind components;  /* components layer is included here */
@tailwind utilities;   /* utilities layer is included here */

@layer base {
  /* Your base styles */
}

@layer components {
  /* Your component patterns */
}

@layer utilities {
  /* Your utility extensions */
}
```

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

Dev server runs at: **http://localhost:5181**

## 📚 Further Reading

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Theme Configuration](https://tailwindcss.com/docs/theme)
- [Using @apply](https://tailwindcss.com/docs/functions-and-directives#apply)
- [CSS Functions](https://tailwindcss.com/docs/functions-and-directives)
- [Adding Plugins](https://tailwindcss.com/docs/plugins)

## 🎉 Completion

Congratulations! You've now explored all 9 core Tailwind CSS concepts:

1. ✅ Utility Classes - Foundation
2. ✅ States - Interactivity
3. ✅ Responsive Design - Mobile-first
4. ✅ Dark Mode - Theme switching
5. ✅ Theme Variables - Customization
6. ✅ Colors - Palette mastery
7. ✅ Custom Styles - @apply & @layer
8. ✅ Detecting Classes - PurgeCSS
9. ✅ Functions & Directives - Advanced techniques

You now have a comprehensive understanding of Tailwind CSS! 🚀
