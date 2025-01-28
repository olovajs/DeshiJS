# 🚀 Olova Framework Documentation

> A modern, lightweight JavaScript framework for building web applications with
> JSX

## What is Olova?

Olova is a performant JavaScript framework that enables building web
applications using JSX. It features direct DOM manipulation without a Virtual
DOM layer, offering excellent performance and developer experience.

## ⚡ Quick Start

### Installation

```bash
# Create a new project (recommended)
npm create vilo@latest

# Or install directly in an existing project
npm install olova
```

### Basic Example

```jsx
import Olova from "olova";

const App = () => (
  <>
    <h1>Welcome to Olova! 🎉</h1>
    <p>Modern web development, simplified.</p>
  </>
);
```

## 🎯 Core Features

### Hooks API

```jsx
import {
  $state, // Reactive state management
  $effect, // Side effect handling
  $memo, // Value memoization
  $callback, // Function memoization
  $reducer, // Complex state management
  $ref, // DOM references & mutable values
  createContext, // Cross-component state sharing
  memo, // Component memoization
} from "olova";
```

### State Management Example

```jsx
const Counter = () => {
  const [count, setCount] = $state(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
```

### Effects & Lifecycle

```jsx
const DataFetcher = () => {
  const [data, setData] = $state(null);
  const [loading, setLoading] = $state(true);

  $effect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      setData(null);
      setLoading(true);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;

  return <div>{/* Render data */}</div>;
};
```

## 🎨 Styling Solutions

```jsx
// CSS Modules (Recommended)
import styles from "./Component.module.css";
const Component = () => <div className={styles.container}>...</div>;

// Global CSS
import "./styles.css";
const Component = () => <div className="container">...</div>;

// Inline Styles (Use sparingly)
const Component = () => (
  <div
    style={{
      display: "flex",
      gap: "1rem",
      padding: "1rem",
    }}
  >
    ...
  </div>
);
```

## 🔮 Architecture

- **Direct DOM Updates**: No Virtual DOM overhead
- **Fine-grained Reactivity**: Updates only what changes
- **Small Bundle Size**: Minimal framework code
- **TypeScript Support**: Full type safety available

## 📚 Best Practices

### Component Organization

```jsx
// Single Responsibility Components
const UserAvatar = ({ src, alt }) => (
  <img src={src || "/default-avatar.png"} alt={alt} className={styles.avatar} />
);

const UserProfile = ({ user }) => (
  <div className={styles.profile}>
    <UserAvatar src={user.avatarUrl} alt={user.name} />
    <h2>{user.name}</h2>
    <p>{user.bio}</p>
  </div>
);
```

### Hook Guidelines

- Place hooks at the top level of components
- Keep dependencies arrays minimal and specific
- Use cleanup functions in effects when needed
- Prefer `$callback` for event handlers passed as props

## 🛠 Development Tools

```bash
# Create a new project
npm create vilo@latest my-app

# Development
cd my-app
npm run dev

# Build for production
npm run build
```

- Bug Reports
- Feature Requests
- Pull Requests
- Documentation Improvements

## 📖 Resources

- [GitHub Repository](https://github.com/olovajs/olova)
- [API Reference](https://olova.dev/api)
- [Examples](https://olova.dev/examples)
- [Community Discord](https://discord.gg/olova)

---

Built with simplicity and performance in mind 🌟
