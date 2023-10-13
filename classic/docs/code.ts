export { default as app_test } from "!!raw-loader!./app_test.tsx";
export { default as planets } from "!!raw-loader!./planets.tsx";
export { default as learn } from "!!raw-loader!./learn.tsx";
export { default as slider } from "!!raw-loader!./slider-test.tsx";

export const indexjs = `import { render } from "solid-js/web";
import App from "./App";

render(App, document.getElementById("app"));`;

// export const indexjs = `import { render } from "solid-js/web";
// import { Bluefish, Rect } from "@bluefish-js/solid";
// import { createSignal } from "solid-js";

// const App = () => {
//   const [x, setX] = createSignal(100);

//   return (
//     <>
//       <input
//         type="range"
//         min={0}
//         max={1000}
//         value={x()}
//         onInput={(e) => setX(+e.currentTarget.value)}
//       />
//       {x()}
//       <Bluefish width={500} height={500}>
//         <Rect x={x()} y={0} width={100} height={100} />
//       </Bluefish>
//     </>
//   );
// };

// render(App, document.getElementById("app"));
// `;

export const indexhtml = `<!DOCTYPE html>
<html>

<head>
	<title>Solid Demo</title>
	<meta charset="UTF-8" />
</head>

<body>
	<div id="app"></div>

	<script src="index.js">
	</script>
</body>

</html>`;
