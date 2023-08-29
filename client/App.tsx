import * as eva from "@eva-design/eva";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { AuthWrapper, StyledNavigationContainer } from "./src/components";
import { screens } from "./src/screens/config";
import { store } from "./src/store";
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
    <Provider store={store}>
      <AuthWrapper>
        <ApplicationProvider
          {...eva}
          theme={colorScheme ? eva[colorScheme] : eva.light}
        >
          <IconRegistry icons={EvaIconsPack} />

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
      </AuthWrapper>
    </Provider>
  );
};

export default App;
