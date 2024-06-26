import { ReactNode } from "react"

interface ContainerProps{
  children: ReactNode;
}

export const Container = ({children}: ContainerProps) => {
  return (
    <div className="px-40">
      {children}
    </div>
  )
}