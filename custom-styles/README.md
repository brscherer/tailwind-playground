# Tailwind CSS - Custom Styles

This project demonstrates **Adding Custom Styles** to Tailwind CSS using `@apply`, `@layer`, and custom CSS.

## When to Use Custom Styles

Tailwind utilities cover 99% of styling needs. Use custom CSS when you need:

- Complex animations or keyframes
- Advanced pseudo-selectors
- Non-standard CSS properties
- Component-level encapsulation
- Third-party library integration

## Key Directives

### 1. @apply

Compose utility classes into custom CSS classes. Perfect for creating reusable components.

**Syntax:**
```css
@apply utility-class1 utility-class2 utility-class3;
```

**Example - Button Component:**
```css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg;
    @apply hover:bg-blue-700 active:bg-blue-800;
    @apply transition-colors duration-200;
  }
}
```

**Usage:**
```html
<button class="btn-primary">Click me</button>
```

**Benefits:**
- Reduces repetition in HTML
- Centralizes component styles
- Easier to maintain
- Combines multiple utilities

**When to Use:**
- Creating reusable components
- Encapsulating component styles
- Building design systems
- Reducing HTML class clutter

### 2. @layer

Organize custom styles into Tailwind's cascade layers: `base`, `components`, and `utilities`.

**Layers (in order of priority):**
1. **Base** - Element defaults (html, body, etc.)
2. **Components** - Reusable component classes
3. **Utilities** - Single-purpose utilities (highest priority)

**Example:**
```css
/* Base layer */
@layer base {
  h1 {
    @apply text-4xl font-bold mb-4;
  }
}

/* Components layer */
@layer components {
  .btn {
    @apply px-4 py-2 rounded font-semibold;
  }
}

/* Utilities layer */
@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
}
```

**Benefits:**
- Maintains Tailwind's cascade
- Allows utilities to override components
- Clear organization
- Prevents specificity issues

### 3. Custom Animations with @keyframes

Define complex animations beyond Tailwind's built-in options.

**Example:**
```css
@keyframes bounce-custom {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.ball {
  @apply w-4 h-4 bg-blue-600 rounded-full;
  animation: bounce-custom 1.2s infinite ease-in-out;
}
```

**When to Use:**
- Complex animation sequences
- Multiple keyframes
- Performance-critical animations
- Custom easing functions

## Arbitrary Values

Use square brackets for one-off custom values without creating classes.

**Examples:**
```html
<!-- Custom color -->
<div class="bg-[#1e3a5f]">Custom color</div>

<!-- Custom sizing -->
<div class="w-[432px] h-[200px]">Custom size</div>

<!-- Custom delay -->
<div class="animate-[pulse_2s_infinite]">Custom animation</div>

<!-- Custom opacity -->
<div class="bg-blue-500/[0.33]">33% opacity</div>
```

**Benefits:**
- No need to define custom utilities
- One-off styling without bloat
- Full flexibility
- Smaller config files

## Plugins

Extend Tailwind with custom utilities via plugins.

**Creating a Plugin:**
```javascript
// tailwind.config.js
const plugin = require('tailwindcss/plugin')

export default {
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-20deg': {
          transform: 'skewY(-20deg)',
        },
      })
    }),
  ]
}
```

**Popular Plugins:**
- `@tailwindcss/forms` - Form styling
- `@tailwindcss/typography` - Prose styling
- `@tailwindcss/line-clamp` - Line clamping
- `@tailwindcss/aspect-ratio` - Aspect ratio
- Community plugins for advanced features

**Plugin Benefits:**
- Share utilities across projects
- Package custom functionality
- Third-party integrations
- Responsive variants

## Complete Example: Card Component

**CSS (style.css):**
```css
@layer components {
  .card {
    @apply bg-white rounded-lg shadow-md p-6;
    @apply border border-gray-200;
  }

  .card-title {
    @apply text-2xl font-bold text-gray-900 mb-2;
  }

  .card-text {
    @apply text-gray-600 leading-relaxed;
  }
}
```

**HTML:**
```html
<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-text">Card description goes here.</p>
</div>
```

## Best Practices

### Do

- Use `@apply` for component-level styles
- Keep custom CSS minimal
- Use `@layer` for organization
- Document custom utilities
- Consider plugins before custom CSS
- Use arbitrary values for one-offs
- Maintain Tailwind's structure

### Don't

- Override Tailwind utilities unnecessarily
- Write extensive custom CSS
- Mix utility and semantic CSS indiscriminately
- Use `!important` excessively
- Duplicate Tailwind functionality
- Ignore Tailwind's cascade
- Create overly specific selectors

## Comparison: When to Use What

| Situation | Solution |
|-----------|----------|
| Simple spacing/color | Utility class |
| One-off unique value | Arbitrary value `[...]` |
| Reusable component | `@apply` in component layer |
| Element defaults | `@layer base` |
| Complex animation | Custom `@keyframes` |
| Custom utility | Plugin or `@layer utilities` |
| Third-party styles | Custom CSS (lowest layer) |

## File Structure

```
custom-styles/
├── src/
│   └── style.css          # Custom CSS with @apply, @layer, @keyframes
├── index.html             # Example components
├── tailwind.config.js     # Configuration
└── package.json
```

## Style Layer Priority

From lowest to highest priority:

1. **Browser defaults**
2. **Custom CSS (in order defined)**
3. **@layer base**
4. **@layer components**
5. **@layer utilities**
6. **Inline styles** (highest)

This ensures utilities can always override components, maintaining Tailwind's intended hierarchy.

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open your browser to `http://localhost:5179`

4. Explore the custom styles examples

5. Build for production:
   ```bash
   pnpm build
   ```

## Learning Resources

- [Tailwind CSS @apply Documentation](https://tailwindcss.com/docs/adding-custom-styles#using-apply)
- [Tailwind CSS @layer Documentation](https://tailwindcss.com/docs/adding-custom-styles#using-layer)
- [Tailwind CSS Plugins](https://tailwindcss.com/docs/plugins)
- [Tailwind CSS Arbitrary Values](https://tailwindcss.com/docs/arbitrary-values)

## Tips

- Start with utilities, add custom CSS only when needed
- Use `@apply` to reduce HTML class bloat
- Organize with `@layer` for maintainability
- Document your custom utilities
- Consider open-source plugins before building
- Test arbitrary values before committing to plugins
