'use client';

import { RadioGroup2 } from './RadioGroup2';

const Test = () => {
  return (
    <RadioGroup2 name="test">
      <RadioGroup2.Option value="0" />
      <RadioGroup2.Option value="1" />
      <RadioGroup2.Option value="2" />
      <div>
        <RadioGroup2.Option value="3" />
      </div>
    </RadioGroup2>
  );
};

export default Test;
