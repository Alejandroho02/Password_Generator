import './switch.css'

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
}

export const Switch = ({ checked, onChange, label, disabled = false, id }: SwitchProps) => {
  return (
    <div className="switch-wrapper">
      {label && <span className="switch-label">{label}</span>}
      <label className={`switch ${disabled ? 'switch--disabled' : ''}`}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
