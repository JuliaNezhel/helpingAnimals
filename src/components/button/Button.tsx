import { ComponentPropsWithoutRef, ElementType } from "react"

import s from "./button.module.scss"

type Props<T extends ElementType = "button"> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = "button">(props: Props<T>) => {
  const { as: Component = "button", children, className, ...rest } = props

  return (
    <Component className={s.button + ' ' + className} {...rest}>
      {children}
    </Component>
  )
}
