<div align="center">
<img src="assets/olova.png" width="150" alt="OlovaJS Logo">
</div>

# 🚀 Olova Framework Documentation

> A lightweight JavaScript framework for building web applications with JSX

## 🌟 What is Olova?

Olova is a simple yet powerful JavaScript framework that lets you build web
applications using JSX. It directly manipulates the DOM without a Virtual DOM,
making it lightweight and straightforward to use.

## ⚡ Quick Start

### Installation

Get started with a single command:

```bash
npm create vilo@latest
```

This command will set up a new Olova project, similar to how Vite works. You can
use it to create an Olova template or install Olova in an existing project.

Alternatively, you can install Olova directly:

```bash
npm install olova
```

### Your First Olova App

```jsx
import Olova from "olova";

const App = () => {
  return (
    <>
      <h1>Welcome to Olova! 🎉</h1>
      <p>Building web apps made simple.</p>
    </>
  );
};
```

## 🎯 Core Concepts

### Built-in Hooks

Olova provides several essential hooks for building dynamic applications:

```jsx
import {
  State, // Manage component state
  Effect, // Handle side effects
  Memo, // Memoize values
  Ref, // Reference DOM elements
  Context, // Share data between components
  Callback, // Memoize functions
} from "olova";
```

### Default Exports

Olova comes with two built-in utilities:

```jsx
import Olova, { h, Fragment } from "olova";

// h: Element generator (automatically used for JSX transformation)
// Fragment: Wrapper for multiple elements, can be used as <></> or <Fragment></Fragment>
```

## 💫 Using Hooks

### State Management

```jsx
import Olova, { State } from "olova";

const Counter = () => {
  const [count, setCount] = State(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
```

### Side Effects

```jsx
import Olova, { Effect, State } from "olova";

const DataFetcher = () => {
  const [data, setData] = State(null);

  Effect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []); // Empty array means run once on mount

  return <div>{data ? "Data loaded!" : "Loading..."}</div>;
};
```

### Using References

```jsx
import Olova, { Ref } from "olova";

const FocusInput = () => {
  const inputRef = Ref(null);

  return <input ref={inputRef} onFocus={() => console.log("Input focused!")} />;
};
```

### Memoization

```jsx
import Olova, { Memo, State } from "olova";

const ExpensiveComponent = ({ data }) => {
  const processedData = Memo(() => {
    // Expensive computation here
    return data.map((item) => item * 2);
  }, [data]);

  return <div>{processedData.join(", ")}</div>;
};
```

## 🎨 Styling in Olova

Olova supports all standard CSS approaches:

### CSS Imports

```jsx
import "./styles.css";

const StyledComponent = () => (
  <div className="my-component">Styled content</div>
);
```

### CSS Modules

```jsx
import styles from "./Component.module.css";

const ModuleStyledComponent = () => (
  <div className={styles.container}>Module styled content</div>
);
```

### Inline Styles

```jsx
const InlineStyledComponent = () => (
  <div style={{ padding: "20px", color: "blue" }}>Inline styled content</div>
);
```

## 🔮 How Olova Works

1. **Direct DOM Manipulation**

1. Olova directly updates the DOM without a Virtual DOM
1. Efficient updates when state changes
1. Lightweight and fast performance

1. **JSX Transformation**

1. Uses the `h` function to transform JSX into DOM elements
1. Handles event binding automatically
1. Manages component lifecycle efficiently

## 📚 Best Practices

### Component Structure

```jsx
// Good: Single responsibility component
const UserProfile = ({ user }) => (
  <div className="profile">
    <img src={user.avatar || "/placeholder.svg"} alt={user.name} />
    <h2>{user.name}</h2>
  </div>
);

// Better: Using Fragment for multiple elements
const UserCard = ({ user }) => (
  <>
    <UserProfile user={user} />
    <UserStats stats={user.stats} />
  </>
);
```

### Hook Usage

```jsx
// Effective use of multiple hooks
const UserDashboard = () => {
  const [user, setUser] = State(null);
  const userCache = Ref({});

  Effect(() => {
    // Side effect cleanup example
    return () => {
      userCache.current = {};
    };
  }, []);

  return <div>Dashboard Content</div>;
};
```

## 🚀 Coming Soon

- More built-in hooks
- Enhanced development tools
- Additional utility functions
- Performance optimizations

## 🤝 Contributing

We welcome contributions! Whether it's:

- Bug reports
- Feature requests
- Documentation improvements
- Pull requests

## 📖 Examples

Find more examples in our [GitHub repository](https://github.com/olovajs/olova).

## 🛠 Using Vilo

Vilo is a project creation tool for Olova, similar to Vite. You can use it to
quickly set up new Olova projects or add Olova to existing projects.

To create a new Olova project:

```bash
npm create vilo@latest my-olova-app
cd my-olova-app
npm install
npm run dev
```

This will set up a new Olova project with a basic template, ready for you to
start developing.

---

Made with simplicity in mind 🌟
