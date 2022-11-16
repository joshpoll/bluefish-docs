---
sidebar_position: 2
---

# 2. A Tree Diagram Component

## 2-Level Tree

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
