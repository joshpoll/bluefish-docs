# Padding

The Padding component adds padding to one Bluefish component. The component to add padding to is specified from within the Padding component.

There are two options when specifying the amount of padding:

1. Individually specify each amount. This method takes `left`, `top`, `right`, and `bottom` as parameters. For example, this would look like:

```tsx
<Padding left={l} top={t} right={r} bottom={b}>
    <BluefishComponent />
</Padding>
```

2. Specifying an overall padding. This method takes `all` as a parameter. For example, this would look like:

```tsx
<Padding all={a}>
    <BluefishComponent />
</Padding>
```