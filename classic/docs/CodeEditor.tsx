import { SandpackProvider, SandpackCodeEditor, SandpackPreview, useSandpack } from "@codesandbox/sandpack-react";
import React, { useEffect } from "react";
import { indexhtml, indexjs } from "./code";

export type CodeEditorProps = {
  code: string;
  supportingCode?: { [filename: string]: string };
  onCodeChange?: (code: string, filename?: string) => void;
  hideCode?: boolean;
  flip?: boolean;
  width?: number;
  height?: number;
};

const SandpackCustomEditor = (props: CodeEditorProps) => {
  const { sandpack } = useSandpack();

  useEffect(() => {
    if (props.onCodeChange) {
      props.onCodeChange(sandpack.files["/App.js"].code);
    }
  }, [sandpack.files["/App.js"].code]);

  return (
    <div>
      {props.flip ? (
        <>
          {props.hideCode ? null : <SandpackCodeEditor />}
          <SandpackPreview style={{ height: props.height ?? 300, width: props.width ?? 500 }} />
        </>
      ) : (
        <>
          <SandpackPreview style={{ height: props.height ?? 210, width: props.width ?? 445 }} />
          {props.hideCode ? null : <SandpackCodeEditor />}
        </>
      )}
    </div>
  );
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
        ...props.supportingCode,
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
      <SandpackCustomEditor {...props} />
    </SandpackProvider>
  );
};
