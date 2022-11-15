---
sidebar_position: 2
---

# Get Started - Diagramming

:::tip

This tutorial assumes you have some familiarity with React. We recommend you take a look at [React's
quick start guide first.](https://beta.reactjs.org/learn)

:::

## Goals of This Tutorial

By the end of this tutorial you will have built a sophisticated tree component!

In the process you will learn how to
- draw basic shapes
- use `name` to tag components
- use `Align`, `Col`, and `Row`
- use `Ref` to refer to components in different parts of the component tree
- gradually abstract a component so users can customize it more easily


Here's the data we'll be visualizing:

```ts
const treeData = {
  name: 'A',
  value: 7,
  subtrees: [
    {
      name: 'B',
      value: 4,
      subtrees: [
        { name: 'C', value: 2, },
        { name: 'D', value: 2, },
      ],
    },
    {
      name: 'E',
      value: 3,
      subtrees: [
        { name: 'F', value: 2, },
        { name: 'G', value: 1, },
      ],
    },
  ],
};
```

## Let's Draw a Rectangle!

First, let’s get something rendered to the screen! We always have to wrap our Bluefish code in a top-level `SVG` component.

<!-- :::info

Currently `width` and `height` must be specified in the SVG. In the future, we will add the ability
to infer these values from the child components.

::: -->

Next, we make a `Rect` component. The API for `Rect` follows that of SVG.

<!-- :::info

Dimension arguments in Bluefish can currently only be *pixel* values due to how we perform
computations. In the future, we may support other inputs like percentages, em, and rem.

::: -->

```tsx live
<SVG width={200} height={200}>
  <Rect x={20} y={50} width={50} height={65} rx={5} fill={'cornflowerblue'} />
</SVG>
```

## Aligning Two Shapes

We can put two shapes in an `Align` component, so they are aligned. In this case they are center
aligned.

```tsx live
<SVG width={200} height={200}>
  <Align center>
    <Text contents={'b'} fontSize={'30px'} />
    <Rect x={20} y={50} width={50} height={65} rx={5} fill={'cornflowerblue'} />
  </Align>
</SVG>
```

## Multiple Alignments

To add a label to the box, we need to add a second piece of text and align it to the rectangle.

```tsx live
<SVG width={200} height={200}>
  <Align center>
    <Text contents={'b'} fontSize={'30px'} />
    <Rect x={20} y={50} width={50} height={65} rx={5} fill={'none'} stroke={'cornflowerblue'} />
  </Align>
  <Align center to={'topCenter'}>
    <Text contents={'@A'} fontSize={'12px'} />
    <Rect x={20} y={50} width={50} height={65} rx={5} fill={'none'} stroke={'cornflowerblue'} />
  </Align>
</SVG>
```

But this will render two background rectangles! That’s not what we want. Instead, but how do we
refer to the rectangle again? We can use Bluefish’s `Ref` component to refer to existing components!
To do so, we give the rectangle a `name`, background, and then we refer to it in the second `Align`
component.

```tsx live
<SVG width={200} height={200}>
  <Align center>
    <Text contents={'b'} fontSize={'30px'} />
    <Rect name={'background'} x={20} y={50} width={50} height={65} rx={5} fill={'none'} stroke={'cornflowerblue'} />
  </Align>
  <Align center to={'topCenter'}>
    <Text contents={'@A'} fontSize={'12px'} />
    <Ref to={'background'} />
  </Align>
</SVG>
```

We can also separate the primitive objects and alignments completely using refs! This can be useful
for organizing larger components.

:::caution

We currently need to wrap our components in a `Group` for reference resolution to work properly.
This is a bug.

:::

```tsx live
<SVG width={200} height={200}>
  <Group>
    <Text name={'value'} contents={'b'} fontSize={'30px'} />
    <Rect name={'background'} x={20} y={50} width={50} height={65} rx={5} fill={'none'} stroke={'cornflowerblue'} />
    <Text name={'label'} contents={'@A'} fontSize={'12px'} />
    <Align center>
      <Ref to={'value'} />
      <Ref to={'background'} />
    </Align>
    <Align center to={'topCenter'}>
      <Ref to={'label'} />
      <Ref to={'background'} />
    </Align>
  </Group>
</SVG>
```

## Creating a Reusable Bluefish Component

```tsx live noInline
const Node = forwardRef(function _Node({ name, value }, ref) {
  return (
    <Group ref={ref}>
      <Text name={'value'} contents={value} fontSize={'30px'} />
      <Rect name={'background'} x={20} y={50} width={50} height={65} rx={5} fill={'none'} stroke={'cornflowerblue'} />
      <Text name={'label'} contents={name} fontSize={'12px'} />
      <Align center>
        <Ref to={'value'} />
        <Ref to={'background'} />
      </Align>
      <Align center to={'topCenter'}>
        <Ref to={'label'} />
        <Ref to={'background'} />
      </Align>
    </Group>
  );
})

render(
  <SVG width={200} height={200}>
    <Node name={'@A'} value={'b'} />
  </SVG>
)
```
