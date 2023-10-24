import React, { PropsWithChildren } from "react";

export type ScrollamaStepProps = PropsWithChildren<{
  showMe?: string;
  setCode?: (code: string) => void;
}>;

const ScrollamaStep: React.FC = ({ children, showMe, setCode }: ScrollamaStepProps) => {
  const onShowMeClick = () => {
    if (setCode) {
      setCode(showMe);
    }
  };

  return (
    <>
      {children}
      {!!showMe ? (
        <button className="button button--secondary button--md" onClick={onShowMeClick}>
          Show Me
        </button>
      ) : null}
    </>
  );
};

export default ScrollamaStep;
