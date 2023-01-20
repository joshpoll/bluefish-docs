# Connector

The Connector component creates a line between the bounding boxes of two Bluefish components, using specified alignment properties.

It takes [SVG line attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line#attributes) (to define the line style) as well as the following two attributes:

`$from` - where on the bounding box of the first component to create a connector endpoint

`$to` - where on the bounding box of the second component to create a connector endpoint

These attributes can be anything from the following list: 

```
topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
```

An example of the syntax looks like this:
```tsx
<Connector $from={'centerLeft'} $to={'centerRight'}>
    <BluefishComponent1 />
    <BluefishComponent2 />
<Connector/>
```

This will create a connector between the center left of `BluefishComponent1` and the center right of `BluefishComponent2` 