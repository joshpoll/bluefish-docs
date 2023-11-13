import { Bluefish, Group, StackH, Circle, Text, Ref, Background, Arrow, StackV, Align, Distribute } from "@bluefish-js/solid";

const App = () => {
  return (
    <Bluefish>
      <Background name="planets" padding={20}>
        <StackH spacing={50}>
          <Circle name="mercury" r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
          <Circle r={36} fill="#DC933C" stroke-width={3} stroke="black" />
          <Circle r={38} fill="#179DD7" stroke-width={3} stroke="black" />
          <Circle r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
        </StackH>
      </Background>
      <Align alignment="centerX">
        <Text name="label">Mercury</Text>
        <Ref select="mercury" />
      </Align>
      <Distribute direction="vertical" spacing={20}>
        <Ref select="label" />
        <Ref select="planets" />
      </Distribute>
      <Arrow>
        <Ref select="label" />
        <Ref select="mercury" />
      </Arrow>
    </Bluefish>
  );
};

export default App;
