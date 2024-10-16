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

interface Option {
  label: string;
  id: string;
  description?: string;
}

interface SelectProps {
  loading?: boolean;
  options?: Option[];
  defaultValue?: string;
  disabled?: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  height?: string;
  width?: string;
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
      id: '',
      label: defaultValue || 'Selecione',
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
    setSelected(null);
  }, []);

  return (
    <SelectContainer disabled={disabled} {...props}>
      <Placeholder onClick={toggleDropdown} disabled={disabled}>
        {selectedOption ? selectedOption.label : firstValue.label}
      </Placeholder>
      <ActionsContainer>
        {!loading && selectedOption && selectedOption.id && (
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

      {isOpen && !disabled && (
        <DropdownMenu>
          {[firstValue, ...options].map((option) => (
            <OptionStyled
              key={option.id}
              onClick={() => handleOptionClick(option)}
              isSelected={selectedOption?.id === option.id}
            >
              {option.label}
            </OptionStyled>
          ))}
        </DropdownMenu>
      )}
    </SelectContainer>
  );
};
