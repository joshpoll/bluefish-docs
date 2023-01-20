---
sidebar_position: 3
---

# 3. Resize Your Plot

TODO: go through shrinking the chart for mobile. Reduce the number of years we label. Move the year
range labels to a bottom gutter.

## move to the gutter

```tsx
<SVG width={500} height={300}>
  <Plot data={driving}>
    <Line x={'miles'} y={'gas'} />
    <Dot x={'miles'} y={'gas'} label={'year'} />
  </Plot>
  <Row>
    {timePeriods.map(({ start, end, period }) => (
      <Col>
        <Text contents={period} />
        <Text contents={`${start}-${end}`} />
      </Col>
    ))}
  </Row>
</SVG>
```

or maybe...
```tsx
<SVG width={500} height={300}>
  <Plot data={driving}>
    <Line x={'miles'} y={'gas'} />
    <Dot x={'miles'} y={'gas'} label={'year'} />
  </Plot>
  <Row data={timePeriods}>
    <Col>
      <Text contents={'period'} />
      <Text contents={(d) => `${d.start}-${d.end}`} />
    </Col>
  </Row>
</SVG>
```

or maybe...
```tsx
<SVG width={500} height={300}>
  <Plot data={driving}>
    <Col>
      <Group>
        <Line x={'miles'} y={'gas'} />
        <Dot x={'miles'} y={'gas'} label={'year'} />
      </Group>
      <Row data={timePeriods}>
        <Col>
          <Text contents={'period'} />
          <Text contents={(d) => `${d.start}-${d.end}`} />
        </Col>
      </Row>
    </Col>
  </Plot>
</SVG>
```

## Reduce the number of years

```tsx
<SVG width={500} height={300}>
  <Plot data={driving}>
    <Col>
      <Group>
        <Line x={'miles'} y={'gas'} />
        <Dot x={'miles'} y={'gas'} label={(d) => d.year % 5 === 0 ? d.year : null} />
      </Group>
      <Row data={timePeriods}>
        <Col>
          <Text contents={'period'} />
          <Text contents={(d) => `${d.start}-${d.end}`} />
        </Col>
      </Row>
    </Col>
  </Plot>
</SVG>
```

## TODO: case on the input size to switch between the two views
