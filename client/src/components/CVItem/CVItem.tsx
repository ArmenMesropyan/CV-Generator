import { Button, Card, Icon, Text } from "@ui-kitten/components";
import React, { FC, useCallback } from "react";
import { View } from "react-native";
import { RootStackNavigationProp } from "../../types";
import { styles } from "./styles";

export interface CVItemProps {
  id: number;
  name: string;

  navigation: RootStackNavigationProp<"CVList">;
}

const CVItem: FC<CVItemProps> = ({ navigation, id, name }) => {
  const onView = useCallback(() => {
    navigation.navigate("CVDetail", {
      id,
      name,
    });
  }, [id, name]);

  return (
    <Card style={styles.card} onPress={onView}>
      <View style={styles.container}>
        <Text>{name}</Text>

        <Button
          onPress={onView}
          appearance="outline"
          accessoryLeft={<Icon name="eye-outline" />}
        />
      </View>
    </Card>
  );
};

export default CVItem;
