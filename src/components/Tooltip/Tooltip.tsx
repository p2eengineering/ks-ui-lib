import React from "react";
import "./Tooltip.scss";

export interface TooltipProps {
  type?: "type1" | "type2" | "type3";
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  showArrow?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
  type = "type1",
  content,
  children,
  side = "bottom",
  sideOffset = 5,
  showArrow = false,
  open = false,
  onOpenChange,
  delayDuration = 700,
  className = "",
  style,
}) => {
  const getPositionClass = () => {
    return `tooltip--${side}`;
  };

  const componentClasses = [
    "tooltip",
    `tooltip--${type}`,
    getPositionClass(),
    open ? "tooltip--visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const arrowClasses = [
    "tooltip__arrow",
    showArrow ? `tooltip__arrow--${side}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="tooltip-container" style={style}>
      <div
        className="tooltip__trigger"
        onMouseEnter={() => onOpenChange?.(true)}
        onMouseLeave={() => onOpenChange?.(false)}
        onClick={() => onOpenChange?.(!open)}
      >
        {children}
      </div>

      {open && (
        <div
          className={componentClasses}
          role="tooltip"
          aria-hidden={!open}
          style={
            {
              "--side-offset": `${sideOffset}px`,
            } as React.CSSProperties
          }
        >
          <div className="tooltip__content">{content}</div>
          {showArrow && <div className={arrowClasses} />}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
