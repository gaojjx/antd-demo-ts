import React, { FC, useState } from 'react';

interface Props {
  initialValue: string;
}

const MyComponent: FC<Props> = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>You entered: {value}</p>
    </div>
  );
};

MyComponent.defaultProps = {
  initialValue: '',
};

export default MyComponent;
