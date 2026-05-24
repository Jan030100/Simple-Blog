# Blog Application - Refactored Architecture

## Overview
This is a refactored React + TypeScript + Vite blog application with improved architecture, type safety, and features.

## Project Structure

```
src/
├── components/
│   ├── blog/                    # Blog-related components
│   │   ├── ArticleCard.tsx      # Individual blog card
│   │   ├── ArticleList.tsx      # List of blogs with search
│   │   └── BlogForm.tsx         # Blog creation/editing form
│   ├── sidebar/                 # Sidebar components
│   │   ├── PeopleToFollow.tsx   # People to follow section
│   │   ├── TrendsList.tsx       # Today's trends section
│   │   ├── TopicList.tsx        # Topic suggestions
│   │   └── UserCard.tsx         # User card component
│   └── shared/                  # Shared/reusable components
│       ├── FormComponents.tsx   # Input, SearchInput
│       ├── Modal.tsx            # Modal dialog
│       ├── Nav.tsx              # Navigation bar
│       └── UIComponents.tsx     # Card, Button
├── constants/
│   ├── index.ts                 # App constants
│   └── mockData.ts              # Mock data (people, trends, topics)
├── hooks/
│   ├── index.ts                 # Exports
│   ├── useBlogManager.ts        # Blog management hooks
│   ├── useFormInput.ts          # Form input state management
│   └── useModal.ts              # Modal state management
├── shared/
│   └── BlogContext.tsx          # Global blog context with localStorage
├── types/
│   ├── index.ts                 # Type exports
│   └── blog.ts                  # Blog-related types
├── utils/
│   ├── storage.ts               # localStorage utilities
│   └── validation.ts            # Form validation & helpers
├── App.tsx                      # Main app component
├── index.css                    # Global styles
├── main.tsx                     # Entry point
└── types.ts                     # Re-exports from types/
```

## Key Features

### ✨ New Features
- **Persistent Storage**: Blogs are saved to localStorage
- **Search Functionality**: Filter blogs by title or description
- **Form Validation**: Comprehensive validation with error messages
- **Improved UX**: Better loading states, error handling, and user feedback
- **Responsive Design**: Sidebar is hidden on smaller screens (lg breakpoint)
- **Enhanced Components**: Reusable UI components with consistent styling

### 🏗️ Architecture Improvements
- **Better Type Safety**: Comprehensive TypeScript interfaces
- **Custom Hooks**: Modular hook-based state management
- **Separation of Concerns**: Components, utilities, constants, types organized logically
- **Reusable Components**: Shared UI components for consistency
- **Utility Functions**: Validation, storage, and formatting utilities

### 🐛 Bug Fixes
- Fixed typo: `ArticalList` → `ArticleList`
- Fixed typo: `desctipition` → `description`
- Fixed typo: `PeopleTpFollow` → `PeopleToFollow`
- Fixed typo: `openModalForEdite` → `openModalForEdit`
- Improved error handling throughout the app
- Added fallback for broken images

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## Component Documentation

### Blog Components
- **ArticleList**: Displays blog posts with search functionality
- **ArticleCard**: Individual blog card with edit/delete/like actions
- **BlogForm**: Form for creating/editing blogs with validation

### Sidebar Components
- **PeopleToFollow**: List of users to follow with toggle functionality
- **TrendsList**: Display of trending topics
- **TopicList**: Topic suggestions with selection state

### Shared Components
- **Modal**: Reusable modal dialog with customizable title
- **Button**: Styled button with variants (primary, secondary, danger, outline)
- **Card**: Reusable card container with shadow and hover effects
- **Input/SearchInput**: Form inputs with optional icons and error messages
- **Nav**: Navigation bar with search (placeholder integration ready)

## Hooks

### useBlogManager
Manages blog CRUD operations with localStorage persistence:
```typescript
const { blogs, loading, error, addBlog, updateBlog, deleteBlog } = useBlogManager();
```

### useBlogSearch
Filters blogs by search term:
```typescript
const filteredBlogs = useBlogSearch(blogs, searchTerm);
```

### useModal
Manages modal open/close state:
```typescript
const { isOpen, open, close, toggle } = useModal();
```

### useFormInput
Manages form input state:
```typescript
const { value, setValue, reset, set } = useFormInput(initialValue);
```

## Type Definitions

### Blog
```typescript
interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  author?: string;
  category?: string;
  likes?: number;
}
```

### User, Trend, Topic
See `src/types/blog.ts` for complete type definitions.

## Utilities

### storage.ts
- `saveBlogs()`: Save blogs to localStorage
- `getBlogs()`: Retrieve blogs from localStorage
- `clearBlogs()`: Clear all blogs from localStorage

### validation.ts
- `validateBlog()`: Validate blog data and return errors
- `formatDate()`: Format date strings for display

## Constants

### STORAGE_KEYS
Keys for localStorage operations

### MODAL_TYPES
Modal type identifiers (create, edit, delete)

### PLACEHOLDERS
Form input placeholders

### MOCK_DATA
Mock data for people to follow, trends, and topics

## Future Improvements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Image upload functionality
- [ ] Blog categories and filtering
- [ ] Like/bookmark functionality with persistence
- [ ] Comments system
- [ ] Dark mode
- [ ] Mobile app version

## Dependencies

- **React**: UI framework
- **React DOM**: DOM rendering
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **React Icons**: Icon library
- **TypeScript**: Type safety

## Notes

Old component files in `src/components/` root directory should be removed as they've been reorganized into subdirectories (blog/, sidebar/, shared/).

---

Last Updated: May 2026
