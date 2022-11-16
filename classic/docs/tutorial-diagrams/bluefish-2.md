---
sidebar_position: 2
---

# 2. A Tree Diagram Component

In this section, we'll take the node component we built in the previous section and use it to build
a larger tree diagram component.

## 2-Level Tree

Let's start by just rendering everything out. We'll make a new group which contains the root node as
well as a `Row` of subtrees. For now, we'll assume each subtree is just a single node.

```tsx live noInline
const Tree = forwardRef(function _Tree({ data }, ref) {
  const { name, value, subtrees } = data;
  return (
    <Group ref={ref}>
      <Node name={name} value={value} />
      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>
        {(subtrees || []).map((child, i) => (
          <Node name={child.name} value={child.value} />
        ))}
      </Row>
    </Group>
  )
})

render(
  <SVG width={200} height={200}>
    <Tree data={{
      name: 'A',
      value: 7,
      subtrees: [
        {
          name: 'B',
          value: 4,
        },
        {
          name: 'E',
          value: 3,
        },
      ],
    }} />
  </SVG>
)
```

## Positioning Subtrees Relative to the Root

We'd like to position these subtrees below the root. So we can use a `Col` component and `Ref`s to
position these elements.

```tsx live noInline
const Tree = forwardRef(function _Tree({ data }, ref) {
  const { name, value, subtrees } = data;
  return (
    <Group ref={ref}>
      <Node name={name + '-node'} value={value} />
      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>
        {(subtrees || []).map((child, i) => (
          <Node name={child.name} value={child.value} />
        ))}
      </Row>
      {subtrees ? (
        <Col alignment={'center'} spacing={10}>
          <Ref to={name + '-node'} />
          <Ref to={name + '-subtree'} />
        </Col>
      ) : null}
    </Group>
  )
})

render(
  <SVG width={200} height={200}>
    <Tree data={{
      name: 'A',
      value: 7,
      subtrees: [
        {
          name: 'B',
          value: 4,
        },
        {
          name: 'E',
          value: 3,
        },
      ],
    }} />
  </SVG>
)
```

## Now Let's Generalize to Arbitrary Depth!

Now, by replacing `Node` with a recursive call to `Tree`, we can generalize our component to trees
of any depth!

:::caution

Naming our internal function `_Tree` and not `Tree` is important here, because otherwise the
recursive call will refer to the internal `Tree` rather than the external one.

Try renaming it and you'll see an error!

:::

```tsx live noInline
const Tree = forwardRef(function _Tree({ data }, ref) {
  const { name, value, subtrees } = data;
  return (
    <Group ref={ref}>
      <Node name={name + '-node'} value={value} />
      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>
        {(subtrees || []).map((child, i) => (
          <Tree data={child} />
        ))}
      </Row>
      {subtrees ? (
        <Col alignment={'center'} spacing={10}>
          <Ref to={name + '-node'} />
          <Ref to={name + '-subtree'} />
        </Col>
      ) : null}
    </Group>
  )
})

render(
  <SVG width={500} height={500}>
    <Tree data={{
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
    }} />
  </SVG>
)
```

## Adding Connectors

Now that we've placed the nodes, it's time to place some connectors!

For every subtree, we want to make a `Connector` component linking the parent node to the subtree's
root node. To do this we'll `map` over the `subtrees` array and use `child.name` to grab the
reference to the child.

```tsx live noInline
const Tree = forwardRef(function _Tree({ data }, ref) {
  const { name, value, subtrees } = data;
  return (
    <Group ref={ref}>
      <Node name={name + '-node'} value={value} />
      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>
        {(subtrees || []).map((child, i) => (
          <Tree data={child} />
        ))}
      </Row>
      {subtrees ? (
        <Col alignment={'center'} spacing={10}>
          <Ref to={name + '-node'} />
          <Ref to={name + '-subtree'} />
        </Col>
      ) : null}
      {(subtrees || []).map((child, i) => (
        <Connector $from={'bottomCenter'} $to={'topCenter'} stroke={'black'} strokeWidth={2}>
          <Ref to={name + '-node'} />
          <Ref to={child.name + '-node'} />
        </Connector>
      ))}
    </Group>
  )
})

render(
  <SVG width={500} height={500}>
    <Tree data={{
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
    }} />
  </SVG>
)
```
