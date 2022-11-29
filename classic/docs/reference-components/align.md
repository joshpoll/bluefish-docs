---
sidebar_position: 1
---

# Align

The Align component in Bluefish aligns two Bluefish components to each other The syntax looks like:

```tsx
<Align {direction1} to={direction2}>
    <Component1/>
    <Component2/>
</Align>
```

Where `direction1` and `direction2` are any of the following values

```
topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
```

such that the `direction1` of the component referenced by `Component1` is aligned to the `direction2` of the component referenced by `Component2`.