import { Bluefish, Group, Row, Circle, Text, Ref, Background, Arrow, Col, Align, Distribute } from "@bluefish-js/solid";

const App = () => {
  return (
    <Bluefish>
      <Circle cx={20} cy={30} r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
      <Circle cx={100} cy={30} r={36} fill="#DC933C" stroke-width={3} stroke="black" />
      <Circle cx={160} cy={30} r={38} fill="#179DD7" stroke-width={3} stroke="black" />
      <Circle cx={280} cy={30} r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
    </Bluefish>
  );
};

export default App;
