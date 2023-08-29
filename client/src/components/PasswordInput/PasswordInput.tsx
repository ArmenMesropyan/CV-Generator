import { Icon, Input, InputProps } from "@ui-kitten/components";
import React, { FC, useState } from "react";
import { ImageProps, TouchableWithoutFeedback } from "react-native";

const PasswordInput: FC<InputProps> = (props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => setSecureTextEntry(!secureTextEntry);

  const renderIcon = (
    props: Partial<ImageProps> | undefined
  ): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...(props || {})} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      {...props}
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default PasswordInput;
