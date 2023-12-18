'use client';

import { useRef } from 'react';

type FormRootProps = {
  handlerReturnType: 'json' | 'form';
  onSubmit?: (e: React.FormEvent<HTMLFormElement>, values: any) => void;
  onChange?: (e: React.ChangeEvent, values: any) => void;
} & Omit<React.ComponentPropsWithoutRef<'form'>, 'onSubmit' | 'onChange'>;

const Form = (props: FormRootProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { children, handlerReturnType, onSubmit, onChange, ...restProps } = props;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;

    const formData = new FormData(formRef.current as HTMLFormElement);

    switch (handlerReturnType) {
      case 'json':
        const jsonData: any = {};
        for (const [key, value] of formData.entries()) jsonData[key] = value;
        await onSubmit(e, jsonData);
        return;

      case 'form':
      default:
        await onSubmit(e, formData);
        return;
    }
  };

  const handleChange = async (e: any) => {
    if (!onChange) return;

    const formData = new FormData(formRef.current as HTMLFormElement);

    switch (handlerReturnType) {
      case 'json':
        const jsonData: any = {};
        for (const [key, value] of formData.entries()) jsonData[key] = value;
        await onChange(e, jsonData);
        return;

      case 'form':
      default:
        await onChange(e, formData);
        return;
    }
  };

  return (
    <form ref={formRef} {...restProps} onSubmit={handleSubmit} onChange={handleChange}>
      {children}
    </form>
  );
};

export default Form;
