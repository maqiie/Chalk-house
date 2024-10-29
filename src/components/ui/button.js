export function Button({ children, ...props }) {
    return (
      <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors" {...props}>
        {children}
      </button>
    );
  }