In React Router Dom v6,  a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered within a route.  For example, if you try to access parameters outside of a route component, you'll get undefined. 

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams(); // params will be undefined here
  console.log(params);
  return <div>My Component</div>;
}

<Routes>
  <Route path="/:id" element={<MyComponent />} />
</Routes>
```