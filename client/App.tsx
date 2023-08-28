import * as eva from "@eva-design/eva";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApplicationProvider } from "@ui-kitten/components";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useColorScheme } from "react-native";
import { StyledNavigationContainer } from "./src/components";
import { screens } from "./src/screens/config";
import en from "./translations/en.json";

const Stack = createNativeStackNavigator();

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    en: {
      translation: en,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <ApplicationProvider
      {...eva}
      theme={colorScheme ? eva[colorScheme] : eva.light}
    >
      <StyledNavigationContainer>
        <Stack.Navigator>
          {Object.entries(screens).map(([name, component], index) => (
            <Stack.Screen
              key={index}
              name={name}
              component={component}
              options={{
                headerTitle: "",
                headerShadowVisible: false,
              }}
            />
          ))}
        </Stack.Navigator>
      </StyledNavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
