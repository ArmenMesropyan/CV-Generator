import { Text, TextProps } from "@ui-kitten/components";
import { FC } from "react";
import { View } from "react-native";

const Logo: FC<TextProps> = (props) => (
  <View>
    <Text category="h5" {...props}>
      CV Generator
    </Text>

    <Text>Created by Armen Mesropyan</Text>
    <Text>(country: Armenia, city: Abovyan)</Text>
  </View>
);

export default Logo;
