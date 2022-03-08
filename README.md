# React Hooks in Svelte

[React Hook](https://reactjs.org/docs/hooks-intro.html) examples ported to [Svelte](https://svelte.dev).

**New 📣**: [React ⇆ Svelte Cheatsheet](https://dev.to/joshnuss/react-to-svelte-cheatsheet-1a2a)

# useState

In Svelte, `const [varName, set] = useState(initialValue)` becomes `let varName = initialValue`. The setter function is replaced with JavaScript's assignment operator `=`.  

[React example](/use-state/react/src/Counter.js)<br/>
[Svelte example](/use-state/svelte/src/Counter.svelte)

![Diff of useState](/images/useState.jpeg?raw=true)

# useEffect

In React, there are 3 ways to `useEffect()`.

1. With `null` dependencies: `useEffect(fn)`. This runs on every render.
2. With an empty array as dependencies: `useEffect(fn, [])`. This runs during mount, and cleanup function runs on unmount.
3. With a list of dependency vars: `useEffect(fn, [a, b, c])`. This reavaulates whenever a dependency changes. The cleanup runs whenever dependencies change and during unmount.

This is an example of #2, where the callback runs when component is mounted and cleanup runs when unmounted.

[React example](/use-effect/react/src/Timer.js)<br/>
[Svelte example](/use-effect/svelte/src/Timer.svelte)

![Diff of useEffect](/images/useEffect.png?raw=true)

# useMemo

[React example](/use-memo/react/src/Fibonacci.js)<br/>
[Svelte example](/use-memo/svelte/src/Fibonacci.svelte)

In Svelte, all reactive statements are memoized. Instead of `const var = useMemo(() => expression, dependencies)`, you can use `$: var = expression`. Notice that with Svelte, you don't need to declare the dependencies. The compiler infers them for you.

![Diff of useMemo](/images/useMemo.jpeg?raw=true)

# useRef

[React example](/use-ref/react/src/TextInputWithFocusButton.js)<br/>
[Svelte example](/use-ref/svelte/src/TextInputWithFocusButton.svelte)

In Svelte, `useRef()` is `bind:this`.

![Diff of useRef](/images/useRef.jpeg?raw=true)

# useReducer

[React example](/use-reducer/react/src/Counter.js)<br/>
[Svelte example](/use-reducer/svelte/src/Counter.svelte)

In Svelte, `useReducer()` can be replaced with a `writable()` store. Instead of dispatching using a `switch` statement, functions can be defined on the store directly.

![Diff of useReducer](/images/useReducer.png?raw=true)

# useCallback

In React, `useCallback` is used to memoize functions. This is needed because event handlers are re-defined on every render.

Take this example:

```js
// This function (component) is executed on every render
function Component() {
  // this event handler is redefined on every render
  const handleClick = () => alert("hello")
  
  // because `handleClick` is redefined on every render, `ChildComponent` will be re-rendered too. Because its `onClick` prop is considered changed.
  return <ChildComponent onClick={handleClick}/>
}
```

So we need to wrap `handleClick` in a `useCallback`, to give a hint to the rendering system that the handler wasn't changed.

In Svelte this isn't needed, because event handlers are declared inside `<script>` tags. They aren't defined in the render path and therefore arent't redefined on every render. They are defined once per component, so they work similar to how event handlers worked with `React.Component`.

# useContext

Context in both frameworks are very similar. One difference is that context in Svelte is not reactive by default. To make it reactive, context data should be wrapped in a store.

Another difference is that context in Svelte does not insert anything into the visual component tree. There is no `<Context.Provider>` element like in React, instead use the `setContext()` function.

[React example](/use-context/react/src/App.js)<br/>
[Svelte example](/use-context/svelte/src/App.svelte)

**Root component**
![Diff of useEffect App](/images/useContext-app.png?raw=true)

**Intermediate component**
![Diff of useEffect Toolbar](/images/useContext-toolbar.png?raw=true)

**Grand-child component**
![Diff of useEffect ThemedButton](/images/useContext-themedbutton.png?raw=true)

# License

MIT
