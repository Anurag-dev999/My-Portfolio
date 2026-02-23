import { forwardRef, type AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string; // Kept for backwards compatibility.
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, to, ...props }, ref) => {
    const isActive = false;

    return (
      <Link
        ref={ref}
        href={to}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
