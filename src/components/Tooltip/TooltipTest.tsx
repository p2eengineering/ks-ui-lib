import React, { useState } from "react";
import Tooltip from "./Tooltip";

const TooltipTest: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Tooltip
        type="type1"
        content="This is a simple tooltip"
        side="top"
        showArrow={false}
        open={open}
        onOpenChange={setOpen}
      >
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Hover or Click Me
        </button>
      </Tooltip>

      <Tooltip
        type="type2"
        content="This tooltip has an arrow and different styling"
        side="bottom"
        showArrow={true}
        open={false}
        onOpenChange={() => {}}
      >
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Another Button
        </button>
      </Tooltip>
    </div>
  );
};

export default TooltipTest;
