import { withRef, withVariants } from "@udecode/cn";
import { cva } from "class-variance-authority";

import { PlateElement } from "./plate-element";

const headingVariants = cva("relative mb-1", {
    variants: {
        variant: {
            h1: "font-heading mt-[1.6em] pb-1 text-4xl font-bold",
            h2: "font-heading mt-[1.4em] pb-px text-2xl font-semibold tracking-tight",
            h3: "font-heading mt-[1em] pb-px text-xl font-semibold tracking-tight",
            h4: "font-heading mt-[0.75em] text-lg font-semibold tracking-tight",
            h5: "mt-[0.75em] text-lg font-semibold tracking-tight",
            h6: "mt-[0.75em] text-base font-semibold tracking-tight",
        },
    },
});

const HeadingElementVariants = withVariants(PlateElement, headingVariants, [
    "variant",
]);

export const HeadingElement = withRef<typeof HeadingElementVariants>(
    ({ children, variant = "h1", ...props }, ref) => {
        return (
            <HeadingElementVariants
                ref={ref}
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                as={variant!}
                variant={variant}
                {...props}
            >
                {children}
            </HeadingElementVariants>
        );
    },
);
