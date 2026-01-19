# Tailwind CSS - Dark Mode

This project demonstrates **Dark Mode** implementation with Tailwind CSS using the `dark:` variant system.

## What is Dark Mode?

Dark mode provides an alternative color scheme optimized for low-light environments. It reduces eye strain and battery consumption on modern displays. Tailwind CSS makes implementing dark mode straightforward with the `dark:` prefix.

## Dark Mode Approaches

Tailwind supports two primary dark mode strategies:

### 1. **Class-Based (Recommended)**
Add the `dark` class to the `html` element to enable dark mode manually or via JavaScript.

**Configuration:**
```javascript
// tailwind.config.js
export default {
  darkMode: 'class',
  // ... other config
}
```

**Usage:**
```html
<!-- Light mode (default) -->
<html>
  <div class="bg-white dark:bg-gray-800">Content</div>
</html>

<!-- Dark mode (add 'dark' class to html) -->
<html class="dark">
  <div class="bg-white dark:bg-gray-800">Content</div>
</html>
```

**Advantages:**
- Manual control via JavaScript
- Save user preference to localStorage
- Toggle without page refresh
- Works with any JavaScript framework

### 2. **Media-Based (System Preference)**
Follow the user's system color scheme preference.

**Configuration:**
```javascript
// tailwind.config.js
export default {
  darkMode: 'media', // Default
  // ... other config
}
```

**Advantages:**
- Automatic based on system settings
- No JavaScript required
- Respects user OS preferences
- Lighter implementation

## Dark Mode Utilities

### Basic Colors
```html
<!-- Text -->
<p class="text-gray-900 dark:text-white">
  Light: dark text, Dark: white text
</p>

<!-- Background -->
<div class="bg-white dark:bg-gray-800">
  Light: white background, Dark: gray background
</div>

<!-- Border -->
<div class="border border-gray-300 dark:border-gray-600">
  Light: light gray border, Dark: darker border
</div>
```

### Color Palettes
```html
<!-- Primary Colors -->
<button class="bg-blue-600 dark:bg-blue-500">
  Adjusted for dark mode
</button>

<!-- Semantic Colors -->
<div class="bg-green-50 dark:bg-green-900">Success background</div>
<div class="bg-red-50 dark:bg-red-900">Error background</div>
```

### Shadows
```html
<!-- Shadows appear more prominent in dark mode -->
<div class="shadow-md dark:shadow-lg">
  Larger shadow in dark mode for depth
</div>
```

## Styling Patterns

### Light Mode First
```html
<!-- Start with light mode styles -->
<div class="bg-white text-gray-900 shadow-md">
  <!-- Then add dark mode variants -->
  <div class="dark:bg-gray-800 dark:text-white dark:shadow-lg">
    Content
  </div>
</div>
```

### Component-Level Dark Mode
```html
<!-- Apply dark: to individual components -->
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg">
  <h1 class="text-gray-900 dark:text-white">Title</h1>
  <p class="text-gray-600 dark:text-gray-400">Description</p>
</div>
```

### Form Elements
```html
<input 
  class="bg-white dark:bg-gray-700
         text-gray-900 dark:text-white
         border-gray-300 dark:border-gray-600
         focus:border-blue-500 dark:focus:border-blue-400
         placeholder-gray-400 dark:placeholder-gray-500"
/>
```

## Combining with Other Variants

### Hover + Dark Mode
```html
<button class="bg-blue-600 hover:bg-blue-700 
                dark:bg-blue-500 dark:hover:bg-blue-600">
  Hover effect works in both modes
</button>
```

### Focus + Dark Mode
```html
<input class="focus:ring-2 focus:ring-blue-200 
              dark:focus:ring-blue-900" />
```

### Responsive + Dark Mode
```html
<div class="text-sm md:text-lg dark:text-gray-300 md:dark:text-gray-200">
  Responsive typography in dark mode
</div>
```

## Best Practices

### 1. **Color Contrast**
Ensure WCAG AA compliance (4.5:1 for text):
```html
<!-- ✅ Good: Sufficient contrast -->
<p class="text-gray-900 dark:text-white">

<!-- ❌ Avoid: Poor contrast in dark mode -->
<p class="text-gray-700 dark:text-gray-600">
```

### 2. **Avoid Pure Black/White**
Use shades of gray for less harsh appearance:
```html
<!-- ✅ Good: More natural colors -->
<div class="bg-white dark:bg-gray-800">

<!-- ❌ Avoid: Too harsh -->
<div class="bg-white dark:bg-black">
```

### 3. **Semantic Color Adjustments**
Adjust colors appropriately for dark mode:
```html
<!-- ✅ Good: Lighter shade in dark mode -->
<button class="bg-blue-600 dark:bg-blue-500">

<!-- ❌ Avoid: Same brightness -->
<button class="bg-blue-600 dark:bg-blue-600">
```

### 4. **Consistent Styling**
Apply dark: to all relevant utilities:
```html
<!-- ✅ Good: Complete styling -->
<div class="bg-white dark:bg-gray-800
         text-gray-900 dark:text-white
         shadow-md dark:shadow-lg">

<!-- ❌ Avoid: Incomplete styling -->
<div class="bg-white dark:bg-gray-800">
```

### 5. **Provide User Control**
Allow users to toggle dark mode:
```html
<button onclick="
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', 'true');
">
  Toggle Dark Mode
</button>
```

## Implementation Example

```javascript
// Initialize dark mode based on preference
function initDarkMode() {
  const html = document.documentElement;
  const saved = localStorage.getItem('darkMode');
  
  if (saved === 'true') {
    html.classList.add('dark');
  } else if (saved === 'false') {
    html.classList.remove('dark');
  } else {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) html.classList.add('dark');
  }
}

// Toggle handler
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark);
}

initDarkMode();
```

## Common Patterns

### Card Component
```html
<div class="bg-white dark:bg-gray-800 
         border border-gray-200 dark:border-gray-700
         rounded-lg shadow-md dark:shadow-lg
         p-6">
  <h3 class="text-gray-900 dark:text-white font-semibold">Title</h3>
  <p class="text-gray-600 dark:text-gray-400">Description</p>
</div>
```

### Navigation
```html
<nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
  <a href="#" class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Link</a>
</nav>
```

### Input Field
```html
<input class="bg-white dark:bg-gray-700
             text-gray-900 dark:text-white
             border border-gray-300 dark:border-gray-600
             rounded-lg px-4 py-2
             focus:outline-none focus:ring-2
             focus:ring-blue-500 dark:focus:ring-blue-400" />
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

3. Open your browser to `http://localhost:5176`

4. **Click the "Dark Mode" toggle** in the header to switch between light and dark modes

5. Build for production:
   ```bash
   pnpm build
   ```

## Testing

- Toggle dark mode in the UI to see changes in real-time
- Check localStorage to see how preferences are saved
- Test on different screen sizes
- Verify color contrast with accessibility tools
- Test on actual devices with different brightness settings

## Learn More

- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [WCAG Color Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Dark Mode Design Best Practices](https://www.smashingmagazine.com/2020/11/color-contrast-dark-backgrounds/)
