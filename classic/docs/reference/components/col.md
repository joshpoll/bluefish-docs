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


If both the `spacing` and `totalHeight` attributes are defined, the component will resize all of its children to fit it into the total height while maintaining the given spacing.

An example of the syntax looks like this:
```tsx
<Col spacing={20} totalHeight={300} alignment={'center'}>
    <BluefishComponent1 />
    <BluefishComponent2 />
    <BluefishComponent3 />
</Col>
```