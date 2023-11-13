import {
  Bluefish,
  Group,
  StackH,
  StackV,
  Circle,
  Text,
  Ref,
  Background,
  Arrow,
  Align,
  Distribute,
  Rect,
} from "@bluefish-js/solid";

const App = () => {
  return (
    <Bluefish>
      <StackH spacing={50}>
        <Circle name="mercury" r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
        <Circle r={36} fill="#DC933C" stroke-width={3} stroke="black" />
        <Circle r={38} fill="#179DD7" stroke-width={3} stroke="black" />
        <Circle r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
      </StackH>
      <Align alignment="centerX">
        <Text name="label">Mercury</Text>
        <Ref select="mercury" />
      </Align>
      <Distribute direction="vertical" spacing={60}>
        <Ref select="label" />
        <Ref select="mercury" />
      </Distribute>
      <Background>
        <Ref select="label" />
        <Ref select="mercury" />
      </Background>
    </Bluefish>
  );
};

export default App;
