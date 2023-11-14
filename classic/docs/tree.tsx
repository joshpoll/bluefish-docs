import { mergeProps } from "solid-js";
import {
  withBluefish,
  Bluefish,
  createName,
  Group,
  Rect,
  Text,
  Align,
  Ref,
  StackV,
  StackH,
  Arrow,
} from "@bluefish-js/solid";

const Node = withBluefish((props) => {
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

const Tree = withBluefish((props) => {
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

const tree = {
  value: "A",
  subtrees: [
    { value: "B" },
    { value: "C" },
    {
      value: "D",
      subtrees: [
        {
          value: "E",
        },
        {
          value: "F",
        },
      ],
    },
  ],
};

const App = () => {
  return (
    <Bluefish>
      <Tree {...tree} />
    </Bluefish>
  );
};

export default App;
