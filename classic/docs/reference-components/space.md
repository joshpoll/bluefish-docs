# Space

The Space component spaces its children out evenly in either the vertical or horizontal direction.

It takes either the keyword `vertically` or `horizontally` in order to determine which direction to propagate the spacing.

It also takes either **one** of the two following attribute to specify how much to space its children:

`by` - how much space to put between each child

`height`/`width` - the total height or width, respectively, that the children should take up after being spaced out (with `height` corresponding to `vertically` and `width` corresponding to `horizontally`)

The `by` attribute takes precedence over the `height` and `width` attributes.

An example of the syntax looks like this:
```tsx
<Space vertically by={20}>
    <BluefishComponent1/>
    <BluefishComponent2/>
</Space>
```

or this:
```tsx
<Space horizontally width={20}>
    <BluefishComponent1/>
    <BluefishComponent2/>
</Space>
```