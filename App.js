import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import MenuScreen from "./src/screens/MenuScreen";
import ProductScreen from "./src/screens/ProductScreen";
import CartScreen from "./src/screens/CartScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Register: RegisterScreen,
    Menu: MenuScreen,
    Product: ProductScreen,
    Cart: CartScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Moft"
    }
  }
);

export default createAppContainer(navigator);