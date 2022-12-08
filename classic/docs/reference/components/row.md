# Row

The row component puts all of its children into 1 row, with options of changing alignment and spacing. 

It takes the following attributes:

`spacing` - The spacing between each of the row's children

`totalWidth` - The total width of the row

`alignment` - How to align the items in the row (either `'top'`, `'middle'`, or `'bottom'`)

<!-- `x` (optional) - **Is this used?**

`y` (optional) - **Is this used?** -->


If both the `spacing` and `totalWidth` attributes are defined, the component will resize all of its children to fit it into the total width while maintaining the given spacing.

An example of the syntax looks like this:
```tsx
<Row spacing={20} totalWidth={300} alignment={'middle'}>
    <BluefishComponent1 />
    <BluefishComponent2 />
    <BluefishComponent3 />
</Row>
```