# Tailwind CSS - Colors

This project is a deep dive into **Tailwind's Color Palette** and how to use colors effectively in your projects.

## Tailwind Color System

Tailwind includes a comprehensive, expertly crafted color palette with 21 colors. Each color has 10 shades, from light (50) to dark (900), providing flexibility for design systems.

### Color Range: 50-900

| Shade | Use Case |
|-------|----------|
| **50** | Lightest - backgrounds, hover states |
| **100** | Very light - subtle backgrounds |
| **200** | Light - borders, dividers |
| **300** | Light-medium - secondary UI |
| **400** | Medium-light - active states |
| **500** | **Primary** - main color, buttons |
| **600** | Medium-dark - hover on buttons |
| **700** | Dark - pressed states |
| **800** | Darker - dark mode backgrounds |
| **900** | Darkest - text, dark mode text |

## Color Categories

### Neutral Colors (Text, Backgrounds, Borders)
- **Slate** - Cool, modern neutral
- **Gray** - True neutral
- **Zinc** - Slightly warm neutral
- **Neutral** - Pure neutral
- **Stone** - Warmer neutral

### Primary Colors (Interactive Elements)
- **Blue** - Default primary, trust, actions
- **Cyan** - Light, tech-forward
- **Sky** - Light blue, info
- **Indigo** - Deep blue, professional
- **Violet** - Purple-blue, creative

### Extended Colors
- **Purple** - Creative, premium
- **Fuchsia** - Vibrant, modern
- **Pink** - Soft, friendly
- **Rose** - Sophisticated pink
- **Red** - Error, danger, important
- **Orange** - Warm, inviting
- **Amber** - Warning, caution
- **Yellow** - Alert, highlight
- **Lime** - Vibrant green
- **Green** - Success, positive
- **Emerald** - Premium green
- **Teal** - Calm, balanced

### Special Colors
- **Black** - #000000
- **White** - #FFFFFF
- **Transparent** - rgba(0, 0, 0, 0)
- **Current** - Inherits current color
- **Inherit** - Inherits from parent

## Using Colors

### Text Color
```html
<!-- text-{color}-{shade} -->
<p class="text-gray-900">Primary text</p>
<p class="text-gray-600">Secondary text</p>
<p class="text-gray-400">Tertiary text</p>
```

### Background Color
```html
<!-- bg-{color}-{shade} -->
<div class="bg-white">Main content</div>
<div class="bg-gray-50">Subtle background</div>
<div class="bg-blue-500">Button background</div>
```

### Border Color
```html
<!-- border-{color}-{shade} -->
<div class="border-2 border-gray-300">Default border</div>
<div class="border-2 border-blue-500">Accent border</div>
```

### Shadow Color
```html
<!-- shadow-{color}-{shade} (using bg) -->
<div class="shadow-lg">Default shadow</div>
```

### Opacity Modifiers
```html
<!-- {color}-{shade}/{opacity} -->
<div class="bg-blue-500/75">75% opacity</div>
<div class="bg-blue-500/50">50% opacity</div>
<div class="bg-blue-500/25">25% opacity</div>
<div class="bg-blue-500/5">5% opacity (almost transparent)</div>
```

## Semantic Color Usage

### Primary Actions
```html
<button class="bg-blue-600 hover:bg-blue-700 text-white">
  Primary Button
</button>
```

### Success / Positive Feedback
```html
<div class="bg-green-50 border border-green-200 text-green-800">
  ✓ Success message
</div>
```

### Warnings
```html
<div class="bg-amber-50 border border-amber-200 text-amber-800">
  ⚠ Warning message
</div>
```

### Errors / Danger
```html
<div class="bg-red-50 border border-red-200 text-red-800">
  ✕ Error message
</div>
```

### Information
```html
<div class="bg-sky-50 border border-sky-200 text-sky-800">
  ℹ Information message
</div>
```

## Color Palette Reference

### Neutral Colors (Best for text, backgrounds, borders)
- **Slate-900**: Primary text, headings
- **Gray-600**: Secondary text, labels
- **Gray-200**: Borders, dividers
- **Gray-50**: Subtle backgrounds

### Interactive Colors (Best for UI elements)
- **Blue-600**: Primary action buttons
- **Blue-500**: Active state
- **Green-600**: Success, confirm
- **Red-600**: Danger, delete
- **Amber-600**: Warning
- **Sky-600**: Info

## Best Practices

### 1. **Maintain Consistency**
```html
<!-- ✅ Good: Consistent color usage -->
<button class="bg-blue-600 hover:bg-blue-700">Action</button>

<!-- ❌ Avoid: Random colors -->
<button class="bg-blue-300 hover:bg-blue-900">Action</button>
```

### 2. **Respect Color Semantics**
```html
<!-- ✅ Good: Green for success -->
<div class="bg-green-50 text-green-800">Success!</div>

<!-- ❌ Avoid: Red for success -->
<div class="bg-red-50 text-red-800">Success!</div>
```

### 3. **Ensure Contrast for Accessibility**
```html
<!-- ✅ Good: High contrast (WCAG AAA) -->
<div class="bg-white text-gray-900">Text</div>

<!-- ❌ Avoid: Low contrast -->
<div class="bg-white text-gray-400">Text</div>
```

### 4. **Use Shade Progression for States**
```html
<!-- ✅ Good: Clear state distinction -->
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700">
  Button
</button>

<!-- ❌ Avoid: Ambiguous states -->
<button class="bg-blue-500 hover:bg-blue-500">Button</button>
```

### 5. **Build with Light/Dark Variants**
```html
<!-- ✅ Good: Dark mode support -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>
```

## Common Color Combinations

### Professional / Corporate
- Primary: Blue-600
- Secondary: Gray-600
- Accent: Indigo-600
- Success: Green-600
- Error: Red-600

### Modern / Tech
- Primary: Cyan-500
- Secondary: Blue-600
- Accent: Purple-600
- Success: Emerald-500
- Error: Red-500

### Warm / Friendly
- Primary: Orange-500
- Secondary: Amber-600
- Accent: Rose-500
- Success: Green-500
- Error: Red-600

## Customizing the Palette

```javascript
// tailwind.config.js
export default {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      // Custom colors
      brand: {
        50: '#f0f9ff',
        500: '#0ea5e9',
        900: '#0c3d66',
      },
    },
  },
}
```

## Opacity & Transparency

```html
<!-- Apply opacity to any color -->
<div class="bg-blue-500/100">Fully opaque</div>
<div class="bg-blue-500/75">75% opacity</div>
<div class="bg-blue-500/50">50% opacity</div>
<div class="bg-blue-500/25">25% opacity</div>
<div class="bg-blue-500/5">5% opacity</div>

<!-- Works with all color properties -->
<div class="text-blue-600/75">Transparent text</div>
<div class="border border-blue-500/50">Transparent border</div>
```

## WCAG Color Contrast

### Minimum Requirements
- **AA**: 4.5:1 for normal text, 3:1 for large text
- **AAA**: 7:1 for normal text, 4.5:1 for large text

### Common Tailwind Combinations

#### ✅ Good Contrast
- `text-gray-900` on `bg-white` (21:1)
- `text-white` on `bg-blue-600` (8:1)
- `text-blue-900` on `bg-blue-50` (12:1)

#### ❌ Poor Contrast
- `text-gray-500` on `bg-white` (4.5:1 - just OK)
- `text-gray-400` on `bg-white` (2.5:1 - fails)
- `text-blue-400` on `bg-blue-500` (1.5:1 - fails)

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open your browser to `http://localhost:5178`

4. Explore the color palette and examples

5. Toggle dark mode to see color variants

6. Build for production:
   ```bash
   pnpm build
   ```

## Resources

- [Tailwind Colors Documentation](https://tailwindcss.com/docs/colors)
- [WCAG Color Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Color Theory Basics](https://en.wikipedia.org/wiki/Color_theory)
- [Accessible Color Combinations](https://www.tpgi.com/color-contrast-checker/)

## Tips

- Use color scales systematically (50 → 900)
- Combine neutral and semantic colors
- Test contrast ratios for accessibility
- Consider dark mode variants
- Document your color system for your team
- Use tools like Tailwind UI for inspiration
