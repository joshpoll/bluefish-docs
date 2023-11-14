export const Tree = withBluefish((props) => {
  props = mergeProps(
    {
      subtrees: [],
      value: "?",
    },
    props
  );

  const nodeName = createName("node");

  const subtreeNames = (props.subtrees ?? []).map((_, i) => createName(`subtree${i}`));

  return (
    <Group>
      <Node name={nodeName} value={props.value} />

      {props.subtrees?.length ? (
        <>
          <StackV spacing={50} alignment="centerX">
            <Ref select={nodeName} />
            <StackH alignment="centerY" spacing={50}>
              <For each={props.subtrees}>{(child, i) => <Tree name={subtreeNames[i()]} {...child} />}</For>
            </StackH>
          </StackV>
          <For each={props.subtrees}>
            {(child, i) => (
              <Arrow bow={0} stretch={0.1} flip>
                <Ref select={nodeName} />
                <Ref select={[subtreeNames[i()], "node"]} />
              </Arrow>
            )}
          </For>
        </>
      ) : null}
    </Group>
  );
});
