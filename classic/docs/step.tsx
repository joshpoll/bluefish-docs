import React, { PropsWithChildren } from "react";

export type ScrollamaStepProps = PropsWithChildren<{}>;

const ScrollamaStep: React.FC = ({ children }: ScrollamaStepProps) => {
  return <>{children}</>;
};

export default ScrollamaStep;
