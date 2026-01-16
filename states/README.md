# Tailwind CSS - States

This project demonstrates **Hover, Focus, and Other States** in Tailwind CSS.

## What are State Variants?

State variants allow you to style elements based on user interactions and pseudo-classes. They enable dynamic, interactive styling without writing custom CSS or JavaScript.

## State Variants Covered

### Hover States
- `hover:bg-color` - Change background on hover
- `hover:scale-105` - Scale up on hover
- `hover:shadow-lg` - Add shadow on hover
- `hover:underline` - Add underline on hover

**Example:**
```html
<button class="bg-blue-500 hover:bg-blue-600 transition-colors">
  Hover me
</button>
```

### Focus States
- `focus:outline-none` - Remove default outline
- `focus:border-color` - Change border color
- `focus:ring-2` - Add focus ring
- `focus:ring-color` - Set ring color

**Example:**
```html
<input class="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
```

### Active States
- `active:bg-color` - Change background when pressed
- `active:scale-95` - Scale down when pressed
- `active:shadow-inner` - Add inset shadow when pressed

**Example:**
```html
<button class="bg-blue-500 active:bg-blue-700 active:scale-95">
  Press me
</button>
```

### Disabled States
- `disabled:opacity-50` - Reduce opacity when disabled
- `disabled:bg-color` - Change background when disabled
- `disabled:cursor-not-allowed` - Change cursor to indicate disabled state

**Example:**
```html
<button disabled class="disabled:opacity-50 disabled:cursor-not-allowed">
  Disabled
</button>
```

### Group Hover
- `group` - Mark parent for group interaction
- `group-hover:color-change` - Styles applied when parent is hovered

**Example:**
```html
<div class="group hover:bg-blue-50">
  <p class="group-hover:text-blue-600">Text changes with parent</p>
</div>
```

### Focus-Within
- `focus-within:ring-2` - Apply styles when any child is focused
- `focus-within:bg-color` - Change background when any child is focused

**Example:**
```html
<form class="focus-within:ring-2 focus-within:ring-blue-400">
  <input class="focus:outline-none" />
</form>
```

### First, Last, Odd, Even
- `first:` - Style first element
- `last:` - Style last element
- `odd:` - Style odd elements
- `even:` - Style even elements

**Example:**
```html
<ul>
  <li class="first:rounded-t-lg">Item 1</li>
  <li class="even:bg-gray-100">Item 2</li>
  <li class="last:rounded-b-lg">Item 3</li>
</ul>
```

### Dark Mode
- `dark:bg-color` - Apply styles in dark mode
- `dark:text-color` - Change text color in dark mode

**Example:**
```html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  Content
</div>
```

## Transitions

Smooth state changes with transition utilities:
- `transition` - Default transition
- `transition-all` - Transition all properties
- `duration-300` - 300ms duration
- `duration-500` - 500ms duration
- `ease-in` - Ease in timing

**Example:**
```html
<button class="hover:bg-blue-600 transition-all duration-300">
  Smooth hover effect
</button>
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

3. Open your browser to `http://localhost:5174`

4. Build for production:
   ```bash
   pnpm build
   ```

## Key Features

- **Interactive Examples**: Try hovering, focusing, and clicking elements
- **Focus Management**: Forms with focus-within states
- **Group Interactions**: Parent-child hover effects
- **Smooth Transitions**: See transition duration effects
- **Accessibility**: Proper focus states for better UX

## Learn More

Visit [Tailwind CSS States Documentation](https://tailwindcss.com/docs/hover-focus-and-other-states) for more information.
