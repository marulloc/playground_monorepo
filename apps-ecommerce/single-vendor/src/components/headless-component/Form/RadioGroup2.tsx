import React from 'react';

// children array를 조작하는 compound component

const getChildrenByType = (children: React.ReactNode, targetType: any) => {
  const childrenArr = React.Children.toArray(children);
  return childrenArr.filter((child) => React.isValidElement(child) && child.type === targetType);
};

const childrenWithProps = (children: React.ReactNode, props: { [key: string]: any }) => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) return React.cloneElement(child, props);
    return child;
  });
};

type RadioGroup2Props = {
  children?: React.ReactNode;
  name: string;
  legend?: string;
};

function RadioGroup2Root({ children, name }: RadioGroup2Props) {
  const radioOptions = getChildrenByType(children, (<RadioGroupOption2 />).type);
  const radioOptionsWithProps = childrenWithProps(radioOptions, { name });

  return <fieldset>{radioOptionsWithProps}</fieldset>;
}

type RadioGroup2TitleProps = {
  legend?: string;
  name?: string;
};
function RadioGroup2Title(props: RadioGroup2TitleProps) {
  return <legend className="sr-only">{props.legend ?? `Choose ${props.name}`}</legend>;
}

type RadioOptions2Props = {
  name?: RadioGroup2Props['name'];
  value?: string;
  children?: React.ReactNode;
};
function RadioGroupOption2(props: RadioOptions2Props) {
  return (
    <div>
      <span>{props.name}</span>

      <span>{props.value}</span>
    </div>
  );
}

export const RadioGroup2 = Object.assign(RadioGroup2Root, {
  Title: RadioGroup2Title,
  Option: RadioGroupOption2,
});
