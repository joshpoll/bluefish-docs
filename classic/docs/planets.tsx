import { Bluefish, Group, StackH, StackV, Circle, Text, Ref, Background, Arrow, Align, Distribute, Rect } from "@bluefish-js/solid";

const App = () => {
  return (
    <Bluefish>
      {/* Bluefish is a diagramming library for SolidJS */}
      {/* You can specify UI-like components such as Row and Background */}
      <Background padding={20}>
        <StackH spacing={50}>
          <Circle name="mercury" r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
          <Circle r={36} fill="#DC933C" stroke-width={3} stroke="black" />
          <Circle r={38} fill="#179DD7" stroke-width={3} stroke="black" />
          <Circle r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
        </StackH>
      </Background>
      {/* But you can also use *relations* like Align and Distribute */}
      <Align alignment="centerX">
        <Text name="label">Mercury</Text>
        {/* Bluefish lets you refer to previous components using a special `Ref` component. */}
        <Ref select="mercury" />
      </Align>
      <Distribute direction="vertical" spacing={60}>
        <Ref select="label" />
        <Ref select="mercury" />
      </Distribute>
      {/* In addition to performing layout, Bluefish relations can also draw objects. */}
      <Arrow>
        <Ref select="label" />
        <Ref select="mercury" />
      </Arrow>
    </Bluefish>
  );
};

export default App;
