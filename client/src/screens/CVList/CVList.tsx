import { Text } from "@ui-kitten/components";
import React, { FC } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { withAuthGuard } from "../../hoc";
import { selectUser } from "../../store/slices";
import { PropsWithNavigation } from "../../types";

const CVList: FC<PropsWithNavigation<"CVList">> = ({ navigation }) => {
  const user = useSelector(selectUser);

  return (
    <View>
      <Text>CVList</Text>
    </View>
  );
};

export default withAuthGuard(CVList);
