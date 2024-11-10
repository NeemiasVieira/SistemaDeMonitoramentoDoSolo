import { Loading } from '@components/Loading/Loading';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useMemo, useState } from 'react';
import {
  ActionsContainer,
  DropdownMenu,
  OptionStyled,
  Placeholder,
  ResetButton,
  RightSection,
  SelectContainer,
} from './SelectStyle';

export interface Option {
  label: string;
  id: string;
  description?: string;
}

interface SelectProps {
  loading?: boolean;
  options?: Option[];
  defaultValue?: Option;
  disabled?: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  $height?: string;
  $width?: string;
}

export const Select: React.FC<SelectProps> = ({
  options = [],
  defaultValue,
  loading = false,
  disabled = false,
  setSelected,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>();

  const firstValue = useMemo(() => {
    return {
      id: defaultValue?.id || '',
      label: defaultValue?.label || 'Selecione',
      description: defaultValue?.description || '',
    };
  }, [defaultValue]);

  const toggleDropdown = useCallback(() => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  }, [disabled]);

  const handleOptionClick = useCallback((option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSelected(option.id);
  }, []);

  const resetSelection = useCallback(() => {
    setSelectedOption(null);
    setSelected(defaultValue.id);
  }, []);

  const optionsToSelect = useMemo(() => {
    if (firstValue.id === options[0].id) return options;
    return [firstValue, ...options];
  }, [options]);

  return (
    <SelectContainer $disabled={disabled} {...props}>
      <Placeholder onClick={toggleDropdown} $disabled={disabled}>
        {selectedOption ? selectedOption.label : firstValue.label}
      </Placeholder>
      <ActionsContainer>
        {!loading && selectedOption && selectedOption.id && selectedOption.id !== defaultValue?.id && (
          <>
            <ResetButton onClick={resetSelection}>
              <FontAwesomeIcon icon={faTimes} />
            </ResetButton>
          </>
        )}
        {!loading && (
          <RightSection onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faChevronDown} />
          </RightSection>
        )}
        {loading && <Loading fullWidth={false} logoWidth="20px" logoHeight="20px" />}
      </ActionsContainer>

      {!disabled && (
        <DropdownMenu $isOpen={isOpen}>
          {optionsToSelect.map((option) => (
            <OptionStyled
              key={option.id}
              onClick={() => handleOptionClick(option)}
              $isSelected={selectedOption?.id === option.id}
            >
              {option.label}
              <span>{option.description}</span>
            </OptionStyled>
          ))}
        </DropdownMenu>
      )}
    </SelectContainer>
  );
};
