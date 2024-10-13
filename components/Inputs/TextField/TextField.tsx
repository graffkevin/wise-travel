import { Input } from '@rneui/themed';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { IconNode } from "@rneui/base";


interface TextFieldProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    leftIcon?: IconNode;
}

const TextField = ({ label, placeholder, value, onChange, leftIcon }: TextFieldProps) => {
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (onChange) {
      onChange(e.nativeEvent.text);
    }
  };

  return <Input label={label} placeholder={placeholder} value={value} onChange={handleChange} leftIcon={leftIcon}/>;
};

export default TextField;