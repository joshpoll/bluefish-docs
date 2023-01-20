---
sidebar_position: 2
---

# 2. Annotate Your Plot

In the last tutorial, we made this chart:

**preview**

But we're still missing something: the year information. By the end of this tutorial we'll have
added labels for some select years and also annotate some important date ranges.

## Label the Years

To label the years, we can simply attach labels to each dot using the `label` field.

```tsx live
<SVG width={500} height={300}>
  <Plot data={driving}>
    <Line x={'miles'} y={'gas'} />
    {/* TODO: Add labels to `Dot`! Hint: It's a lot like the `x` and `y` parameters. */}
    <Dot x={'miles'} y={'gas'} />
  </Plot>
</SVG>
```

## Label Notable Year Ranges

Now let's add some more sophisticated labels. We want to label some important time periods we want
to explain on this chart. Each time period corresponds to some part of the line. So we can use a
`LabelLine` for this.

We need to tell Bluefish Plot that our `LabelLine` *refers to* the `Line` mark we made earlier.
We can use a `Ref` component to *refer* to this mark.

```tsx live noInline
type TimePeriods = { start: number; end: number; period: string }[];

const timePeriods = [
  {start: 1956, end: 1972, period: 'Cheap gas, longer commutes'},
  {start: 1973, end: 1974, period: 'The Arab oil embargo'},
  {start: 1978, end: 1981, period: 'Energy crisis'},
  {start: 1986, end: 1998, period: 'Record low prices'},
  {start: 2005, end: 2010, period: 'The swing backward'},
];

<SVG width={500} height={300}>
  <Plot data={driving}>
    <Line x={'miles'} y={'gas'} />
    <Dot x={'miles'} y={'gas'} label={'year'} />
    <LabelLine data={timePeriods} line={<Ref to={'Line'} />} lineStart={'start'} lineEnd={'end'} label={'period'} />
  </Plot>
</SVG>
```

<!-- <PointLabel point={{mark: 'dot'} /* TODO: idk the API here... */} label={'year'} /> -->
alt. line is a mess, but dot is nice
```tsx live
<SVG width={500} height={300}>
  <Plot data={driving}>
    <Line x={'miles'} y={'gas'} label={
      <LineLabel data={[
        {start: 1956, end: 1972, period: 'Cheap gas, longer commutes'},
        {start: 1973, end: 1974, period: 'The Arab oil embargo'},
        {start: 1978, end: 1981, period: 'Energy crisis'},
        {start: 1986, end: 1998, period: 'Record low prices'},
        {start: 2005, end: 2010, period: 'The swing backward'},
      ]} line={'start-end' /* TODO: need a real API here... */} label={'period'} />
    } />
    <Dot x={'miles'} y={'gas'} label={'year'} />
  </Plot>
</SVG>
```
