import { PortalContextType } from "@/@types/portal/portal";
import { PortalContext } from "@/context/PortalContext";
import {
  useRef,
  useEffect,
  ReactNode,
  HTMLAttributes,
  useContext,
} from "react";
import { createPortal } from "react-dom";

interface PortalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isMounted?: boolean;
}

export const Portal = ({ children, className }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const portalCtx = useContext(PortalContext) as PortalContextType;

  const newClass = `block fixed left-0 top-0 w-full h-full overflow-auto z-[9999] bg-black/40 ${className}`;

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
  }, []);

  return portalCtx.isMounted && ref.current
    ? createPortal(<div className={newClass}>{children}</div>, ref.current)
    : null;
};
