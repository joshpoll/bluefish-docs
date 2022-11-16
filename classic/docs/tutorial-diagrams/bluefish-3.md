---
sidebar_position: 3
---

# 3. A Tree Diagram Grammar

## Passing Custom Nodes and Connectors

Let's start by letting users provide their own node and connector shapes. To do so, we'll make a new
field on our `Tree` component called `encoding` that will store these custom component constructors.

:::caution

You must use `.` notation when passing a component into JSX. That is, you must write something like
`encoding.node`, NOT `node`, `encoding['node']`, or even `(encoding['node'])`.

:::

Let's start with `Node`.

```tsx live noInline
const Tree = forwardRef(function _Tree({ data, encoding }, ref) {
  const { name, value, subtrees } = data;
  return (
    <Group ref={ref}>
      <encoding.node name={name + '-node'} value={value} />
      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>
        {(subtrees || []).map((child, i) => (
          <Tree data={child} encoding={encoding} />
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
    }} encoding={{
      node: Node,
    }} />
  </SVG>
)
```

Now let's take out `Connector`. Unlike `Node`, we're giving `Connector` some default arguments
(`stroke` and `strokeWidth`) that we'd like to keep outside the component. To do so, we can wrap our
`Connector` component like so:

```tsx
const MyConnector = forwardRef(function _MyConnector(props, ref) {
  return <Connector ref={ref} {...props} stroke={'black'} strokeWidth={2} />
})
```

We are passing through all the props and overriding the `stroke` and `strokeWidth` fields.

:::info

Notice that `children` is also a prop, so the children will get passed correctly.
`ref` is not a proper, though, and so we need to define it.

:::

Without generalizing any further, we can start by simply replacing `Connector` with `MyConnector`.

```tsx live noInline
const MyConnector = forwardRef(function _MyConnector(props, ref) {
  return <Connector ref={ref} {...props} stroke={'black'} strokeWidth={2} />
})

const Tree = forwardRef(function _Tree({ data, encoding }, ref) {
  const { name, value, subtrees } = data;
  return (
    <Group ref={ref}>
      <encoding.node name={name + '-node'} value={value} />
      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>
        {(subtrees || []).map((child, i) => (
          <Tree data={child} encoding={encoding} />
        ))}
      </Row>
      {subtrees ? (
        <Col alignment={'center'} spacing={10}>
          <Ref to={name + '-node'} />
          <Ref to={name + '-subtree'} />
        </Col>
      ) : null}
      {(subtrees || []).map((child, i) => (
        <MyConnector $from={'bottomCenter'} $to={'topCenter'}>
          <Ref to={name + '-node'} />
          <Ref to={child.name + '-node'} />
        </MyConnector>
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
    }} encoding={{
      node: Node,
    }} />
  </SVG>
)
```

Now finally we can place it in the `encoding` field.

```tsx live noInline
const MyConnector = forwardRef(function _MyConnector(props, ref) {
  return <Connector ref={ref} {...props} stroke={'black'} strokeWidth={2} />
})

const Tree = forwardRef(function _Tree({ data, encoding }, ref) {
  const { name, value, subtrees } = data;
  return (
    <Group ref={ref}>
      <encoding.node name={name + '-node'} value={value} />
      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>
        {(subtrees || []).map((child, i) => (
          <Tree data={child} encoding={encoding} />
        ))}
      </Row>
      {subtrees ? (
        <Col alignment={'center'} spacing={10}>
          <Ref to={name + '-node'} />
          <Ref to={name + '-subtree'} />
        </Col>
      ) : null}
      {(subtrees || []).map((child, i) => (
        <encoding.link $from={'bottomCenter'} $to={'topCenter'}>
          <Ref to={name + '-node'} />
          <Ref to={child.name + '-node'} />
        </encoding.link>
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
    }} encoding={{
      node: Node,
      link: MyConnector,
    }} />
  </SVG>
)
```

## Customizing the Layout

Since layouts are just components, we can let users customize them as well! However, rather than
letting users provide arbitrary components as above, we'll restrict them to a specific subset of
layouts we've chosen.

```tsx live noInline
const MyConnector = forwardRef(function _MyConnector(props, ref) {
  return <Connector ref={ref} {...props} stroke={'black'} strokeWidth={2} />
})

const row = (props) => {
  let { alignment, spacing } = props || {};
  alignment = alignment || 'top';
  spacing = spacing || 10;
  return forwardRef(function _Row(props, ref) {
    return <Row ref={ref} {...props} alignment={alignment} spacing={spacing} />
  })
}

const col = (props) => {
  let { alignment, spacing } = props || {};
  alignment = alignment || 'center';
  spacing = spacing || 10;
  return forwardRef(function _Col(props, ref) {
    return <Col ref={ref} {...props} alignment={alignment} spacing={spacing} />
  })
}

const Tree = forwardRef(function _Tree({ data, encoding }, ref) {
  const { name, value, subtrees } = data;
  return (
    <Group ref={ref}>
      <encoding.node name={name + '-node'} value={value} />
      <encoding.subtreeSubtree name={name + '-subtree'}>
        {(subtrees || []).map((child, i) => (
          <Tree data={child} encoding={encoding} />
        ))}
      </encoding.subtreeSubtree>
      {subtrees ? (
        <encoding.rootSubtree>
          <Ref to={name + '-node'} />
          <Ref to={name + '-subtree'} />
        </encoding.rootSubtree>
      ) : null}
      {(subtrees || []).map((child, i) => (
        <encoding.link $from={'bottomCenter'} $to={'topCenter'}>
          <Ref to={name + '-node'} />
          <Ref to={child.name + '-node'} />
        </encoding.link>
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
    }} encoding={{
      node: Node,
      link: MyConnector,
      subtreeSubtree: row(),
      // try col({ alignment: 'left', })
      rootSubtree: col(),
    }} />
  </SVG>
)
```