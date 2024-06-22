import { ReactNode } from "react";

type variants = "h1" | "h2"| "h3"| "h4"| "p";
export interface TypographyProps{
  as: variants;
  children: ReactNode
}
const variantClasses: { [key: string]: string } = {
  "h1":"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
	"h2": "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
	"h3": "scroll-m-20 text-2xl font-semibold tracking-tight",
  "h4": "scroll-m-20 text-xl font-semibold tracking-tight",
	"p": "leading-7 [&:not(:first-child)]:mt-6"
}


export const Typography = ({as: Tag, children}: TypographyProps) => {
  const classes = variantClasses[Tag]
  return <Tag className={classes}>{children}</Tag>
}