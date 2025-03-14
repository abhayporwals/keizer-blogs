"use client";

import { createPlatePlugin } from "@udecode/plate/react";

import { FloatingToolbar } from "../../components/floating-toolbar";
import { FloatingToolbarButtons } from "../../components/floating-toolbar-buttons";

export const FloatingToolbarPlugin = createPlatePlugin({
  key: "floating-toolbar",
  render: {
    afterEditable: () => (
      <FloatingToolbar>
        <FloatingToolbarButtons />
      </FloatingToolbar>
    ),
  },
});
