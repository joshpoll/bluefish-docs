---
sidebar_position: 1
---

# Align

The Align component in Bluefish aligns two Bluefish components to each other through their refs. The syntax looks like:

```tsx
<Align {direction1} to={direction2}>
    <Ref to={ref1} />
    <Ref to={ref2} />
</Align>
```

Where `direction1` and `direction2` are any of the following values

```
topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
```

such that the `direction1` of the component referenced by `ref1` is aligned to the `direction2` of the component referenced by `ref2`