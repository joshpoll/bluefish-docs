export { default as app_test } from "!!raw-loader!./app_test.tsx";
export { default as planets } from "!!raw-loader!./planets.tsx";
export { default as planetsNoComments } from "!!raw-loader!./planets-no-comments.tsx";
export { default as planetsMarsAnnotation } from "!!raw-loader!./planets-variations/planets-mars-annotation.tsx";
export { default as planetsConditionalAnnotation } from "!!raw-loader!./planets-variations/planets-conditional-annotation.tsx";
export { default as planetsBackgroundAnnotation } from "!!raw-loader!./planets-variations/planets-background-annotation.tsx";
export { default as planetsCol } from "!!raw-loader!./planets-variations/planets-col.tsx";
export { default as planetsAnnotationUnderneath } from "!!raw-loader!./planets-variations/planets-annotation-underneath.tsx";
export { default as learn } from "!!raw-loader!./learn.tsx";
export { default as learn1 } from "!!raw-loader!./learn1.tsx";
export { default as learn2 } from "!!raw-loader!./learn2.tsx";
export { default as learn3 } from "!!raw-loader!./learn3.tsx";
export { default as learn4 } from "!!raw-loader!./learn4.tsx";
export { default as learn5 } from "!!raw-loader!./learn5.tsx";
export { default as learn6 } from "!!raw-loader!./learn6.tsx";
export { default as learn7 } from "!!raw-loader!./learn7.tsx";
export { default as intermediate } from "!!raw-loader!./intermediate.tsx";
export { default as intermediate2 } from "!!raw-loader!./intermediate2.tsx";
export { default as intermediate3 } from "!!raw-loader!./intermediate3.tsx";
export { default as slider } from "!!raw-loader!./slider-test.tsx";
export { default as tree } from "!!raw-loader!./tree.tsx";
export { default as tree_node } from "!!raw-loader!./tree-node.tsx";
export { default as tree_tree } from "!!raw-loader!./tree-tree.tsx";

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
