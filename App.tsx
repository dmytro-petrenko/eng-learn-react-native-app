import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { RootStackParamList } from './App.types';
import {
  HomeScreen,
  WordStacksScreen,
  StartLessonScreen,
  ReviewScreen,
  WordListScreen,
  WordDefinitionsScreen,
} from './src/screens';
// import {
//   connectionToDatabase,
//   createWordStackFun,
//   createWordDefinitionsFun,
//   // removeAllWordStacksFun,
//   // removeAllWordDefinitionsFun,
// } from './src/db';

function App(): JSX.Element {
  const AppStack = createStackNavigator<RootStackParamList>();

  // const createData = React.useCallback(async () => {
  //   try {
  //     const db = await connectionToDatabase();
  //     await createWordStackFun(db);
  //     await createWordDefinitionsFun(db);

  //     // await removeAllWordStacksFun(db);
  //     // await removeAllWordDefinitionsFun(db);

  //     db.close();
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Something went wrong!');
  //   }
  // }, []);

  // React.useEffect(() => {
  //   // createData();
  // }, []);

  return (
    <Provider store={store}>
      <SafeAreaView
        // style={backgroundStyle}#FFF0DB
        style={{ flex: 1, backgroundColor: 'red' }}
      >
        <NavigationContainer>
          <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <AppStack.Screen
              name="WordStacksScreen"
              component={WordStacksScreen}
              options={{
                headerShown: false,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <AppStack.Screen
              name="StartLessonScreen"
              component={StartLessonScreen}
              options={{
                headerShown: false,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <AppStack.Screen
              name="ReviewScreen"
              component={ReviewScreen}
              options={{
                headerShown: false,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <AppStack.Screen
              name="WordListScreen"
              component={WordListScreen}
              options={{
                headerShown: false,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <AppStack.Screen
              name="WordDefinitionsScreen"
              component={WordDefinitionsScreen}
              options={{
                headerShown: false,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
          </AppStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
export default App;
