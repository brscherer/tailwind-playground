# Tailwind CSS - Responsive Design

This project demonstrates **Responsive Design** with Tailwind CSS using mobile-first, breakpoint-driven styling.

## What is Responsive Design?

Responsive design ensures your website looks great and functions well on all devices, from mobile phones to large desktop monitors. Tailwind CSS makes this easy with breakpoint prefixes that apply styles at specific screen sizes.

## Tailwind Breakpoints

Tailwind provides six default breakpoints:

| Breakpoint | Min-width | CSS | Prefix |
|-----------|-----------|-----|--------|
| (none) | 0px | - | (base styles) |
| `sm` | 640px | `@media (min-width: 640px)` | `sm:` |
| `md` | 768px | `@media (min-width: 768px)` | `md:` |
| `lg` | 1024px | `@media (min-width: 1024px)` | `lg:` |
| `xl` | 1280px | `@media (min-width: 1280px)` | `xl:` |
| `2xl` | 1536px | `@media (min-width: 1536px)` | `2xl:` |

## Mobile-First Approach

Tailwind uses a **mobile-first strategy**: Write styles for mobile devices first (without a prefix), then use breakpoint prefixes to enhance the design for larger screens.

### Example:
```html
<!-- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

## Responsive Utilities

### Display & Layout
- `flex` / `grid` - Responsive flexbox and grid layouts
- `grid-cols-1` - 1 column on mobile
- `sm:grid-cols-2` - 2 columns on small screens
- `lg:grid-cols-3` - 3 columns on large screens

### Typography
- `text-xs` / `sm:text-sm` / `md:text-base` / `lg:text-lg` - Font sizes scale with viewport
- `font-semibold` - Font weight consistent across breakpoints

### Spacing
- `p-4` / `sm:p-6` / `lg:p-8` - Padding increases on larger screens
- `gap-4` / `sm:gap-6` / `lg:gap-8` - Grid gap adjusts per breakpoint
- `mb-4` / `sm:mb-6` / `lg:mb-12` - Margins respond to screen size

### Width & Height
- `w-full` - Full width on all screens
- `w-full sm:w-1/2 lg:w-1/3` - 100% on mobile, 50% on tablet, 33% on desktop
- `h-auto` - Maintain aspect ratio for images

### Visibility
- `block` / `hidden` - Show/hide on any breakpoint
- `block sm:hidden` - Show on mobile, hide on tablet+
- `hidden md:block` - Hide on mobile/tablet, show on desktop+

### Display Direction
- `flex-col` / `md:flex-row` - Stack vertically on mobile, horizontally on desktop

## Examples in This Project

### 1. **Responsive Navigation**
Header hides mobile menu button (`sm:hidden`) and shows navigation links (`hidden sm:flex`) on larger screens.

### 2. **Responsive Grid**
Cards change from 1 column → 2 → 3 → 4 columns as screen size increases.

### 3. **Hero Section**
Two-column layout on desktop (`md:grid-cols-2`) stacks to one column on mobile.

### 4. **Sidebar Layout**
Main content and sidebar stack vertically on mobile (`grid-cols-1`) and side-by-side on large screens (`lg:grid-cols-3`).

### 5. **Responsive Typography**
Text size increases progressively: `text-xs` → `sm:text-sm` → `md:text-base` → `lg:text-lg`

### 6. **Show/Hide Content**
Different content for different screen sizes using `block sm:hidden` and `hidden sm:block`.

### 7. **Responsive Images**
Images scale with container using `w-full` and maintain aspect ratio with `h-auto`.

### 8. **Footer**
4-column grid on desktop (`lg:grid-cols-4`), 2 columns on tablet (`sm:grid-cols-2`), 1 on mobile.

## Best Practices

### 1. **Start with Mobile**
```html
<!-- ✅ Good: Mobile first -->
<div class="text-sm md:text-lg lg:text-xl">
```

```html
<!-- ❌ Avoid: Desktop first -->
<div class="text-xl md:text-lg sm:text-sm">
```

### 2. **Use Container Widths**
```html
<!-- ✅ Good: Constrain content width -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

### 3. **Leverage Grid & Flex**
```html
<!-- ✅ Good: Flexible layouts -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
```

### 4. **Hide/Show Strategically**
```html
<!-- ✅ Good: Show hamburger on mobile only -->
<button class="block sm:hidden">Menu</button>
```

### 5. **Scale Spacing Proportionally**
```html
<!-- ✅ Good: Spacing scales with screen -->
<div class="p-4 sm:p-6 md:p-8 lg:p-12">
```

## Custom Breakpoints

You can customize breakpoints in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
```

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open your browser to `http://localhost:5175`

4. **Resize your browser** to see responsive behavior at different breakpoints

5. Build for production:
   ```bash
   pnpm build
   ```

## Tips for Testing

- Use browser DevTools device emulation to test mobile views
- Open DevTools and use the responsive design mode (Ctrl+Shift+M or Cmd+Shift+M)
- Test on actual devices when possible
- Consider touch interfaces on mobile

## Learn More

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Mobile-First Design Philosophy](https://www.sitepoint.com/mobile-first-design/)
- [CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
