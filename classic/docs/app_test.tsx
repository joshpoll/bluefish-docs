import { createSignal } from "solid-js";
import { Bluefish, Rect } from "@bluefish-js/solid";

const App = () => {
  const [x, setX] = createSignal(100);

  return (
    <div>
      <Bluefish width={500} height={150}>
        <Rect x={x()} y={0} width={100} height={100} fill="cornflowerblue" />
      </Bluefish>
      <input
        type="range"
        min={0}
        max={1000}
        value={x()}
        onInput={(e) => setX(+e.currentTarget.value)}
      />
      {x()}
    </div>
  );
};

export default App;
