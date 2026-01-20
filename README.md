# Tailwind CSS Playground

A collection of proof-of-concept projects demonstrating the core concepts of [Tailwind ### 1. **Start here**: [Utility Classes](./utility-classes) - Understand the utility-first philosophy
2. **Then**: [States](./states) - Make your UI interactive and accessible
3. **Next**: [Responsive Design](./responsive-design) - Build mobile-first layouts
4. **Explore**: [Theme Variables](./theme-variables) - Customize Tailwind to match your brand
5. **Deepen**: [Colors](./colors) - Master the color system
6. **Advanced**: [Custom Styles](./custom-styles) - Extend beyond utilities
7. **Expert**: [Functions & Directives](./functions-directives) - Leverage advanced features](https://tailwindcss.com/).

This repository is designed for learning and experimentation with Tailwind CSS's utility-first approach to styling. Each subdirectory contains a standalone project focused on a specific core concept.

## 📚 Core Concepts

This playground covers all major topics from the [Tailwind CSS documentation](https://tailwindcss.com/docs):

### 1. **Utility Classes** (`./utility-classes`)
Learn the foundation of Tailwind CSS by styling with low-level utility classes. Demonstrates spacing, colors, typography, borders, shadows, flexbox, grid, and more.

- **Key concepts**: Utility-first CSS, composing styles, rapid prototyping
- **Examples**: Padding, margins, colors, typography, layout utilities
- **Dev server**: `http://localhost:5173`

### 2. **States** (`./states`)
Master interactive styling with hover, focus, active, disabled, and other state variants. Learn how to create responsive, accessible forms and interactive components.

- **Key concepts**: Pseudo-classes, state variants, group hover, focus management
- **Examples**: Buttons, form inputs, transitions, dark mode variants
- **Dev server**: `http://localhost:5174`

### 3. **Responsive Design** (`./responsive-design`)
Build mobile-first layouts with Tailwind's responsive breakpoints. Demonstrates how styles adapt across six breakpoints from mobile to large desktop screens.

- **Key concepts**: Mobile-first design, breakpoint prefixes, responsive images
- **Examples**: Adaptive layouts, breakpoint-specific styling
- **Dev server**: `http://localhost:5175`

### 4. **Dark Mode** (`./dark-mode`)
Implement theme switching and dark mode support with class-based and media query approaches. Learn how to create accessible, visually pleasing dark theme variants.

- **Key concepts**: Dark mode variants, theme configuration, user preferences
- **Examples**: Dark mode toggle, color schemes, form styling in dark mode
- **Dev server**: `http://localhost:5176`

### 5. **Theme Variables** (`./theme-variables`)
Customize and extend Tailwind's theme system to match your brand. Learn how to create consistent design systems with custom colors, spacing, typography, and animations.

- **Key concepts**: Theme configuration, extending defaults, design systems
- **Examples**: Custom color scales, spacing, animations, shadows
- **Dev server**: `http://localhost:5177`

### 6. **Colors** (`./colors`)
*Coming soon* - Deep dive into Tailwind's color palette and customization.

- **Key concepts**: Color palette, opacity modifiers, custom colors

### 7. **Custom Styles** (`./custom-styles`)
*Coming soon* - Learn when and how to add custom CSS with Tailwind.

- **Key concepts**: @apply directive, custom components, plugins

### 8. **Detecting Classes** (`./detecting-classes`)
*Coming soon* - Understand how Tailwind finds and purges unused classes.

- **Key concepts**: Content configuration, dynamic class names, PurgeCSS

### 9. **Functions & Directives** (`./functions-directives`)
*Coming soon* - Use Tailwind's CSS functions and directives for advanced styling.

- **Key concepts**: @tailwind, @layer, @apply, theme() function

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ or compatible runtime
- [pnpm](https://pnpm.io/) package manager

### Running a Project

Each project is self-contained with its own `package.json`, configuration files, and dependencies.

```bash
# Navigate to a specific project
cd utility-classes

# Install dependencies with pnpm
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build
```

### Projects Setup Overview

All projects follow the same structure:

```
project-name/
├── index.html              # Demo page
├── src/
│   └── style.css           # Tailwind directives
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite build tool config
├── .gitignore
└── README.md               # Project-specific documentation
```

### Available Scripts

In each project directory, you can run:

- **`pnpm dev`** - Start the development server with hot reload
- **`pnpm build`** - Create an optimized production build
- **`pnpm preview`** - Preview the production build locally

## 📖 Learning Path

We recommend following this learning path to understand Tailwind CSS progressively:

1. **Start here**: [Utility Classes](./utility-classes) - Understand the utility-first philosophy
2. **Then**: [States](./states) - Make your UI interactive and accessible
3. **Next**: [Responsive Design](./responsive-design) - Build mobile-first layouts
4. **Explore**: [Theme Variables](./theme-variables) - Customize Tailwind to match your brand
5. **Deepen**: [Colors](./colors) - Master the color system
6. **Advanced**: [Custom Styles](./custom-styles) - Extend beyond utilities
7. **Expert**: [Functions & Directives](./functions-directives) - Leverage advanced features

## 🛠️ Technologies

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Next-generation build tool
- **[PostCSS](https://postcss.org/)** - CSS transformation
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Vendor prefixes
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## 📝 Project Structure

```
tailwind-playground/
├── utility-classes/          ✅ Complete
├── states/                   ✅ Complete
├── responsive-design/        ✅ Complete
├── dark-mode/                ✅ Complete
├── theme-variables/          ✅ Complete
├── colors/                   📋 Planned
├── custom-styles/            📋 Planned
├── detecting-classes/        📋 Planned
├── functions-directives/     📋 Planned
├── README.md
└── .git/
```

## 🎓 Learning Resources

- [Official Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/adding-custom-styles)
- [Tailwind CSS Community](https://tailwindcss.com/community)

## 💡 Tips for Learning

1. **Experiment with utilities**: Change class names in the HTML to see immediate effects
2. **Use browser DevTools**: Inspect elements to understand which utilities apply
3. **Read the comments**: Each example includes explanatory comments
4. **Check the README**: Each project has detailed documentation about its topic
5. **Build incrementally**: Start with simple examples and gradually increase complexity

## 🔗 Related Resources

- [Tailwind CSS Official Site](https://tailwindcss.com/)
- [Tailwind CSS GitHub](https://github.com/tailwindlabs/tailwindcss)
- [Tailwind UI Components](https://tailwindui.com/)
- [Headless UI](https://headlessui.com/)
