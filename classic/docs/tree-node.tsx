export const Node = withBluefish((props) => {
  props = mergeProps({ value: "?" }, props);
  const valueName = createName("value");
  const outlineName = createName("outline");

  return (
    <Group>
      <Rect name={outlineName} width={50} height={65} rx={5} fill={"cornflowerblue"} stroke={"black"} opacity={0.5} />
      <Text name={valueName} font-size="24px">
        {props.value}
      </Text>
      <Align alignment="centerY">
        <Ref select={valueName} />
        <Ref select={outlineName} />
      </Align>
      <Align alignment="centerX">
        <Ref select={valueName} />
        <Ref select={outlineName} />
      </Align>
    </Group>
  );
});
