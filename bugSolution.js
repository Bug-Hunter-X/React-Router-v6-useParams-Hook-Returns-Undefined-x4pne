The correct way to use `useParams` is within a component that's directly inside the route definition.

```javascript
// Correct usage
function MyComponent() {
  const params = useParams();
  console.log(params); // params will contain the route parameters
  return (
    <div>
      <h1>ID: {params.id}</h1>
    </div>
  );
}

<Routes>
  <Route path="/:id" element={<MyComponent />} />
</Routes>
```

Make sure your component rendering `MyComponent` is directly within the `<Route>` element that defines the route path containing parameters. This ensures that the `useParams` hook has access to the routing context.