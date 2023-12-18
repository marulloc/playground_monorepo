import { classNames } from '@/components/Marulloc-UI-v2/utils/classNames';
import { ValueOf } from 'next/dist/shared/lib/constants';
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useReducer, useState } from 'react';

type TRadioContext = {
  name: string;
  checkedValue: string | null;
  required?: boolean;
  disabled?: boolean;
};
type TRadioState = [TRadioContext, Dispatch<SetStateAction<TRadioContext>>];

const RadioContext = createContext<TRadioState | null>(null);

const useRadioContext = () => {
  const context = useContext(RadioContext);
  if (!context) throw new Error('<RadioGroup.*> component must be rendered as child of <RadioGroup> compoent');

  return context;
};

type RadioGroupRootProps = {
  defaultValue?: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<'fieldset'>;

const RadioGroupRoot = ({ name, required, disabled, children, defaultValue, ...restProps }: RadioGroupRootProps) => {
  const context = useState<TRadioContext>({ name, checkedValue: defaultValue ?? null, required, disabled });

  return (
    <RadioContext.Provider value={context}>
      <fieldset {...restProps} className={classNames(restProps.className)}>
        {children}
      </fieldset>
    </RadioContext.Provider>
  );
};

type RadioGroupLegendProps = React.ComponentPropsWithoutRef<'legend'>;

const RadioGroupTitle = ({ children, ...restProps }: RadioGroupLegendProps) => {
  const [{ name }] = useRadioContext();
  return <legend {...restProps}>{children ?? `Choose ${name}`}</legend>;
};

type RadioOptionProps = {
  value: string;
  children: (props: { checked: boolean; value?: string; disabled?: boolean }) => React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'label'>, 'children' | 'onClick'>;

const RadioOption = ({ value, children, ...labelProps }: RadioOptionProps) => {
  const [{ name, disabled, required, checkedValue }, setContext] = useRadioContext();

  const handleClick = (e: React.ChangeEvent) => {
    setContext((prev) => ({ ...prev, checkedValue: value }));
  };

  return (
    <label {...labelProps}>
      <input
        type="radio"
        name={name}
        required={required}
        disabled={disabled}
        value={value}
        checked={checkedValue === value}
        onChange={handleClick}
        className={classNames('sr-only')}
      />
      {children({ checked: checkedValue === value, value, disabled })}
    </label>
  );
};

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Title: RadioGroupTitle,
  Option: RadioOption,
});
