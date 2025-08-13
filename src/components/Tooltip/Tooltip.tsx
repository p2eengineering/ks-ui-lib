import React, { useState, useRef, useEffect } from 'react';

export interface TooltipProps {
  type?: 'type1' | 'type2' | 'type3';
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  showArrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
  type = 'type1',
  content,
  children,
  position = 'bottom',
  showArrow = false,
  className = '',
  style,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const getArrowClass = () => {
    if (!showArrow) return '';
    
    switch (position) {
      case 'top':
        return 'tooltip__arrow--top';
      case 'bottom':
        return 'tooltip__arrow--bottom';
      case 'left':
        return 'tooltip__arrow--left';
      case 'right':
        return 'tooltip__arrow--right';
      default:
        return 'tooltip__arrow--bottom';
    }
  };

  const getPositionClass = () => {
    return `tooltip--${position}`;
  };

  const componentClasses = [
    'tooltip',
    `tooltip--${type}`,
    getPositionClass(),
    isVisible ? 'tooltip--visible' : '',
    className
  ].filter(Boolean).join(' ');

  const arrowClasses = [
    'tooltip__arrow',
    getArrowClass()
  ].filter(Boolean).join(' ');

  return (
    <div className="tooltip-container" style={style}>
      <div
        ref={triggerRef}
        className="tooltip__trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={componentClasses}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          <div className="tooltip__content">
            {content}
          </div>
          {showArrow && <div className={arrowClasses} />}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
