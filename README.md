# react

## Resources

- [React Documentation](https://react.dev/learn)
- [Next.js Documentation](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs)

## React Basics

### Creating and nesting components

React apps are made out of *components*. A component is a piece of the UI (user interface) that has its own logic and appearance.

React components are JavaScript functions that return markup:

```javascript
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

The component can be nested into another component:

```javascript
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

> React component names must always start with a capital letter, while HTML tags must be lowercase.

The `export default` keywords specify the main component in the file.

### Writing markup with JSX

The markup syntax used in React is called *JSX*.

JSX is stricter than HTML. You have to close tags like `<br />`. Your component also can't return multiple JSX tags. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper:

```javascript
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

### Adding styles

In React, you specify a CSS class with `className`. It works the same way as the HTML `class`attribute:

```javascript
<img className="avatar" />
```

Then you write the CSS rules for it in a separate CSS file:

```css
.avatar {
  border-radius: 50%;
}
```