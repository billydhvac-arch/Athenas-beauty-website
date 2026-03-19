import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

const DialogContext = React.createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
}>({
  open: false,
  onOpenChange: () => {},
})

function Dialog({ open = false, onOpenChange, children }: DialogProps) {
  const [isOpen, setIsOpen] = React.useState(open)
  
  React.useEffect(() => {
    setIsOpen(open)
  }, [open])
  
  const handleOpenChange = (value: boolean) => {
    setIsOpen(value)
    onOpenChange?.(value)
  }
  
  if (!isOpen) return null
  
  return (
    <DialogContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div 
          className="fixed inset-0 bg-black/50" 
          onClick={() => handleOpenChange(false)}
        />
        <div className="relative z-50 max-h-[90vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </DialogContext.Provider>
  )
}

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative w-full max-w-lg rounded-xl border bg-white p-6 shadow-lg",
      className
    )}
    {...props}
  >
    {children}
    <button
      onClick={() => document.dispatchEvent(new CustomEvent('dialog-close'))}
      className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
    >
      <X className="h-4 w-4" />
    </button>
  </div>
))
DialogContent.displayName = "DialogContent"

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
))
DialogDescription.displayName = "DialogDescription"

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription }