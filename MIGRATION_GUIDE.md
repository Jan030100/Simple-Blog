# Migration Guide - Blog Application Refactoring

## For Developers: Importing Components

### Old Way ❌
```typescript
import Nav from "./components/Nav";
import PeopleTpFollow from "./components/PeopleTpFollow";
import TrendsList from "./components/TrendsList";
import TopicList from "./components/TopicList";
import ArticleList from "./components/ArticalList";
import ArticleCard from "./components/ArticleCard";
import BlogForm from "./components/BlogForm";
import Modal from "./components/Modal";
import UserCard from "./components/UserCard";

// Using old property names
const blog = {
  desctipition: "...", // ❌ Wrong
};
```

### New Way ✅
```typescript
// Navigation & Shared
import Nav from "./components/shared/Nav";
import Modal from "./components/shared/Modal";

// Blog Components
import ArticleList from "./components/blog/ArticleList";
import ArticleCard from "./components/blog/ArticleCard";
import BlogForm from "./components/blog/BlogForm";

// Sidebar Components
import PeopleToFollow from "./components/sidebar/PeopleToFollow";
import TrendsList from "./components/sidebar/TrendsList";
import TopicList from "./components/sidebar/TopicList";
import UserCard from "./components/sidebar/UserCard";

// Using new property names
const blog: Blog = {
  description: "...", // ✅ Correct
};
```

## Backward Compatibility

The old component files at `src/components/` root now act as re-exports:
```typescript
// src/components/Nav.tsx (old)
export { default } from "./shared/Nav";

// This still works, but use the new path directly
import Nav from "./components/Nav"; // ✅ Works but deprecated
import Nav from "./components/shared/Nav"; // ✅ Preferred
```

## Using New Features

### 1. Form Validation
```typescript
import { validateBlog } from "./utils/validation";

const errors = validateBlog({
  title: "My Blog",
  description: "Content...",
  image: "https://...",
  time: "2026-05-24"
});

if (errors.length > 0) {
  console.error(errors); // ["Title is required", ...]
}
```

### 2. Date Formatting
```typescript
import { formatDate } from "./utils/validation";

const formatted = formatDate("2026-05-24");
// Output: "May 24, 2026"
```

### 3. Storage Utilities
```typescript
import { storageUtils } from "./utils/storage";

// Save blogs
storageUtils.saveBlogs(blogs);

// Get blogs
const blogs = storageUtils.getBlogs();

// Clear blogs
storageUtils.clearBlogs();
```

### 4. Custom Hooks
```typescript
import { useBlogSearch, useModal, useFormInput } from "./hooks";

// Search blogs
const filtered = useBlogSearch(blogs, "react");

// Modal state
const { isOpen, open, close } = useModal();

// Form input
const { value, setValue, reset } = useFormInput("");
```

### 5. Reusable UI Components
```typescript
import { Card, Button } from "./components/shared/UIComponents";
import { Input, SearchInput } from "./components/shared/FormComponents";

// Card component
<Card className="p-6">
  <h2>Title</h2>
</Card>

// Button variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Delete</Button>
<Button variant="outline">Cancel</Button>

// Input with error
<Input 
  type="email" 
  placeholder="Email" 
  error={error}
/>

// Search input
<SearchInput 
  onSearchChange={(term) => console.log(term)}
  placeholder="Search..."
/>
```

## Type System

### Blog Type
```typescript
import type { Blog, User, Trend, Topic } from "./types";

const blog: Blog = {
  id: 1,
  title: "Blog Title",
  description: "Blog description",
  image: "https://...",
  time: "2026-05-24",
  author?: "John Doe",
  category?: "Technology",
  likes?: 5
};
```

### Context Usage
```typescript
import { useBlogs } from "./shared/BlogContext";

const { blogs, loading, error, addBlog, updateBlog, deleteBlog } = useBlogs();

// The context now includes:
// - loading: boolean (initial load state)
// - error: string | null (error message if any)
// - blogs persisted to localStorage automatically
```

## Constants & Mock Data

```typescript
import { MOCK_PEOPLE_TO_FOLLOW, MOCK_TRENDS, MOCK_TOPICS } from "./constants/mockData";
import { STORAGE_KEYS, PLACEHOLDERS } from "./constants";

console.log(STORAGE_KEYS.BLOGS); // "blogs_app_blogs"
console.log(PLACEHOLDERS.BLOG_TITLE); // "Enter blog title..."
```

## State Management Pattern

### Before (Limited)
```typescript
const [blogs, setBlogs] = useState<Blog[]>([]);
const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
```

### After (Enhanced)
```typescript
// Context provides persistence + loading/error states
const { blogs, loading, error, addBlog, updateBlog, deleteBlog } = useBlogs();

// Custom hooks for specific features
const filteredBlogs = useBlogSearch(blogs, searchTerm);
const { isOpen, open, close } = useModal();
const { value, setValue } = useFormInput("");
```

## Component Props Evolution

### Modal
```typescript
// Before
<Modal onClose={() => {}}>
  <BlogForm />
</Modal>

// After
<Modal 
  onClose={() => {}} 
  title="Create New Blog"
>
  <BlogForm />
</Modal>
```

### Button
```typescript
// Before
<button className="...">Click</button>

// After
<Button 
  variant="primary"
  size="lg"
  onClick={() => {}}
>
  Click
</Button>
```

### Input
```typescript
// Before
<input type="text" />

// After
<Input 
  type="text"
  placeholder="..."
  error={errorMessage}
/>
```

## File Organization Benefits

### Before
```
components/
├── ArticalList.tsx (typo)
├── ArticleCard.tsx
├── BlogForm.tsx
├── Modal.tsx
├── Nav.tsx
├── PeopleTpFollow.tsx (typo)
├── TopicList.tsx
├── TrendsList.tsx
└── UserCard.tsx
```

**Issues**:
- No clear organization
- Typos in filenames
- Difficult to navigate

### After
```
components/
├── blog/
│   ├── ArticleCard.tsx
│   ├── ArticleList.tsx
│   └── BlogForm.tsx
├── sidebar/
│   ├── PeopleToFollow.tsx
│   ├── TopicList.tsx
│   ├── TrendsList.tsx
│   └── UserCard.tsx
└── shared/
    ├── FormComponents.tsx
    ├── Modal.tsx
    ├── Nav.tsx
    └── UIComponents.tsx
```

**Benefits**:
- Clear feature-based organization
- Easier to locate components
- Reduced cognitive load
- Scalable structure

## Performance Improvements

1. **Type Safety**: Catch errors at compile time
2. **Code Reusability**: Shared components reduce duplication
3. **Better Bundling**: Organized imports aid tree-shaking
4. **Consistent Styling**: Shared UI components ensure visual consistency

## Testing Components

### Testing Blog Creation
```typescript
const { addBlog } = useBlogs();
addBlog({
  id: 1,
  title: "Test Blog",
  description: "Test Description",
  image: "https://...",
  time: "2026-05-24"
});
// Blog is automatically saved to localStorage
```

### Testing Search
```typescript
import { useBlogSearch } from "./hooks";

const blogs: Blog[] = [...];
const results = useBlogSearch(blogs, "react");
expect(results).toHaveLength(2);
```

### Testing Validation
```typescript
import { validateBlog } from "./utils/validation";

const errors = validateBlog({ title: "Hi", description: "", image: "", time: "" });
expect(errors).toContain("Title must be at least 3 characters");
expect(errors).toContain("Description is required");
```

## Troubleshooting

### Import Error: "Cannot find module"
**Solution**: Check the new folder structure
- Components moved to `components/blog/`, `components/sidebar/`, `components/shared/`
- Use path auto-completion in your IDE

### Property Error: "desctipition"
**Solution**: Rename to `description`
```typescript
// ❌ Old
blog.desctipition

// ✅ New
blog.description
```

### Modal Not Opening
**Solution**: Ensure state is passed correctly
```typescript
const { isOpen, open, close } = useModal();

<button onClick={open}>Open Modal</button>
{isOpen && <Modal onClose={close}>...</Modal>}
```

## Future Improvements Ready

The refactored structure supports:
- 🎨 Dark mode (via Tailwind config)
- 🏷️ Blog categories (field exists in Blog type)
- 👍 Likes persistence (field exists)
- 💬 Comments system (extensible architecture)
- 🔐 Authentication (context-ready)
- 📱 Mobile app (reusable components)

---

For questions or issues with the refactoring, refer to `REFACTORING_GUIDE.md` or `REFACTORING_SUMMARY.md`.
