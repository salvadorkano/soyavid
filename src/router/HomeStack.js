import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import ProfileScreen from '../screens/Profile/Profile';
import PromotionsScreen from '../screens/ Promotions/ Promotions';
import AvailabilityScreen from '../screens/Availability/Availability';
// import PlansSreen from '../screens/RegisterSteps/Plans/plans';
// import Payment from '../screens/RegisterSteps/Payment 01/method';
// import Description from '../screens/RegisterSteps/Description 02/description';
// import AvailabilityScreen from '../screens/RegisterSteps/Availability 07/availability';
// import AddMenuScreen from '../screens/RegisterSteps/AddMenu 09/addMenu';
// import CategoriesScreen from '../screens/RegisterSteps/AddMenu 09/menuCategories';
// import ReservationsScreen from '../screens/Drawer/Reservations/reservations';
// import NewReservation from '../screens/Drawer/Reservations/AddReservation/addReserv';
// import ReservationDetails from '../screens/Drawer/Reservations/ReservationView/reservView';
// import OrdersScreen from '../screens/Drawer/Orders/orders';
// import ListScreen from '../screens/WaitingList/list';
// import RequestsScreen from '../screens/Drawer/Requests/requests';
// import NewRequest from '../screens/Drawer/Requests/addRequest/newRequest';
// import PromotionsScreen from '../screens/Drawer/Promotions/promotions';
// import AddPromoScreen from '../screens/Drawer/Promotions/newPromo/newPromo';
// import PreferencesScreen from '../screens/Drawer/Reservations/Preferences/preferences';
// import ImagesScreen from '../screens/RegisterSteps/Images 03/images';
// import DetailsScreen from '../screens/RegisterSteps/Details  04/details';
// import HoursScreen from '../screens/RegisterSteps/Hours 05/hours';
// import CapacityScreen from '../screens/RegisterSteps/Capacity 06/capacity';
// import ProtocolsScreen from '../screens/RegisterSteps/Protocols 08/Protocols';
// import BillingScreen from '../screens/RegisterSteps/Billing 10/billing';
const HomeNav = createNativeStackNavigator();

function HomeStack() {
  return (
    <HomeNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <HomeNav.Screen name="HomeScreen" component={Home} />
      <HomeNav.Screen name="Profile" component={ProfileScreen} />
      <HomeNav.Screen name="Promotions" component={PromotionsScreen} />

      {/* <HomeNav.Screen name="Plans" component={PlansSreen} />
      <HomeNav.Screen name="1" component={Payment} />
      <HomeNav.Screen name="2" component={Description} />
      <HomeNav.Screen name="3" component={ImagesScreen} />
      <HomeNav.Screen name="4" component={DetailsScreen} />
      <HomeNav.Screen name="5" component={HoursScreen} />
      <HomeNav.Screen name="6" component={CapacityScreen} />
      <HomeNav.Screen name="7" component={AvailabilityScreen} />
      <HomeNav.Screen name="Protocols" component={ProtocolsScreen} />
      <HomeNav.Screen name="AddMenu" component={AddMenuScreen} />
      <HomeNav.Screen name="AddManualMenu" component={CategoriesScreen} />
      <HomeNav.Screen name="Billing" component={BillingScreen} />
      <HomeNav.Screen name="Reservations" component={ReservationsScreen} />
      <HomeNav.Screen name="AddReserv" component={NewReservation} />
      <HomeNav.Screen name="ReservDetails" component={ReservationDetails} />
      <HomeNav.Screen name="Preferences" component={PreferencesScreen} />
      <HomeNav.Screen name="Orders" component={OrdersScreen} />
      <HomeNav.Screen name="WaitingList" component={ListScreen} />
      <HomeNav.Screen name="AcceptWaiting" component={ReservationDetails} />
      <HomeNav.Screen name="Requests" component={RequestsScreen} />
      <HomeNav.Screen name="AddRequest" component={NewRequest} />
      <HomeNav.Screen name="Promotions" component={PromotionsScreen} />
      <HomeNav.Screen name="AddPromo" component={AddPromoScreen} /> */}
    </HomeNav.Navigator>
  );
}

export default HomeStack;
