import type { TLinkElement } from "@udecode/plate-link";
import { cn, withRef } from "@udecode/cn";
import { useLink } from "@udecode/plate-link/react";

import { PlateElement } from "./plate-element";

export const LinkElement = withRef<typeof PlateElement>(
    ({ children, className, ...props }, ref) => {
        const element = props.element as TLinkElement;
        const { props: linkProps } = useLink({ element });

        return (
            <PlateElement
                ref={ref}
                as="a"
                className={cn(
                    className,
                    "text-primary decoration-primary font-medium underline underline-offset-4",
                )}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...(linkProps as any)}
                {...props}
            >
                {children}
            </PlateElement>
        );
    },
);
