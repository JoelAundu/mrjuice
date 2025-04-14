🍊 MR JUICE UI
A vibrant, modern, and reusable React component library built with Vite, Tailwind CSS, and TypeScript.
Welcome to MR JUICE UI, a carefully crafted UI component library designed to bring a splash of creativity and functionality to your React applications. Whether you're building a sleek landing page, a dynamic dashboard, or a full-fledged web app, MR JUICE UI provides a collection of customizable, accessible, and visually appealing components to accelerate your development process.

✨ Features

Modern Design: Components styled with Tailwind CSS for a clean, responsive, and consistent look across devices.
Customizable: Easily override styles using Tailwind classes or inline CSS to match your brand’s aesthetic.
TypeScript Support: Built with TypeScript for type safety and better developer experience.
Fast Development: Powered by Vite for lightning-fast builds and Hot Module Replacement (HMR).
Accessible: Designed with accessibility in mind, ensuring components are usable by everyone.
Modular: Each component is self-contained, making it easy to import and use only what you need.

🚀 Getting Started
Prerequisites

Node.js: Version 16 or higher.
npm or yarn: For package management.

Installation

Install the mrjuice-ui package in your React project:
npm install mrjuice-ui

Or, if you’re using Yarn:
yarn add mrjuice-ui

Import the library’s CSS to apply Tailwind styles and component-specific styles:
import "mrjuice-ui/dist/index.css";

Start using the components in your project! See the Usage section for examples.

🛠️ Usage
MR JUICE UI provides a growing collection of components that you can easily integrate into your React applications. Below are examples of the currently available components.
Button Component
The Button component is a versatile, customizable button with multiple variants, sizes, and states. It’s perfect for actions like submitting forms, triggering modals, or navigating pages.
Example
import { Button } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

function App() {
return (
<div>
<Button
variant="primary"
size="md"
onClick={() => alert("Clicked!")} >
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

Props

Prop
Type
Default
Description

variant
primary | secondary | danger | slate | outline | ocean | coral | sky | storm | crimson | lime

- The button’s style variant.

size
sm | md | lg

- The button’s size.

children
React.ReactNode

- The content inside the button.

className
string
""
Additional Tailwind classes for customization.

onClick
(event: React.MouseEvent<HTMLButtonElement>) => void

- Click handler for the button.

disabled
boolean
false
Disables the button.

type
button | submit | reset
button
The button’s HTML type attribute.

Variants

primary: A vibrant blue button for primary actions.
secondary: A subtle gray button for secondary actions.
danger: A red button for destructive actions.
slate: A dark slate button with a disabled state (e.g., for "Continue" actions).
outline: A transparent button with a border (e.g., for "Reset" actions).
ocean, coral, sky, storm, crimson, lime: Colorful variants for creative use cases.

Customization
You can override the button’s styles using Tailwind classes or inline CSS. Note that since the button uses !important in its styles, you’ll need to use !important in your Tailwind classes for overrides:
<Button
variant="primary"
size="md"
className="!bg-yellow-200 hover:!bg-yellow-800"

> Custom Yellow Button
> </Button>

AuthButtonGroup Component
The AuthButtonGroup component is a stylish, rounded container with a "Log in" link and a "Get Started" button, perfect for navigation bars or authentication flows.
Example
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

Props

Prop
Type
Default
Description

onLoginClick
() => void

- Click handler for the "Log in" link.

onGetStartedClick
() => void

- Click handler for the "Get Started" button.

loginLabel
string
"Log in"
Label for the login link.

getStartedLabel
string
"Get Started"
Label for the get started button.

className
string
""
Additional Tailwind classes for the container.

loginClassName
string
""
Additional Tailwind classes for the login link.

getStartedClassName
string
""
Additional Tailwind classes for the get started button.

Customization
You can customize the AuthButtonGroup using Tailwind classes:
<AuthButtonGroup
onLoginClick={() => console.log("Login")}
onGetStartedClick={() => console.log("Get Started")}
className="bg-gray-100"
loginClassName="text-blue-500 hover:text-blue-700"
getStartedClassName="bg-blue-500 hover:bg-blue-600"
/>

📦 Component Showcase
We’re actively building and expanding MR JUICE UI! Check out the Button Showcase (coming soon with images) to see all the components in action.
Available Components

Button: A versatile button with multiple variants and sizes.
AuthButtonGroup: A rounded container with login and signup actions.
Input: A flexible text input with support for icons and labels (inside or outside).
TextInput: A simple text input with customizable labels (inside or outside).
NumberInput: A number input with increment and decrement buttons.
SelectInput: A dropdown select input for choosing from a list of options.
TextareaInput: A multi-line textarea for longer text input.
CheckboxInput: A checkbox with a label for boolean selections.
MenuList: A menu component with support for icons, active/inactive states, and customizable styling.
SideNav: A sidebar navigation component with expand/collapse functionality, supporting sections like inputs and menus.

Input Component
The Input component is a versatile text input that supports icons (left or right) and labels (inside as a placeholder or outside). It’s ideal for search bars, forms, or any input field requiring additional visual cues.
Example
import { Input } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

// Placeholder icon (replace with an actual icon library in a real project)
const SearchIcon = () => <span>🔍</span>;

function App() {
const [searchValue, setSearchValue] = React.useState("");

return (
<div>
<Input
label="Search"
leftIcon={<SearchIcon />}
value={searchValue}
onChange={(e) => setSearchValue(e.target.value)}
className="!bg-gray-50"
/>
</div>
);
}

export default App;

Props

Prop
Type
Default
Description

placeholder
string
""
Placeholder text when label is outside.

label
string
""
Label text (used as placeholder if inside).

labelOutside
boolean
false
If true, label is displayed above the input.

value
string
""
The input’s value (controlled).

onChange
(e: React.ChangeEvent<HTMLInputElement>) => void

- Change handler for the input.

leftIcon
React.ReactNode

- Icon to display on the left side.

rightIcon
React.ReactNode

- Icon to display on the right side.

className
string
""
Additional Tailwind classes for the container.

inputClassName
string
""
Additional Tailwind classes for the input.

labelClassName
string
""
Additional Tailwind classes for the label.

iconClassName
string
""
Additional Tailwind classes for the icons.

style
React.CSSProperties
{}
Inline styles for the container.

inputStyle
React.CSSProperties
{}
Inline styles for the input.

labelStyle
React.CSSProperties
{}
Inline styles for the label.

iconStyle
React.CSSProperties
{}
Inline styles for the icons.

Customization
You can customize the Input using Tailwind classes or inline CSS:
<Input
label="Search"
leftIcon={<SearchIcon />}
className="!bg-blue-50"
inputClassName="!text-blue-600 !border-blue-300"
labelClassName="!text-blue-600"
/>

TextInput Component
The TextInput component is a simplified text input for basic form fields, supporting labels inside (as a placeholder) or outside.
Example
import { TextInput } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

function App() {
const [username, setUsername] = React.useState("");

return (
<div>
<TextInput
label="Username"
labelOutside
value={username}
onChange={(e) => setUsername(e.target.value)}
className="!bg-gray-50"
/>
</div>
);
}

export default App;

Props

Prop
Type
Default
Description

placeholder
string
""
Placeholder text when label is outside.

label
string
""
Label text (used as placeholder if inside).

labelOutside
boolean
false
If true, label is displayed above the input.

value
string
""
The input’s value (controlled).

onChange
(e: React.ChangeEvent<HTMLInputElement>) => void

- Change handler for the input.

className
string
""
Additional Tailwind classes for the container.

inputClassName
string
""
Additional Tailwind classes for the input.

labelClassName
string
""
Additional Tailwind classes for the label.

style
React.CSSProperties
{}
Inline styles for the container.

inputStyle
React.CSSProperties
{}
Inline styles for the input.

labelStyle
React.CSSProperties
{}
Inline styles for the label.

NumberInput Component
The NumberInput component is a number input with increment and decrement buttons, perfect for quantity selectors or numeric forms.
Example
import { NumberInput } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

function App() {
const [quantity, setQuantity] = React.useState(1);

return (
<div>
<NumberInput
label="Quantity"
value={quantity}
onChange={(value) => setQuantity(value)}
min={1}
max={10}
className="!bg-gray-50"
/>
</div>
);
}

export default App;

Props

Prop
Type
Default
Description

label
string
""
Label text displayed above the input.

value
number
0
The input’s value (controlled).

onChange
(value: number) => void

- Change handler for the input.

min
number
0
Minimum value for the input.

max
number
100
Maximum value for the input.

className
string
""
Additional Tailwind classes for the container.

inputClassName
string
""
Additional Tailwind classes for the input.

labelClassName
string
""
Additional Tailwind classes for the label.

buttonClassName
string
""
Additional Tailwind classes for the buttons.

style
React.CSSProperties
{}
Inline styles for the container.

inputStyle
React.CSSProperties
{}
Inline styles for the input.

labelStyle
React.CSSProperties
{}
Inline styles for the label.

buttonStyle
React.CSSProperties
{}
Inline styles for the buttons.

SelectInput Component
The SelectInput component is a dropdown select input for choosing from a list of options, useful for forms or filters.
Example
import { SelectInput } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

function App() {
const [role, setRole] = React.useState("developer");

const roles = [
{ value: "developer", label: "Developer" },
{ value: "designer", label: "Designer" },
{ value: "manager", label: "Manager" },
];

return (
<div>
<SelectInput
label="Role"
options={roles}
value={role}
onChange={(value) => setRole(value)}
className="!bg-gray-50"
/>
</div>
);
}

export default App;

Props

Prop
Type
Default
Description

label
string
""
Label text displayed above the select.

options
{ value: string, label: string }[]
[]
Array of options for the dropdown.

value
string
""
The selected value (controlled).

onChange
(value: string) => void

- Change handler for the select.

className
string
""
Additional Tailwind classes for the container.

selectClassName
string
""
Additional Tailwind classes for the select.

labelClassName
string
""
Additional Tailwind classes for the label.

style
React.CSSProperties
{}
Inline styles for the container.

selectStyle
React.CSSProperties
{}
Inline styles for the select.

labelStyle
React.CSSProperties
{}
Inline styles for the label.

TextareaInput Component
The TextareaInput component is a multi-line textarea for longer text input, such as comments or descriptions.
Example
import { TextareaInput } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

function App() {
const [bio, setBio] = React.useState("");

return (
<div>
<TextareaInput
label="Bio"
value={bio}
onChange={(e) => setBio(e.target.value)}
rows={4}
className="!bg-gray-50"
/>
</div>
);
}

export default App;

Props

Prop
Type
Default
Description

label
string
""
Label text displayed above the textarea.

value
string
""
The textarea’s value (controlled).

onChange
(e: React.ChangeEvent<HTMLTextAreaElement>) => void

- Change handler for the textarea.

rows
number
4
Number of rows for the textarea.

className
string
""
Additional Tailwind classes for the container.

textareaClassName
string
""
Additional Tailwind classes for the textarea.

labelClassName
string
""
Additional Tailwind classes for the label.

style
React.CSSProperties
{}
Inline styles for the container.

textareaStyle
React.CSSProperties
{}
Inline styles for the textarea.

labelStyle
React.CSSProperties
{}
Inline styles for the label.

CheckboxInput Component
The CheckboxInput component is a checkbox with a label, useful for boolean selections like terms agreement or toggles.
Example
import { CheckboxInput } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

function App() {
const [agree, setAgree] = React.useState(false);

return (
<div>
<CheckboxInput
label="Agree to Terms"
checked={agree}
onChange={(checked) => setAgree(checked)}
className="!bg-gray-50"
/>
</div>
);
}

export default App;

Props

Prop
Type
Default
Description

label
string

- Label text displayed next to the checkbox.

checked
boolean
false
The checkbox’s checked state (controlled).

onChange
(checked: boolean) => void

- Change handler for the checkbox.

className
string
""
Additional Tailwind classes for the container.

inputClassName
string
""
Additional Tailwind classes for the checkbox.

labelClassName
string
""
Additional Tailwind classes for the label.

style
React.CSSProperties
{}
Inline styles for the container.

inputStyle
React.CSSProperties
{}
Inline styles for the checkbox.

labelStyle
React.CSSProperties
{}
Inline styles for the label.

MenuList Component
The MenuList component is a menu component that supports items with icons, active/inactive states, and customizable styling. It’s perfect for navigation menus or sidebars.
Example
import { MenuList } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

// Placeholder icons
const HomeIcon = () => <span>🏠</span>;

function App() {
const [activeIndex, setActiveIndex] = React.useState(-1);

const menuItems = [
{ label: "Home", icon: <HomeIcon /> },
{ label: "Projects", icon: <HomeIcon /> },
];

return (
<div>
<MenuList
items={menuItems}
activeIndex={activeIndex}
onItemClick={(index) => setActiveIndex(index)}
className="w-full max-w-xs"
/>
</div>
);
}

export default App;

Props

Prop
Type
Default
Description

items
{ label: string, icon?: React.ReactNode }[]
[]
Array of menu items.

activeIndex
number
-1
Index of the active item.

onItemClick
(index: number) => void

- Click handler for menu items.

className
string
""
Additional Tailwind classes for the container.

itemClassName
string
""
Additional Tailwind classes for each item.

labelClassName
string
""
Additional Tailwind classes for labels.

iconClassName
string
""
Additional Tailwind classes for icons.

activeItemClassName
string
""
Additional Tailwind classes for active items.

inactiveItemClassName
string
""
Additional Tailwind classes for inactive items.

activeLabelClassName
string
""
Additional Tailwind classes for active labels.

inactiveLabelClassName
string
""
Additional Tailwind classes for inactive labels.

activeIconClassName
string
""
Additional Tailwind classes for active icons.

inactiveIconClassName
string
""
Additional Tailwind classes for inactive icons.

style
React.CSSProperties
{}
Inline styles for the container.

itemStyle
React.CSSProperties
{}
Inline styles for each item.

labelStyle
React.CSSProperties
{}
Inline styles for labels.

iconStyle
React.CSSProperties
{}
Inline styles for icons.

activeItemStyle
React.CSSProperties
{}
Inline styles for active items.

inactiveItemStyle
React.CSSProperties
{}
Inline styles for inactive items.

activeLabelStyle
React.CSSProperties
{}
Inline styles for active labels.

inactiveLabelStyle
React.CSSProperties
{}
Inline styles for inactive labels.

activeIconStyle
React.CSSProperties
{}
Inline styles for active icons.

inactiveIconStyle
React.CSSProperties
{}
Inline styles for inactive icons.

SideNav Component
The SideNav component is a sidebar navigation component with expand/collapse functionality, supporting sections like inputs and menus. It’s ideal for dashboard layouts or applications requiring persistent navigation.
Example
import { SideNav, Input, MenuList } from "mrjuice-ui";
import "mrjuice-ui/dist/index.css";

// Placeholder icons
const SearchIcon = () => <span>🔍</span>;
const HomeIcon = () => <span>🏠</span>;

function App() {
const [searchValue, setSearchValue] = React.useState("");
const [activeIndex, setActiveIndex] = React.useState(0);

const menuItems = [
{ label: "Home", icon: <HomeIcon /> },
];

return (
<div className="flex min-h-screen bg-gray-100">
<SideNav
logo={<div style={{ fontWeight: 700, fontSize: "18px" }}>SOLINK</div>}
className="!bg-white" >
<Input
label="Search"
leftIcon={<SearchIcon />}
value={searchValue}
onChange={(e) => setSearchValue(e.target.value)}
className="mb-4"
/>
<MenuList
items={menuItems}
activeIndex={activeIndex}
onItemClick={(index) => setActiveIndex(index)}
/>
</SideNav>
<div className="flex-1 p-8">
<h1 className="text-3xl font-bold">Main Content</h1>
</div>
</div>
);
}

export default App;

Props

Prop
Type
Default
Description

logo
React.ReactNode

- The logo or branding element at the top.

children
React.ReactNode

- The content inside the sidebar (e.g., menus, inputs).

className
string
""
Additional Tailwind classes for the sidebar.

style
React.CSSProperties
{}
Inline styles for the sidebar.

🧩 Development Setup
If you’d like to contribute to MR JUICE UI or run the development environment locally, follow these steps.
Prerequisites

Node.js: Version 16 or higher.
npm or yarn: For package management.

Setup

Clone the repository:
git clone https://github.com/your-username/mrjuice-ui.git
cd mrjuice-ui

Install dependencies:
npm install

Or with Yarn:
yarn install

Start the development server:
npm run dev

This will launch the Vite development server with HMR, and you can explore the component showcase at http://localhost:5173.

Building for Production
To build the library for production:

```bash
npm run build
```

This will generate the `dist` folder with the compiled library, ready for publishing to npm.

### Releasing a New Version

### Releasing a New Version

This will generate the dist folder with the compiled library, ready for publishing to npm.

- **Patch Release** (e.g., `1.0.5` → `1.0.6`): For bug fixes and small changes.
  ```bash
  npm run release:patch
  ```

  ```


npm run release:minor


Each release script will:
1. Check if the working directory is clean.
2. Bump the version in `package.json`.
3. Build the package.
4. Publish the package to npm.
5. Push the updated version and Git tag to the repository.

---

## 🔧 Expanding the ESLint Configuration

## 🔧 Expanding the ESLint Configuration

Check if the working directory is clean.
Bump the version in package.json.
Build the package.

Push the updated version and Git tag to the repository.


For production applications, we recommend enabling type-aware lint rules with TypeScript. The project is already set up with TypeScript, but you can further enhance the ESLint configuration by adding typescript-eslint:


npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin

Update your .eslintrc file to include type-aware rules:
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

For more details, check out the TypeScript ESLint documentation.
MR JUICE UI uses Vite for its build system, leveraging the following plugins for an optimal development experience:

MR JUICE UI uses Vite for its build system, leveraging the following plugins for an optimal development experience:


@vitejs/plugin-react-swc: Uses SWC for Fast Refresh, offering a faster alternative to Babel.

You can switch between these plugins by updating the vite.config.js file. See the Vite documentation for more details.
We welcome contributions to MR JUICE UI! Whether it’s adding new components, fixing bugs, or improving documentation, your help is appreciated.

We welcome contributions to MR JUICE UI! Whether it’s adding new components, fixing bugs, or improving documentation, your help is appreciated.

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -m "Add your feature").

Please ensure your code follows the project’s ESLint and TypeScript guidelines.

Please ensure your code follows the project’s ESLint and TypeScript guidelines.


Coming soon! We’re working on adding visual examples of all components, including the Button, AuthButtonGroup, Inputs, MenuList, and SideNav, to help you see MR JUICE UI in action.


MR JUICE UI is licensed under the MIT License. Feel free to use, modify, and distribute it in your projects.


MR JUICE UI is built with ❤️ by a passionate team of developers who love creating tools that make development faster, easier, and more fun. Follow us on GitHub for updates!

**Let’s build something amazing together! 🍊**