'use client';

type FormRootProps = {
  handleSubmitReturnType: 'json' | 'form';
  onSubmit?: (e: React.FormEvent<HTMLFormElement>, values: any) => void;
} & Omit<React.ComponentPropsWithoutRef<'form'>, 'onSubmit'>;

const Form = (props: FormRootProps) => {
  const { children, handleSubmitReturnType, onSubmit, ...restProps } = props;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;

    const formData = new FormData(e.target as HTMLFormElement);

    switch (handleSubmitReturnType) {
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

  return (
    <form {...restProps} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
