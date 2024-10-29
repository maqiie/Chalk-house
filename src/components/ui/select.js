export function Select({ children, ...props }) {
    return <select className="block w-full px-3 py-2 border rounded" {...props}>{children}</select>;
  }
  
  export function SelectContent({ children }) {
    return <>{children}</>;
  }
  
  export function SelectItem({ children, ...props }) {
    return <option {...props}>{children}</option>;
  }
  
  export function SelectTrigger({ children }) {
    return <>{children}</>;
  }
  
  export function SelectValue({ placeholder }) {
    return <span>{placeholder}</span>;
  }