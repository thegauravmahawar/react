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