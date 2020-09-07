import React, { useState } from "react"

// ? means the field is optional
// <> angle brackets to say exact type, OR is single |
interface Props {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null
}

export const Counter: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0)

  return <div>{children({ count, setCount })}</div>
}
