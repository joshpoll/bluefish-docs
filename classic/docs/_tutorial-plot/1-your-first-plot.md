---
sidebar_position: 1
---

# 1. Make Your First Plot

:::tip

This tutorial assumes you have some familiarity with React. We recommend you take a look at [React's
quick start guide first.](https://beta.reactjs.org/learn)

:::

It's time to make your first plot in Bluefish! By the end of this tutorial you will have made this
plot:

**preview**

## Meet the Data

We'll be using a dataset adapted from ["Driving Shifts Into
Reverse"](http://www.nytimes.com/imagepages/2010/05/02/business/02metrics.html) by Hannah Fairfield,
*The New York Times* (May 2, 2010).

Here's the schema:

```ts
type DrivingSchema = { year: number; miles: number; gas: number; }[];

export const driving: DrivingSchema = [
  { year: 1956, miles: 3683.6965, gas: 2.3829 },
  ...,
  { year: 2010, miles: 9592.0361, gas: 2.6066 },
];
```

It's a table where each row represents the `miles` driven per capita and the price of a gallon of
`gas` in a given `year`.

## Plot the Data

To start drawing data, we'll first need to create an `SVG` area to draw it. Then we can add a `Plot`
component and feed it our `driving` dataset.

```tsx
<SVG width={500} height={300}>
  <Plot data={driving}>
  </Plot>
</SVG>
```

This won't render anything yet (see below). We need to add a *mark* to map our data to visual elements!

Let's use a `Line` mark, which will draw a 2D line. `Line` is a component, just like `SVG`
and `Plot`, so we use JSX syntax for it.
It takes `x` and `y` parameters that tell the `Line` component how to extract data from the dataset
like so:

```tsx
<Line x={'miles'} y={'gas'} />
```


```tsx live
<SVG width={500} height={300}>
  <Plot data={driving}>
    {/*
      TODO: Add a `Line` mark mapping `x` to `miles` and `y` to `gas`.
      (Hint: We gave you the code above!)
    */}
  </Plot>
</SVG>
```

Huzzah! In one line of code we've made a connected scatterplot.

## Layer on a Dot Mark

Our line mark is well and good, but we also want to show the specific data points.
We can do that by adding a `Dot` mark.

`Dot` works a lot like `Line` does. It also takes `x` and `y` parameters.
Let's try it now! Add a `Dot` component directly below the `Line` using the same arguments as `Line`.

```tsx live
<SVG width={500} height={300}>
  <Plot data={driving}>
    <Line x={'miles'} y={'gas'} />
    {/*
      TODO: Add a `Dot` mark here.
      (Hint: It's a lot like `Line`!)
    */}
  </Plot>
</SVG>
```
