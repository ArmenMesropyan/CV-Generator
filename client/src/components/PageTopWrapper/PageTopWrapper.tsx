import { Button, ButtonProps, Text } from "@ui-kitten/components";
import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export interface PageTopWrapperProps {
  title: string;
  buttonProps?: ButtonProps;
}

const PageTopWrapper: FC<PropsWithChildren<PageTopWrapperProps>> = ({
  children,
  title,
  buttonProps,
}) => (
  <>
    <View style={styles.container}>
      <Text status="primary" category="h6">
        {title}
      </Text>

      {buttonProps && <Button {...buttonProps} />}
    </View>

    {children}
  </>
);

export default PageTopWrapper;
