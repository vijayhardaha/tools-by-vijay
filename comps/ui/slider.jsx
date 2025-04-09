"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  step = 1,
  orientation = "horizontal",
  disabled = false,
  onValueChange,
  ...props
}) {
  const trackRef = React.useRef(null);
  const [internalValues, setInternalValues] = React.useState(
    Array.isArray(value)
      ? value
      : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max]
  );

  const [draggingIndex, setDraggingIndex] = React.useState(null);

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValues(Array.isArray(value) ? value : [value]);
    }
  }, [value]);

  const sortedValues = React.useMemo(
    () => [...internalValues].sort((a, b) => a - b),
    [internalValues]
  );

  const updateValue = React.useCallback(
    (clientX, clientY, index) => {
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const isHorizontal = orientation === "horizontal";

      const size = isHorizontal ? rect.width : rect.height;
      const position = isHorizontal
        ? clientX - rect.left
        : rect.bottom - clientY;

      const percentage = Math.max(0, Math.min(1, position / size));
      const newValue =
        Math.round((min + percentage * (max - min)) / step) * step;

      const newValues = [...internalValues];
      newValues[index] = newValue;

      if (value === undefined) {
        setInternalValues(newValues);
      }

      onValueChange?.(newValues.length === 1 ? newValues[0] : newValues);
    },
    [min, max, step, orientation, onValueChange, internalValues, value]
  );

  const handleMouseDown = (e, index) => {
    if (disabled) return;
    e.preventDefault();
    setDraggingIndex(index);

    updateValue(e.clientX, e.clientY, index);

    const handleMouseMove = (e) => {
      updateValue(e.clientX, e.clientY, index);
    };

    const handleMouseUp = () => {
      setDraggingIndex(null);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Support touch events
  const handleTouchStart = (e, index) => {
    if (disabled) return;
    e.preventDefault();
    setDraggingIndex(index);

    const touch = e.touches[0];
    updateValue(touch.clientX, touch.clientY, index);

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      updateValue(touch.clientX, touch.clientY, index);
    };

    const handleTouchEnd = () => {
      setDraggingIndex(null);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const getPercentage = (value) => {
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div
      data-slot="slider"
      data-orientation={orientation}
      data-disabled={disabled || undefined}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <div
        ref={trackRef}
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <div
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
          style={
            orientation === "horizontal"
              ? {
                  left: `${getPercentage(sortedValues[0])}%`,
                  width: `${getPercentage(sortedValues[sortedValues.length - 1]) - getPercentage(sortedValues[0])}%`,
                }
              : {
                  bottom: `${getPercentage(sortedValues[0])}%`,
                  height: `${getPercentage(sortedValues[sortedValues.length - 1]) - getPercentage(sortedValues[0])}%`,
                }
          }
        />
      </div>

      {sortedValues.map((thumbValue, index) => (
        <div
          key={index}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={thumbValue}
          data-slot="slider-thumb"
          tabIndex={disabled ? -1 : 0}
          onMouseDown={(e) => handleMouseDown(e, index)}
          onTouchStart={(e) => handleTouchStart(e, index)}
          onKeyDown={(e) => {
            if (disabled) return;

            const valueChange =
              e.key === "ArrowRight" || e.key === "ArrowUp"
                ? step
                : e.key === "ArrowLeft" || e.key === "ArrowDown"
                  ? -step
                  : 0;

            if (valueChange) {
              e.preventDefault();
              const newValues = [...internalValues];
              newValues[index] = Math.max(
                min,
                Math.min(max, thumbValue + valueChange)
              );
              if (value === undefined) {
                setInternalValues(newValues);
              }
              onValueChange?.(
                newValues.length === 1 ? newValues[0] : newValues
              );
            }
          }}
          className={cn(
            "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
            draggingIndex === index ? "ring-4" : ""
          )}
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            ...(orientation === "horizontal"
              ? {
                  left: `${getPercentage(thumbValue)}%`,
                  top: "50%",
                }
              : {
                  bottom: `${getPercentage(thumbValue)}%`,
                  left: "50%",
                }),
          }}
        />
      ))}
    </div>
  );
}

export { Slider };
