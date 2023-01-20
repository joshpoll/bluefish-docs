# Ref

The Ref component allows users to reference other Bluefish components using their name. 

This is done by using the parameter `to` to specify the name of the component to reference. 

An example usage looks like:

```tsx
<Rect name={'rectangle'} />
<Ref to={'rectangle'} />
```