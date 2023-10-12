import { SandpackProvider, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import React from "react";
import { indexhtml, indexjs } from "./code";

export type CodeEditorProps = {
  code: string;
};

export const CodeEditor = (props: CodeEditorProps) => {
  return (
    <SandpackProvider
      dependencies={{
        "@bluefish-js/solid": "latest",
        "babel-preset-solid": "latest",
        "solid-js": "latest",
      }}
      devDependencies={{
        "@babel/core": "7.2.0",
        "parcel-bundler": "^1.6.1",
      }}
      environment="parcel"
      options={{
        visibleFiles: ["/App.js"],
        activeFile: "/App.js",
      }}
      files={{
        "/App.js": props.code,
        "/index.js": indexjs,
        "/index.html": indexhtml,
        "/package.json": {
          code: JSON.stringify({
            name: "solid-hello-world",
            version: "1.0.0",
            description: "",
            main: "index.html",
            scripts: {
              start: "parcel index.html --open",
              build: "parcel build index.html",
            },
            dependencies: {
              "@bluefish-js/solid": "latest",
              "babel-preset-solid": "latest",
              "solid-js": "latest",
            },
            devDependencies: {
              "@babel/core": "7.2.0",
              "parcel-bundler": "^1.6.1",
            },
            keywords: [],
          }),
        },
        "/.babelrc": {
          code: JSON.stringify({
            presets: ["babel-preset-solid"],
          }),
        },
      }}
    >
      <div>
        <SandpackPreview style={{ height: 300 }} />
        <SandpackCodeEditor />
      </div>
    </SandpackProvider>
  );
};
