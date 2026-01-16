# Tailwind CSS - Utility Classes

This project demonstrates the core concept of **Styling with Utility Classes** in Tailwind CSS.

## What are Utility Classes?

Utility classes are low-level, single-purpose classes that do one thing well. Instead of writing custom CSS, you combine utility classes to build complex components and layouts. This approach is often called "Utility-First" CSS.

## Examples in This Project

### Typography
- `text-4xl` - Large heading text
- `font-bold` - Bold font weight
- `text-gray-900` - Text color
- `text-center` - Text alignment

### Spacing
- `p-4` - Padding (all sides)
- `px-6` - Horizontal padding
- `py-2` - Vertical padding
- `m-4` - Margin
- `gap-4` - Gap between flex/grid items

### Colors & Backgrounds
- `bg-blue-100` - Background color
- `text-blue-900` - Text color
- `border-blue-500` - Border color

### Layout
- `flex` - Flexbox display
- `grid` - Grid display
- `grid-cols-3` - 3-column grid
- `justify-center` - Horizontal centering
- `items-center` - Vertical centering

### Sizing
- `w-20` - Width
- `h-20` - Height
- `min-h-32` - Minimum height
- `max-w-4xl` - Maximum width

### Borders & Shadows
- `border` - Border
- `border-2` - Thick border
- `rounded-lg` - Border radius
- `shadow-md` - Box shadow
- `shadow-lg` - Larger shadow

### Display & Visibility
- `inline` - Inline display
- `block` - Block display
- `opacity-50` - Opacity level

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm run dev
   ```

3. Open your browser to `http://localhost:5173`

4. Build for production:
   ```bash
   pnpm run build
   ```

## Key Benefits

- **Consistency**: All spacing, colors, and sizes follow your theme
- **Rapid Development**: Write HTML with styles applied immediately
- **Responsiveness**: Easy to add responsive variants (e.g., `md:grid-cols-2`)
- **Small Bundle Size**: Unused utilities are purged during build

## Learn More

Visit [Tailwind CSS Documentation](https://tailwindcss.com/docs/utility-first) for more information.
