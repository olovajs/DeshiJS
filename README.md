<div align="center">
<img src="assets/olova.png" width="150" alt="OlovaJS Logo">

# OlovaJS

### A Modern, Lightweight JavaScript Framework for Intuitive Web Development

[![npm](https://img.shields.io/npm/v/olova)](https://www.npmjs.com/package/olova)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen)](https://olova.js.org/Introduction.html)
[![Twitter Follow](https://img.shields.io/twitter/follow/olova_js?style=social)](https://x.com/olova_js)

[Documentation](https://olova.js.org/Introduction.html) | [Discord](https://discord.gg/ZUcKggZhga)

</div>

## 🌟 What is Olova?

Olova (meaning "simple" in Tsonga) is a lightweight, modern JavaScript framework that streamlines web development while maintaining powerful functionality. It provides a seamless development experience whether you prefer working with HTML, JavaScript, or functional components.

## 📦 Installation

```bash
npm create vilo@latest
```

## 🚀 Quick Start

```html
<div id="app">
  <template>
    <div>
      <div>{ count }</div>
      <button @click="increment">Increment</button>
    </div>
  </template>
</div>

<script type="module">
  import { createApp } from "olova";
  const app = createApp({
    data: {
      count: 0,
    },
    methods: {
      increment() {
        this.count++;
      },
    },
  });
  app.mount("#app");
</script>
```

## ✨ Key Features

- **Dual Rendering Approaches**
  - HTML-first development
  - JavaScript-driven components
  - Functional programming style support
- **Built-in Reactivity System**
  - Automatic UI synchronization
  - Efficient state management
  - Real-time updates
- **Developer-Friendly**
  - Minimal learning curve
  - Flexible architecture
  - Clean, intuitive templates

## 📚 Documentation

Visit our comprehensive documentation at [olova.js.org](https://olova.js.org/Introduction.html) to learn more about:

- Getting Started Guide
- Core Concepts
- API Reference
- Best Practices

## 💡 Why Choose Olova?

- **Simplicity First**: True to its name, Olova prioritizes simplicity without sacrificing functionality
- **Flexible Architecture**: Choose your preferred coding style - HTML, JavaScript, or functional
- **Performance Focused**: Lightweight core with powerful reactive capabilities
- **Modern Development**: Built with modern web development practices in mind

## 🤝 Contributing

We welcome contributions! Please feel free to submit a PR or open an issue.

## 🌐 Community

Join our growing community:

- [Discord](https://discord.gg/ZUcKggZhga) - Get help and discuss features
- [X (Twitter)](https://x.com/olova_js) - Stay updated with latest news
- [Website](https://olova.js.org) - Official website and documentation

## 📄 License

[MIT License](LICENSE) - Feel free to use Olova in your projects!
