export interface PortalContextType extends HTMLAttributes<HTMLDivElement> {
  isMounted: boolean;
  toggleMount: () => void;
}

export interface PortalProviderProps {
  children: ReactNode;
}
