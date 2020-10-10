import React from 'react'

type Props = {
  id: string
  name: string
  checked: boolean
  onChange: (e: any) => void
  small?: boolean
  disabled?: boolean
}

const ToggleSwitch: React.FC<Props> = ({
  id,
  name,
  checked,
  onChange,
  small,
  disabled,
}) => (
  <div className={'toggle-switch' + (small ? ' small-switch' : '')}>
    <input
      type='checkbox'
      name={name}
      className='toggle-switch-checkbox'
      id={id}
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      disabled={disabled}
    />
    {id ? (
      <label className='toggle-switch-label' htmlFor={id}>
        <span
          className={
            disabled
              ? 'toggle-switch-inner toggle-switch-disabled'
              : 'toggle-switch-inner'
          }
        />
        <span
          className={
            disabled
              ? 'toggle-switch-switch toggle-switch-disabled'
              : 'toggle-switch-switch'
          }
        />
      </label>
    ) : null}
  </div>
)

export default ToggleSwitch
