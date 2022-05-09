export default function AlertError({ children }) {
  return <div className='border border-red-600 p-2 bg-black'>{children}</div>;
}

export function RenderError(code) {
  if (code === 4001) {
    return <p>Transaction rejected!</p>;
  } else if (code === -32000) {
    return <p>Insufficient funds!</p>;
  }
  return <p>Something went wrong!</p>;
}
