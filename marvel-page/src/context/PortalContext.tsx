import { PortalContextType } from "@/@types/portal/portal";
import React, { FC, ReactNode, createContext, useState } from "react";

const initialPortalProps = {
  isMounted: false,
  toggleMount: () => {},
};

export const PortalContext =
  createContext<PortalContextType>(initialPortalProps);

export const PortalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(initialPortalProps.isMounted);

  const toggleMount = () => {
    setIsMounted((prev) => !prev);
  };

  const value = { isMounted, toggleMount };

  return (
    <PortalContext.Provider {...{ value }}>{children}</PortalContext.Provider>
  );
};
