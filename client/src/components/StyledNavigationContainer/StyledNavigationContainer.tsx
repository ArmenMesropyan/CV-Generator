import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@ui-kitten/components";
import { FC, PropsWithChildren } from "react";

const StyledNavigationContainer: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          card: theme["background-basic-color-1"],
          background: theme["background-basic-color-1"],
          text: theme["text-basic-color"],
        },
      }}
    >
      {children}
    </NavigationContainer>
  );
};

export default StyledNavigationContainer;
