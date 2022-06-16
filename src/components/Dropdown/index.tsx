import {Dispatch, FunctionComponent, SetStateAction, useEffect, useState} from "react";
import './dropdown.scss';

interface DropdownProps {
  options: { value: string, label: string }[];
  handleOnChange: Dispatch<SetStateAction<string>>
}

export const Dropdown2: FunctionComponent<DropdownProps> = ({options, handleOnChange}) => {
  const [value, setValue] = useState<string | undefined>()
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    const optionValue = options.find(option => option.label === value)?.value
    if(optionValue) {
      handleOnChange(optionValue)
    }
  }, [handleOnChange, options, value])
  return (
    <div className="dropdownContainer">
      <div
        className="dropdownSelect"
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className="dropdownTextContainer">
          <div className="dropdownText">{value ?? "Velg en AI-kunstner"}</div>
          <div className={`dropdownIcon ${showOptions ? "open" : "closed"}`}/>
        </div>

        {showOptions && <DropdownOptions options={options} handleOnChange={setValue}/>}

      </div>
    </div>
  )
}

interface DropdownOptionsProps {
  options: { value: string, label: string }[];
  handleOnChange: Dispatch<SetStateAction<string>>
}


export const DropdownOptions: FunctionComponent<DropdownOptionsProps> = ({options, handleOnChange}) => {
  return (
    <div className="dropdownOptions">
      {options.map(option =>
        <div onClick={() => handleOnChange(option.label)} className="dropdownOption">{option.label}</div>
      )}
    </div>
  )
}