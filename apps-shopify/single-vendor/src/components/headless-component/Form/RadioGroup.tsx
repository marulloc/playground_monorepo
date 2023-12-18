import { classNames } from '@/components/Marulloc-UI-v2/utils/classNames';

type RadioGroupRootProps = {
  name: React.ComponentPropsWithoutRef<'input'>['name'];
  required?: React.ComponentPropsWithoutRef<'input'>['required'];
  disabled?: React.ComponentPropsWithoutRef<'input'>['disabled'];

  children: (props: {
    name: RadioGroupRootProps['name'];
    required: RadioGroupRootProps['required'];
    disabled: RadioGroupRootProps['disabled'];
  }) => React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'fieldset'>, 'children'>;

const RadioGroupRoot = (props: RadioGroupRootProps) => {
  const { name, required, disabled, children, ...restProps } = props;

  return (
    <fieldset {...restProps} className={classNames(restProps.className)}>
      <>{children({ name, required, disabled })}</>
    </fieldset>
  );
};

type RadioGroupLegendProps = {
  legendElSrOnly?: boolean;
  legend: string;
} & React.ComponentPropsWithoutRef<'legend'>;

const RadioGroupTitle = (props: RadioGroupLegendProps) => {
  const { children, legendElSrOnly = true, legend, ...restProps } = props;

  return (
    <>
      <legend {...restProps} className={classNames(legendElSrOnly ? 'sr-only' : '', restProps.className)}>
        {legend}
      </legend>
      <>{children}</>
    </>
  );
};

type RadioOptionProps = {
  name: React.ComponentPropsWithoutRef<'input'>['name'];
  value: React.ComponentPropsWithoutRef<'input'>['value'];
  checked: React.ComponentPropsWithoutRef<'input'>['checked'];
  required?: React.ComponentPropsWithoutRef<'input'>['required'];
  disabled?: React.ComponentPropsWithoutRef<'input'>['disabled'];
} & React.ComponentPropsWithoutRef<'label'>;

const RadioOption = (props: RadioOptionProps) => {
  const { name, required, disabled, value, children, checked, ...labelProps } = props;
  return (
    <label {...labelProps}>
      <input
        type="radio"
        name={name}
        required={required}
        disabled={disabled}
        value={value}
        checked={checked}
        onChange={() => {}}
        className={classNames('sr-only')}
      />
      <>{children}</>
    </label>
  );
};

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Title: RadioGroupTitle,
  Option: RadioOption,
});
