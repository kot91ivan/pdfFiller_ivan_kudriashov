import React from "react"
import classnames from "classnames"
import s from "./Button.module.scss"

const Button = ({
  children,
  text,
  isPrimary,
  isWide,
  isMobile,
  disabled,
  label
}) => {
  return (
    <button
      className={classnames(s.button, {
        [s.primary]: isPrimary,
        [s.is_wide]: isWide,
        [s.is_mobile]: isMobile
      })}
      disabled={disabled}
      aria-label={label}
    >
      {children ? children : text}
    </button>
  )
}

export default Button
