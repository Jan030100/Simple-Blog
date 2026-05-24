# 📝 Simple Blog Application

A modern, fully-featured blog application built with **React**, **TypeScript**, and **Vite**. Create, edit, delete, and search blog posts with a beautiful UI and persistent storage.

![React](https://img.shields.io/badge/React-19.2.6-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.0-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 🎯 Core Functionality
- ✅ **Create Blogs** - Add new blog posts with title, description, image, and date
- ✅ **Edit Blogs** - Update existing blog posts with real-time validation
- ✅ **Delete Blogs** - Remove blog posts with confirmation
- ✅ **Read Blogs** - View all blog posts in a clean, organized feed
- ✅ **Search & Filter** - Find blogs by title or description in real-time

### 🔧 Advanced Features
- 💾 **Data Persistence** - Automatic localStorage storage across browser sessions
- ✔️ **Form Validation** - Comprehensive validation with user-friendly error messages
- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🌐 **Beautiful UI** - Modern, clean interface with Tailwind CSS
- ⚡ **Lightning Fast** - Optimized performance with React and Vite
- 🎯 **Type Safety** - Full TypeScript support with strict mode

### 🏗️ Architecture
- 📦 **Modular Components** - Well-organized feature-based component structure
- 🪝 **Custom Hooks** - Reusable logic with custom React hooks
- 🎯 **Clean Code** - SOLID principles and best practices
- 📚 **Comprehensive Documentation** - Detailed guides and migration docs

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Jan030100/Simple-Blog.git
cd Simple-Blog

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5174/`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

### Lint Code

```bash
# Check for code quality issues
npm run lint
```

---

## 📚 Project Structure

```
Simple-Blog/
├── src/
│   ├── components/
│   │   ├── blog/                 # Blog-related components
│   │   │   ├── ArticleCard.tsx   # Individual blog card
│   │   │   ├── ArticleList.tsx   # Blog list with search
│   │   │   └── BlogForm.tsx      # Blog creation/edit form
│   │   ├── sidebar/              # Sidebar components
│   │   │   ├── PeopleToFollow.tsx
│   │   │   ├── TrendsList.tsx
│   │   │   ├── TopicList.tsx
│   │   │   └── UserCard.tsx
│   │   └── shared/               # Reusable components
│   │       ├── Modal.tsx
│   │       ├── Nav.tsx
│   │       ├── FormComponents.tsx
│   │       └── UIComponents.tsx
│   ├── hooks/                    # Custom React hooks
│   │   ├── useBlogManager.ts
│   │   ├── useBlogSearch.ts
│   │   ├── useModal.ts
│   │   └── useFormInput.ts
│   ├── types/                    # TypeScript definitions
│   │   └── blog.ts
│   ├── utils/                    # Utility functions
│   │   ├── storage.ts            # localStorage operations
│   │   └── validation.ts         # Form validation
│   ├── constants/                # Constants and mock data
│   │   ├── index.ts
│   │   └── mockData.ts
│   ├── shared/
│   │   └── BlogContext.tsx       # Global state context
│   ├── App.tsx                   # Main component
│   └── main.tsx                  # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎮 Usage

### Creating a Blog

1. Click the **"Add New Blog"** button
2. Fill in the form:
   - **Title** (3-100 characters)
   - **Description** (10+ characters)
   - **Image URL** (valid URL)
   - **Date** (any date)
3. Click **"Add Blog"** to save

### Editing a Blog

1. Find the blog in the list
2. Click the **Edit** icon (pencil)
3. Update the information
4. Click **"Update Blog"**

### Deleting a Blog

1. Find the blog in the list
2. Click the **Delete** icon (trash)
3. Blog is removed immediately

### Searching Blogs

1. Use the search box at the top of the blog list
2. Type to filter by title or description
3. Results update in real-time

---

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 19.2.6 |
| **TypeScript** | Type Safety | ~6.0.2 |
| **Vite** | Build Tool | 8.0.12 |
| **Tailwind CSS** | Styling | 4.3.0 |
| **React Icons** | Icons | 5.6.0 |
| **React Context** | State Management | Built-in |

---

## 📖 API Documentation

### Context: `useBlogs()`

```typescript
const { blogs, loading, error, addBlog, updateBlog, deleteBlog } = useBlogs();
```

**Parameters:**
- `blogs` - Array of blog posts
- `loading` - Loading state
- `error` - Error message if any
- `addBlog(blog)` - Add new blog
- `updateBlog(blog)` - Update existing blog
- `deleteBlog(id)` - Delete blog by ID

### Hook: `useBlogSearch()`

```typescript
const filtered = useBlogSearch(blogs, searchTerm);
```

**Returns:** Filtered array of blogs matching search term

### Hook: `useModal()`

```typescript
const { isOpen, open, close, toggle } = useModal();
```

### Component: `BlogForm`

```typescript
<BlogForm 
  existingBlog={blog} 
  onClose={() => {}} 
/>
```

---

## ✔️ Form Validation

The application includes comprehensive validation:

| Field | Rules |
|-------|-------|
| **Title** | Required, 3-100 characters |
| **Description** | Required, 10+ characters |
| **Image URL** | Required, valid URL format |
| **Date** | Required, any date |

Validation errors are displayed clearly to help users fix issues.

---

## 💾 Data Persistence

All blogs are automatically saved to browser's localStorage under the key `blogs_app_blogs`. Data persists across browser sessions unless manually cleared.

```typescript
// Manual storage operations
import { storageUtils } from "./utils/storage";

storageUtils.saveBlogs(blogs);
const blogs = storageUtils.getBlogs();
storageUtils.clearBlogs();
```

---

## 🎨 UI Components

### Reusable Components

#### Card
```typescript
import { Card } from "./components/shared/UIComponents";

<Card className="p-6">
  <h2>Title</h2>
</Card>
```

#### Button
```typescript
import { Button } from "./components/shared/UIComponents";

<Button variant="primary" size="lg">
  Click me
</Button>
```

**Variants:** `primary`, `secondary`, `danger`, `outline`  
**Sizes:** `sm`, `md`, `lg`

#### Input
```typescript
import { Input, SearchInput } from "./components/shared/FormComponents";

<Input 
  type="text" 
  placeholder="Enter text" 
  error={errorMessage}
/>

<SearchInput 
  onSearchChange={(term) => console.log(term)} 
/>
```

---

## 🔄 State Management

The app uses React Context API with localStorage for state management:

```typescript
// Global blog state
const BlogContext = createContext<BlogContextType>();

// Automatic persistence
useEffect(() => {
  const savedBlogs = storageUtils.getBlogs();
  setBlogs(savedBlogs);
}, []);
```

---

## 📱 Responsive Design

The application is fully responsive:
- **Desktop** (1024px+) - Full layout with sidebar
- **Tablet** (768px-1023px) - Adjusted layout
- **Mobile** (<768px) - Sidebar hidden, single column

---

## 🚀 Performance

- **Build Size**: ~69KB gzip
- **JavaScript**: ~65KB gzip
- **CSS**: ~4KB gzip
- **Fast Refresh**: Instant updates during development
- **Optimized Bundle**: Tree-shaking with ES modules

---

## 🐛 Known Issues

None currently. All features tested and working!

---

## 📚 Additional Documentation

- **[REFACTORING_GUIDE.md](./REFACTORING_GUIDE.md)** - Complete architecture overview
- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Developer guide with code examples
- **[REFACTORING_SUMMARY.md](./REFACTORING_SUMMARY.md)** - Summary of changes
- **[README_REFACTORING.md](./README_REFACTORING.md)** - Documentation index

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guidelines
- Follow existing code style
- Add TypeScript types for new code
- Test changes before submitting PR
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Jan030100**
- GitHub: [@Jan030100](https://github.com/Jan030100)
- Project: [Simple Blog](https://github.com/Jan030100/Simple-Blog)

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Bundled with [Vite](https://vitejs.dev/)

---

## 🎯 Future Enhancements

- [ ] User authentication
- [ ] Blog categories and tags
- [ ] Comments system
- [ ] Like/bookmark functionality
- [ ] Dark mode support
- [ ] Backend API integration
- [ ] Export/import functionality
- [ ] Social sharing

---

## 📞 Support

For questions or issues:
1. Check the [documentation](./REFACTORING_GUIDE.md)
2. Review [existing issues](https://github.com/Jan030100/Simple-Blog/issues)
3. Open a new [GitHub issue](https://github.com/Jan030100/Simple-Blog/issues/new)

---

## 🏆 Quality Metrics

✅ **Code Quality**
- Zero TypeScript errors
- ESLint compliant
- React best practices
- Proper error handling

✅ **Performance**
- Optimized bundle size
- Fast development server
- Efficient re-renders

✅ **Documentation**
- Comprehensive guides
- Code examples
- Architecture documentation

---

**Made with ❤️ by Jan030100**
