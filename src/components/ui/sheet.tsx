'use client';

import type { JSX, ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { useState, useEffect, useContext, createContext, useCallback, useRef } from 'react';

import { createPortal } from 'react-dom';
import { RiCloseFill } from 'react-icons/ri';

import { Button } from '@/components/ui/button';
import { cn } from '@/utils/classNameUtils';

/**
 * Type for the Sheet context value.
 *
 * @type {SheetContextType}
 * @property {boolean} open - Whether the sheet is open
 * @property {(value: boolean) => void} onOpenChange - Callback to toggle sheet visibility
 * @property {'right' | 'left' | 'top' | 'bottom'} side - The side from which the sheet enters
 */
interface SheetContextType {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  side: 'right' | 'left' | 'top' | 'bottom';
}

const SheetContext = createContext<SheetContextType>({ open: false, onOpenChange: () => {}, side: 'right' });

/**
 * Props for the Sheet component.
 *
 * @type {SheetProps}
 * @property {boolean} [open] - Whether the sheet is open
 * @property {(value: boolean) => void} [onOpenChange] - Callback when sheet visibility changes
 * @property {ReactNode} children - Sheet content
 */
interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  children: ReactNode;
}

/**
 * Sheet component to manage state and provide context.
 *
 * @param {SheetProps} props - The component props
 *
 * @returns {JSX.Element} The rendered sheet component
 */
export default function Sheet({ open: controlledOpen, onOpenChange, children, ...props }: SheetProps): JSX.Element {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const handleOpenChange = useCallback(
    (value: boolean) => {
      if (controlledOpen === undefined) {
        setUncontrolledOpen(value);
      }
      onOpenChange?.(value);
    },
    [controlledOpen, onOpenChange]
  );

  return (
    <SheetContext.Provider value={{ open, onOpenChange: handleOpenChange, side: 'right' }}>
      <div data-slot="sheet" {...props}>
        {children}
      </div>
    </SheetContext.Provider>
  );
}

/**
 * Props for the SheetClose component.
 *
 * @type {SheetCloseProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Close button content
 */
interface SheetCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

/**
 * Button to close the sheet.
 *
 * @param {SheetCloseProps} props - The component props
 *
 * @returns {JSX.Element} The rendered sheet close button
 */
function SheetClose({ className = '', children, ...props }: SheetCloseProps): JSX.Element {
  const { onOpenChange } = useContext(SheetContext);

  return (
    <Button
      type="button"
      data-slot="sheet-close"
      variant="secondary"
      className={cn('h-10 w-10', className)}
      onClick={() => onOpenChange(false)}
      {...props}
    >
      {children}
    </Button>
  );
}

/**
 * Props for the SheetPortal component.
 *
 * @type {SheetPortalProps}
 * @property {ReactNode} children - Content to render in the portal
 */
interface SheetPortalProps {
  children: ReactNode;
}

/**
 * Portal for rendering sheet content outside the DOM hierarchy.
 *
 * @param {SheetPortalProps} props - The component props
 *
 * @returns {JSX.Element | null} The portal element or null if not mounted
 */
function SheetPortal({ children, ...props }: SheetPortalProps): JSX.Element | null {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use queueMicrotask to defer the state update to avoid cascading renders
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => {
      clearTimeout(timer);
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div data-slot="sheet-portal" {...props}>
      {children}
    </div>,
    document.body
  );
}

/**
 * Props for the SheetOverlay component.
 *
 * @type {SheetOverlayProps}
 * @property {string} [className] - Additional CSS classes
 */
interface SheetOverlayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Overlay for the sheet, used as a backdrop.
 *
 * @param {SheetOverlayProps} props - The component props
 *
 * @returns {JSX.Element} The rendered sheet overlay
 */
function SheetOverlay({ className = '', ...props }: SheetOverlayProps): JSX.Element {
  const { open, onOpenChange } = useContext(SheetContext);

  return (
    <div
      role="presentation"
      aria-hidden={!open}
      data-slot="sheet-overlay"
      data-state={open ? 'open' : 'closed'}
      className={cn(
        'fixed inset-0 z-50 bg-black/50 transition-opacity duration-300',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        open ? 'opacity-100' : 'pointer-events-none opacity-0',
        className
      )}
      onClick={() => onOpenChange(false)}
      {...props}
    />
  );
}

/**
 * Props for the SheetContent component.
 *
 * @type {SheetContentProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Main content of the sheet
 * @property {'right' | 'left' | 'top' | 'bottom'} [side] - The side the sheet slides in from, defaults to "right"
 */
interface SheetContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  side?: 'right' | 'left' | 'top' | 'bottom';
}

/**
 * Main content area of the sheet.
 *
 * @param {SheetContentProps} props - The component props
 *
 * @returns {JSX.Element} The rendered sheet content
 */
function SheetContent({ className = '', children, side = 'right', ...props }: SheetContentProps): JSX.Element {
  const { open, onOpenChange } = useContext(SheetContext);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle ESC key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  // Prevent scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <SheetPortal>
      <SheetOverlay />
      <div
        ref={contentRef}
        data-slot="sheet-content"
        data-state={open ? 'open' : 'closed'}
        className={cn(
          'bg-background border-border/50 fixed z-50 flex flex-col gap-4 shadow-lg',
          'transition-all duration-300 ease-in-out',
          !open && 'pointer-events-none',
          side === 'right' && [
            'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
            open
              ? 'data-[state=open]:animate-in data-[state=open]:slide-in-from-right translate-x-0'
              : 'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right translate-x-full',
          ],
          side === 'left' && [
            'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
            open
              ? 'data-[state=open]:animate-in data-[state=open]:slide-in-from-left translate-x-0'
              : 'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left translate-x-[-100%]',
          ],
          side === 'top' && [
            'inset-x-0 top-0 h-auto border-b',
            open
              ? 'data-[state=open]:animate-in data-[state=open]:slide-in-from-top translate-y-0'
              : 'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top translate-y-[-100%]',
          ],
          side === 'bottom' && [
            'inset-x-0 bottom-0 h-auto border-t',
            open
              ? 'data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom translate-y-0'
              : 'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom translate-y-full',
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </SheetPortal>
  );
}

/**
 * Props for the SheetHeader component.
 *
 * @type {SheetHeaderProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Header content
 */
interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

/**
 * Header section of the sheet.
 *
 * @param {SheetHeaderProps} props - The component props
 *
 * @returns {JSX.Element} The rendered sheet header
 */
function SheetHeader({ className, children, ...props }: SheetHeaderProps): JSX.Element {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-row items-center justify-between gap-4', className)}
      {...props}
    >
      <div className="flex flex-col gap-1.5">{children}</div>
      <SheetClose>
        <RiCloseFill className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetClose>
    </div>
  );
}

/**
 * Props for the SheetFooter component.
 *
 * @type {SheetFooterProps}
 * @property {string} [className] - Additional CSS classes
 */
interface SheetFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Footer section of the sheet.
 *
 * @param {SheetFooterProps} props - The component props
 *
 * @returns {JSX.Element} The rendered sheet footer
 */
function SheetFooter({ className, ...props }: SheetFooterProps): JSX.Element {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('border-border mt-auto flex flex-col gap-2 border-t p-4', className)}
      {...props}
    />
  );
}

export { Sheet, SheetClose, SheetContent, SheetHeader, SheetFooter };
