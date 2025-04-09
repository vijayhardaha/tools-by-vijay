"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const viewportRef = React.useRef(null);
    const [scrollInfo, setScrollInfo] = React.useState({
      scrollTop: 0,
      scrollHeight: 0,
      clientHeight: 0,
    });
    const [showVertical, setShowVertical] = React.useState(false);

    React.useEffect(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const handleScroll = () => {
        setScrollInfo({
          scrollTop: viewport.scrollTop,
          scrollHeight: viewport.scrollHeight,
          clientHeight: viewport.clientHeight,
        });
      };

      // Check if scrollbar should be visible
      setShowVertical(viewport.scrollHeight > viewport.clientHeight);

      handleScroll();
      viewport.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);

      return () => {
        viewport.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }, [children]);

    return (
      <div
        data-slot="scroll-area"
        className={cn("relative", className)}
        ref={ref}
        {...props}
      >
        <div
          ref={viewportRef}
          data-slot="scroll-area-viewport"
          className="focus-visible:ring-ring/50 size-full overflow-auto rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {children}
        </div>
        {showVertical && (
          <ScrollBar scrollInfo={scrollInfo} viewportRef={viewportRef} />
        )}
      </div>
    );
  }
);

ScrollArea.displayName = "ScrollArea";

const ScrollBar = React.forwardRef(
  (
    { className, orientation = "vertical", scrollInfo, viewportRef, ...props },
    ref
  ) => {
    const thumbRef = React.useRef(null);
    const scrollbarRef = React.useRef(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startY, setStartY] = React.useState(0);
    const [startScrollTop, setStartScrollTop] = React.useState(0);

    const { scrollTop, scrollHeight, clientHeight } = scrollInfo;
    const thumbHeight = clientHeight
      ? (clientHeight / scrollHeight) * clientHeight
      : 0;
    const thumbPosition = scrollTop
      ? (scrollTop / scrollHeight) * clientHeight
      : 0;

    React.useEffect(() => {
      if (!isDragging) return;

      const handleMouseMove = (e) => {
        if (!viewportRef.current || !isDragging) return;

        const deltaY = e.clientY - startY;
        const scrollRatio = scrollHeight / clientHeight;
        viewportRef.current.scrollTop = startScrollTop + deltaY * scrollRatio;
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isDragging, startY, clientHeight, scrollHeight, startScrollTop]);

    const handleMouseDown = (e) => {
      e.preventDefault();
      setIsDragging(true);
      setStartY(e.clientY);
      setStartScrollTop(viewportRef.current?.scrollTop || 0);
    };

    const handleTrackClick = (e) => {
      if (!viewportRef.current || e.target !== scrollbarRef.current) return;

      const scrollbarRect = scrollbarRef.current.getBoundingClientRect();
      const clickPosition = e.clientY - scrollbarRect.top;
      const percentage = clickPosition / scrollbarRect.height;
      viewportRef.current.scrollTop = percentage * scrollHeight;
    };

    return (
      <div
        ref={scrollbarRef}
        data-slot="scroll-area-scrollbar"
        className={cn(
          "absolute right-0 flex touch-none p-px transition-colors select-none",
          orientation === "vertical" &&
            "h-full w-2.5 border-l border-l-transparent",
          orientation === "horizontal" &&
            "h-2.5 w-full flex-col border-t border-t-transparent",
          className
        )}
        onClick={handleTrackClick}
        {...props}
      >
        <div
          ref={thumbRef}
          data-slot="scroll-area-thumb"
          className="bg-border relative flex-1 rounded-full"
          style={{
            height: thumbHeight + "px",
            transform: `translateY(${thumbPosition}px)`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    );
  }
);

ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
