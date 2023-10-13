// a simple slider in solidjs
import { createSignal } from "solid-js";

const App = () => {
  const [x, setX] = createSignal(100);

  return (
    <div>
      <input type="range" min={0} max={1000} value={x()} onInput={(e) => setX(+e.currentTarget.value)} />
      {x()}
    </div>
  );
};

export default App;
