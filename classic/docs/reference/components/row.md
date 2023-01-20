# Row

The row component puts all of its children into 1 row, with options of changing alignment and spacing. 

It takes the following attributes:

`spacing` - The spacing between each of the row's children

`totalWidth` - The total width of the row

`alignment` - How to align the items in the row (either `'top'`, `'middle'`, or `'bottom'`)

<!-- `x` (optional) - **Is this used?**

`y` (optional) - **Is this used?** -->

There are 3 possible ways of defining how the Rows's children are spaced:
1. If `spacing` is defined, it will space out the children evenly, each by the specified `spacing` attribute.
2. If `totalHeight` is defined, it will space out the children evenly such that their total height is `totalHeight`.
3. If both the `spacing` and `totalHeight` attributes are defined, the component will resize all of its children to fit it into the total height while maintaining the given spacing.


An example of the syntax looks like this:
```tsx live
<SVG width={200} height={100}>
  <Row spacing={20} alignment={'middle'}>
    <Circle r={25}/>
    <Circle r={25}/>
    <Circle r={25}/>
  </Row>
</SVG>
```