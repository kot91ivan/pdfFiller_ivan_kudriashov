import React from "react"
import classnames from "classnames"
import s from "./Button.module.scss"

const Button = ({ children, text, isPrimary, disabled, label }) => {
  return (
    <button
      className={classnames(s.button, { [s.primary]: isPrimary })}
      disabled={disabled}
      aria-label={label}
    >
      {children ? children : text}
    </button>
  )
}

export default Button
