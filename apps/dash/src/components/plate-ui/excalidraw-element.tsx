/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { withRef } from "@udecode/cn";
import { useExcalidrawElement } from "@udecode/plate-excalidraw/react";

import { PlateElement } from "./plate-element";

export const ExcalidrawElement = withRef<typeof PlateElement>(
    ({ nodeProps, ...props }, ref) => {
        const { children, element } = props;
        const { Excalidraw, excalidrawProps } = useExcalidrawElement({
            element,
        });

        return (
            <PlateElement ref={ref} {...props}>
                <div contentEditable={false}>
                    <div className="mx-auto aspect-video h-[600px] w-[min(100%,600px)] overflow-hidden rounded-sm border">
                        {Excalidraw && (
                            <Excalidraw
                                {...nodeProps}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                {...(excalidrawProps as any)}
                            />
                        )}
                    </div>
                </div>
                {children}
            </PlateElement>
        );
    },
);
