# React Hooks in Svelte

Examples of common [React Hooks](https://reactjs.org/docs/hooks-intro.html) refactored to use Svelte.

# Hooks

## useState

[React example](/use-state/react/src/Counter.js)<br/>
[Svelte example](/use-state/svelte/src/Counter.svelte)

![Diff of useState](/images/useState.jpeg?raw=true)

## useEffect

In React, there are 3 ways to `useEffect()`.

1. With `null` dependencies: `useEffect(fn)`. This runs on every render.
2. With an empty array as dependencies: `useEffect(fn, [])`. This runs during mount, and cleanup function runs on unmount.
3. With a list of dependency vars: `useEffect(fn, [a, b, c])`. This reavaulates whenever a dependency changes. Cleans up last value if needed.

This is an example of #2, where the callback runs when component is mounted.

[React example](/use-effect/react/src/Timer.js)<br/>
[Svelte example](/use-effect/svelte/src/Timer.svelte)

![Diff of useEffect](/images/useEffect.png?raw=true)

## useContext

Coming soon

## useReducer

Coming soon

## useCallback

In React, `useCallback` is used to memoize functions. This is needed because event handlers are re-defined on every render.

Take this example:

```js
// This function (component) is executed on every render
function Component() {
  // this event is redefined on every render
  const handleClick = () => ...
  
  // because handleClick is refined on each render, ChildComponent will be re-rendered too because it's `onClick` prop changed
  return <ChildComponent onClick={handleClick}/>
}
```

In Svelte, event handlers are declared inside `<script>` tags, so they won't be redefined on every render. They are defined once per component, similar to how event handlers worked in `React.Component`.

## useMemo

[React example](/use-memo/react/src/Fibonacci.js)<br/>
[Svelte example](/use-memo/svelte/src/Fibonacci.svelte)

In Svelte, all reactive statements are memoized. Instead of `const var = useMemo(expression)`, you can use `$: var = expression`.

![Diff of useMemo](/images/useMemo.jpeg?raw=true)

## useRef

[React example](/use-ref/react/src/TextInputWithFocusButton.js)<br/>
[Svelte example](/use-ref/svelte/src/TextInputWithFocusButton.svelte)

In Svelte, `useRef()` is `bind:this`.

![Diff of useRef](/images/useRef.jpeg?raw=true)

# License

MIT
