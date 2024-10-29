import * as DialogPrimitive from '@radix-ui/react-dialog';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = DialogPrimitive.Content;
export const DialogTitle = DialogPrimitive.Title;

// Custom Header component (optional)
export const DialogHeader = ({ children }) => (
  <div className="dialog-header">
    <DialogTitle>{children}</DialogTitle>
  </div>
);
