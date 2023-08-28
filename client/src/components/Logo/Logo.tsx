import { Text, TextProps } from "@ui-kitten/components";
import { FC } from "react";

const Logo: FC<TextProps> = (props) => (
  <Text category="h5" {...props}>
    CV Generator
  </Text>
);

export default Logo;
