import { useState } from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false}) {
  const [active, setActive] = useState(false)
  const handleToggle = () => {
    setActive((active) => !active)
  };
  const buttonClassName = active ? "chip active" : "chip"
  return (
    <button className={buttonClassName}>
      <p className="label" onClick={handleToggle} >{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip

