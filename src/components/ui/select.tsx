import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  children?: React.ReactNode
}

const SelectContext = React.createContext<{
  value: string
  onValueChange: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
}>({
  value: "",
  onValueChange: () => {},
  open: false,
  setOpen: () => {},
})

function Select({ value = "", onValueChange, children }: SelectProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(value)
  
  React.useEffect(() => {
    setSelectedValue(value)
  }, [value])
  
  const handleValueChange = (newValue: string) => {
    setSelectedValue(newValue)
    onValueChange?.(newValue)
    setOpen(false)
  }
  
  return (
    <SelectContext.Provider value={{ value: selectedValue, onValueChange: handleValueChange, open, setOpen }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { open, setOpen } = React.useContext(SelectContext)
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setOpen(!open)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const { value } = React.useContext(SelectContext)
  return <span>{value || placeholder}</span>
}

const SelectContent = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  const { open } = React.useContext(SelectContext)
  if (!open) return null
  return (
    <div className={cn("absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white shadow-lg", className)}>
      {children}
    </div>
  )
}

const SelectItem = ({ value, children }: { value: string; children?: React.ReactNode }) => {
  const { onValueChange } = React.useContext(SelectContext)
  return (
    <div
      onClick={() => onValueChange(value)}
      className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-gray-100"
    >
      {children}
    </div>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }