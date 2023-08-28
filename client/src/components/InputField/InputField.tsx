import { Input, InputProps } from "@ui-kitten/components";
import { FastField, FastFieldProps } from "formik";
import { FC } from "react";

export interface InputFieldProps extends InputProps {
  name: string;
}

const InputField: FC<InputFieldProps> = ({ name, ...props }) => (
  <FastField name={name}>
    {({
      form: { setFieldValue },
      field: { name },
      meta: { value, error },
    }: FastFieldProps) => (
      <Input
        {...props}
        status={error ? "danger" : undefined}
        value={value}
        caption={error}
        onChangeText={(nextValue) => setFieldValue(name, nextValue)}
      />
    )}
  </FastField>
);

export default InputField;
