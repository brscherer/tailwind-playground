# Detecting Classes in Tailwind CSS

This proof-of-concept demonstrates how Tailwind CSS detects class names in your source files and purges unused CSS from your production builds.

## 🎯 What You'll Learn

- **How Tailwind scans files** for class names using regex patterns
- **Content configuration** and how it affects class detection
- **Static vs dynamic class names** and their trade-offs
- **The safelist approach** for dynamic classes that can't be detected
- **Bundle optimization** through proper configuration
- **Troubleshooting** when classes aren't being detected

## 📚 Core Concepts

### Class Detection (PurgeCSS)

Tailwind uses a content scanning phase during build to find all class names in your source files. It looks for strings that match Tailwind's class naming patterns. Any class that isn't found is excluded from the final CSS output.

**Static Class (✅ Detected):**
```html
<div class="bg-blue-500 text-white p-4">...</div>
```
This will be detected because the class name appears verbatim in the source.

**Dynamic Class (❌ Might Not Be Detected):**
```javascript
const color = 'blue';
className = `bg-${color}-500`; // Risky! String interpolation
```
This might NOT be detected because the class name isn't complete in the source code.

### Content Configuration

The `content` array in `tailwind.config.js` tells Tailwind which files to scan:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.jsx",
  ],
}
```

Common patterns:
- `*.html` - Scan HTML files
- `**/*.{js,ts,jsx,tsx}` - Scan JavaScript/TypeScript files
- `*.vue` - Scan Vue components
- `*.svelte` - Scan Svelte components

### Safelist (Force Inclusion)

For classes that can't be detected through content scanning (truly dynamic), use `safelist`:

```javascript
export default {
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'text-white',
    { pattern: /bg-(red|green|blue)-(50|100|500)/ },
  ],
}
```

### Blocklist (Exclude Classes)

Prevent certain classes from being generated:

```javascript
export default {
  blocklist: [
    'container',     // Rarely used
    'px-0.5',        // Very specific
  ],
}
```

## 🔍 Examples in This Project

### ✅ Detected Classes
All hardcoded classes in the HTML will be detected and included:
```html
<button class="px-4 py-2 bg-blue-600 text-white rounded">Click Me</button>
```

### ⚠️ Dynamic Classes (Need Safelist)
If you need dynamic colors from a set list, add to safelist:
```javascript
// Your config
safelist: ['bg-red-500', 'bg-green-500', 'bg-blue-500']

// Your code
const colors = ['red', 'green', 'blue'];
const selectedColor = colors[Math.floor(Math.random() * colors.length)];
className = `bg-${selectedColor}-500`;
```

### 🚀 Arbitrary Values (✅ Detected)
These are detected automatically:
```html
<div class="w-[200px] h-[150px] p-[24px] text-[32px]">...</div>
```

## 📊 Performance Impact

Proper configuration significantly reduces bundle size:

- **No configuration**: 547 KB (entire Tailwind included)
- **With content paths**: 89 KB (only used classes)
- **Optimized + minified**: 42 KB (gzipped ~12 KB)

That's an **85% reduction** in CSS size!

## 🐛 Troubleshooting

### Problem: "My class isn't showing up"
**Solution:** Check that:
1. The file is included in your `content` array
2. The class name is spelled correctly
3. If dynamic, it's listed in `safelist`
4. Run dev server to test detection

### Problem: "My build is too large"
**Solution:**
1. Verify your `content` paths aren't too broad
2. Remove unnecessary classes from `safelist`
3. Use regex patterns instead of listing all variants
4. Check that you're using production build

### Problem: "Sometimes it works, sometimes it doesn't"
**Solution:** Ensure class names are complete in source:
- ❌ Wrong: `className = 'bg-' + color`
- ✅ Right: `className = color === 'red' ? 'bg-red-500' : 'bg-blue-500'`

## 🎓 Best Practices

**DO:**
- Keep class names static and complete in source files
- Configure content paths to all your template files
- Use safelist for small sets of dynamic classes
- Use regex in safelist for patterns
- Test production builds to verify sizes
- Use arbitrary values for truly custom values

**DON'T:**
- Concatenate class names with variables
- Leave content array empty
- Abuse safelist (it defeats purging benefits)
- Assume classes from comments are detected
- Split class names across conditions
- Use dynamic classes from external APIs

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

Dev server runs at: **http://localhost:5180**

## 📖 Further Reading

The key to understanding class detection:
1. **Regex scanning** - Tailwind scans source files for patterns matching class names
2. **Complete names matter** - Class names must appear verbatim in source code
3. **Content configuration** - Tell Tailwind where to look
4. **Safelist for dynamics** - Use it strategically for cases regex can't handle
5. **Bundle optimization** - Proper config = smaller production builds

Understanding how class detection works is fundamental to building efficient Tailwind applications! 🎯
