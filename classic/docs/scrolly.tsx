import React, { PropsWithChildren, memo, useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import ScrollamaStep from "./step";
import { CodeEditor } from "./CodeEditor";

export type ScrollyProps = PropsWithChildren<{
  starterCode: string;
}>;

const MemoCodeEditor = memo(CodeEditor);

const Scrolly = ({ starterCode, children }: ScrollyProps) => {
  const [code, setCode] = useState(starterCode);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const childrenWithProps = React.Children.map(children, (child, index) => {
    // Checking isValidElement is the safe way and avoids a typescript error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child as any, {
        setCode,
      });
    }
    return child;
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%" /* , border: "2px dashed skyblue"  */,
        marginTop: "10vh",
      }}
    >
      {/* Left side with Scrollama steps */}
      <div>
        <Scrollama offset={0.3} onStepEnter={onStepEnter}>
          {React.Children.map(childrenWithProps, (child, index) => (
            <Step data={index} key={index}>
              <div
                style={{
                  // margin: "50vh 0",
                  marginTop: index === 0 ? "10vh" : "0",
                  marginBottom: "20vh",
                  // border: "1px solid gray",
                  opacity: currentStepIndex === index ? 1 : 0.2,
                }}
              >
                {child}
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>

      {/* Right side sticky */}
      <div
        style={{
          // flex: 1,
          position: "sticky",
          top: "7vh",
          // border: "1px solid orchid",
          height: "100vh",
        }}
      >
        <MemoCodeEditor code={code} flip />
      </div>
    </div>
  );
};

export default Scrolly;
