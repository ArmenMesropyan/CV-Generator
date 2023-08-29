import { Input, InputProps } from "@ui-kitten/components";
import { FastField, FastFieldProps } from "formik";
import { ComponentType, FC } from "react";

export interface InputFieldProps extends InputProps {
  name: string;
  component?: ComponentType<InputProps>;
}

const InputField: FC<InputFieldProps> = ({
  name,
  component: Component = Input,
  ...props
}) => (
  <FastField name={name}>
    {({
      form: { setFieldValue },
      field: { name },
      meta: { value, error },
    }: FastFieldProps) => (
      <Component
        {...props}
        status={error ? "danger" : "basic"}
        value={value}
        caption={error}
        onChangeText={(nextValue) => setFieldValue(name, nextValue)}
      />
    )}
  </FastField>
);

export default InputField;
