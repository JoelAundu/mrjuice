# 🍊 MR JUICE UI

**A vibrant, modern, and reusable React component library built with Vite, Tailwind CSS, and TypeScript.**

Welcome to **MR JUICE UI**, a carefully crafted UI component library designed to bring a splash of creativity and functionality to your React applications. Whether you're building a sleek landing page, a dynamic dashboard, or a full-fledged web app, MR JUICE UI provides a collection of customizable, accessible, and visually appealing components to accelerate your development process.

---

## ✨ Features

- **Modern Design**: Components styled with Tailwind CSS for a clean, responsive, and consistent look across devices.
- **Customizable**: Easily override styles using Tailwind classes or inline CSS to match your brand’s aesthetic.
- **TypeScript Support**: Built with TypeScript for type safety and better developer experience.
- **Fast Development**: Powered by Vite for lightning-fast builds and Hot Module Replacement (HMR).
- **Accessible**: Designed with accessibility in mind, ensuring components are usable by everyone.
- **Modular**: Each component is self-contained, making it easy to import and use only what you need.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 16 or higher.
- **npm** or **yarn**: For package management.

### Installation

1. Install the `mrjuice-ui` package in your React project:

   ```bash
   npm install mrjuice-ui
   ```

   Or, if you’re using Yarn:

   ```bash
   yarn add mrjuice-ui
   ```

2. Import the library’s CSS to apply Tailwind styles and component-specific styles:

   ```jsx
   import "mrjuice-ui/dist/index.css";
   ```

3. Start using the components in your project! See the [Usage](#usage) section for examples.

---

## 🛠️ Usage

MR JUICE UI provides a growing collection of components that you can easily integrate into your React applications. Below are examples of the currently available components.

### Button Component

The `Button` component is a versatile, customizable button with multiple variants, sizes, and states. It’s perfect for actions like submitting forms, triggering modals, or navigating pages.

#### Example

```jsx
import { Button } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

function App() {
  return (
    <div>
      <Button
        variant="primary"
        size="md"
        onClick={() => alert("Clicked!")}
      >
        Primary Button
      </Button>
      <Button
        variant="danger"
        size="sm"
        className="ml-2"
        disabled
      >
        Danger Button (Disabled)
      </Button>
    </div>
  );
}

export default App;
```

#### Props

| Prop         | Type                          | Default     | Description                                      |
|--------------|-------------------------------|-------------|--------------------------------------------------|
| `variant`    | `primary` \| `secondary` \| `danger` \| `slate` \| `outline` \| `ocean` \| `coral` \| `sky` \| `storm` \| `crimson` \| `lime` | - | The button’s style variant. |
| `size`       | `sm` \| `md` \| `lg`         | -           | The button’s size.                              |
| `children`   | `React.ReactNode`            | -           | The content inside the button.                  |
| `className`  | `string`                     | `""`        | Additional Tailwind classes for customization.  |
| `onClick`    | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Click handler for the button. |
| `disabled`   | `boolean`                    | `false`     | Disables the button.                            |
| `type`       | `button` \| `submit` \| `reset` | `button` | The button’s HTML type attribute.            |

#### Variants

- **primary**: A vibrant blue button for primary actions.
- **secondary**: A subtle gray button for secondary actions.
- **danger**: A red button for destructive actions.
- **slate**: A dark slate button with a disabled state (e.g., for "Continue" actions).
- **outline**: A transparent button with a border (e.g., for "Reset" actions).
- **ocean**, **coral**, **sky**, **storm**, **crimson**, **lime**: Colorful variants for creative use cases.

#### Customization

You can override the button’s styles using Tailwind classes or inline CSS. Note that since the button uses `!important` in its styles, you’ll need to use `!important` in your Tailwind classes for overrides:

```jsx
<Button
  variant="primary"
  size="md"
  className="!bg-yellow-200 hover:!bg-yellow-800"
>
  Custom Yellow Button
</Button>
```

### AuthButtonGroup Component

The `AuthButtonGroup` component is a stylish, rounded container with a "Log in" link and a "Get Started" button, perfect for navigation bars or authentication flows.

#### Example

```jsx
import { AuthButtonGroup } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

function App() {
  const handleLogin = () => {
    console.log("Logging in...");
  };

  const handleGetStarted = () => {
    console.log("Getting started...");
  };

  return (
    <div>
      <AuthButtonGroup
        onLoginClick={handleLogin}
        onGetStartedClick={handleGetStarted}
        loginLabel="Sign In"
        getStartedLabel="Join Now"
      />
    </div>
  );
}

export default App;
```

#### Props

| Prop                | Type       | Default       | Description                                      |
|---------------------|------------|---------------|--------------------------------------------------|
| `onLoginClick`      | `() => void` | -           | Click handler for the "Log in" link.            |
| `onGetStartedClick` | `() => void` | -           | Click handler for the "Get Started" button.     |
| `loginLabel`        | `string`   | `"Log in"`    | Label for the login link.                       |
| `getStartedLabel`   | `string`   | `"Get Started"` | Label for the get started button.             |
| `className`         | `string`   | `""`          | Additional Tailwind classes for the container.  |
| `loginClassName`    | `string`   | `""`          | Additional Tailwind classes for the login link. |
| `getStartedClassName` | `string` | `""`          | Additional Tailwind classes for the get started button. |

#### Customization

You can customize the `AuthButtonGroup` using Tailwind classes:

```jsx
<AuthButtonGroup
  onLoginClick={() => console.log("Login")}
  onGetStartedClick={() => console.log("Get Started")}
  className="bg-gray-100"
  loginClassName="text-blue-500 hover:text-blue-700"
  getStartedClassName="bg-blue-500 hover:bg-blue-600"
/>
```

---

## 📦 Component Showcase

We’re actively building and expanding MR JUICE UI! Check out the [Button Showcase](#) (coming soon with images) to see all the components in action.

### Available Components

- **Button**: A versatile button with multiple variants and sizes.
- **AuthButtonGroup**: A rounded container with login and signup actions.

More components are on the way! Stay tuned for inputs, cards, modals, and more.

---

## 🧩 Development Setup

If you’d like to contribute to MR JUICE UI or run the development environment locally, follow these steps.

### Prerequisites

- **Node.js**: Version 16 or higher.
- **npm** or **yarn**: For package management.

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mrjuice-ui.git
   cd mrjuice-ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Or with Yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   This will launch the Vite development server with HMR, and you can explore the component showcase at `http://localhost:5173`.

### Building for Production

To build the library for production:

```bash
npm run build
```

This will generate the `dist` folder with the compiled library, ready for publishing to npm.

---

## 🔧 Expanding the ESLint Configuration

For production applications, we recommend enabling type-aware lint rules with TypeScript. The project is already set up with TypeScript, but you can further enhance the ESLint configuration by adding `typescript-eslint`:

1. Install the necessary packages:

   ```bash
   npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```

2. Update your `.eslintrc` file to include type-aware rules:

   ```json
   {
     "parser": "@typescript-eslint/parser",
     "plugins": ["@typescript-eslint"],
     "extends": [
       "eslint:recommended",
       "plugin:@typescript-eslint/recommended",
       "plugin:@typescript-eslint/recommended-requiring-type-checking"
     ],
     "parserOptions": {
       "project": "./tsconfig.json"
     }
   }
   ```

For more details, check out the [TypeScript ESLint documentation](https://typescript-eslint.io).

---

## 📖 Vite Plugins

MR JUICE UI uses Vite for its build system, leveraging the following plugins for an optimal development experience:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Uses [Babel](https://babeljs.io/) for Fast Refresh, enabling instant updates during development.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Uses [SWC](https://swc.rs/) for Fast Refresh, offering a faster alternative to Babel.

You can switch between these plugins by updating the `vite.config.js` file. See the [Vite documentation](https://vitejs.dev) for more details.

---

## 🤝 Contributing

We welcome contributions to MR JUICE UI! Whether it’s adding new components, fixing bugs, or improving documentation, your help is appreciated.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the project’s ESLint and TypeScript guidelines.

---

## 📸 Screenshots

*Coming soon!* We’re working on adding visual examples of all components, including the Button and AuthButtonGroup, to help you see MR JUICE UI in action.

---

## 📜 License

MR JUICE UI is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it in your projects.

---

## 🌟 About the Team

MR JUICE UI is built with ❤️ by a passionate team of developers who love creating tools that make development faster, easier, and more fun. Follow us on [GitHub](https://github.com/JoelAundu) for updates!

---

**Let’s build something amazing together! 🍊**