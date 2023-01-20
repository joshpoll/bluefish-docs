# Col

The col component puts all of its children into 1 column, with options of changing alignment and spacing. 

It takes the following attributes:

`spacing` - The spacing between each of the component's children

`totalHeight` - The total height of the column

`alignment` - How to align the items in the column (either `'left'`, `'center'`, or `'right'`)

<!-- Currently unused attributes: -->
<!-- 
`x` (optional) - **Is this used?**

`y` (optional) - **Is this used?** -->

There are 3 possible ways of defining how the Column's children are spaced:
1. If `spacing` is defined, it will space out the children evenly, each by the specified `spacing` attribute.
2. If `totalHeight` is defined, it will space out the children evenly such that their total height is `totalHeight`.
3. If both the `spacing` and `totalHeight` attributes are defined, the component will resize all of its children to fit it into the total height while maintaining the given spacing.

An example of the syntax looks like this:
```tsx live
<SVG width={200} height={200}>
  <Col spacing={20} alignment={'center'}>
    <Circle r={25}/>
    <Circle r={25}/>
    <Circle r={25}/>
  </Col>
</SVG>
```