import { NavigatorScreenParams } from "@react-navigation/native";

export type TabParamList = {
  HomeScreen: undefined;
  ContactScreen: undefined;
  GalleryScreen: undefined;
  Chat: undefined;
  Training: undefined;
};

export type DashboardTabParamList = {
  DashboardHome: undefined;
  Tools: undefined;
  Action: undefined;
  Accounts: undefined;
  Funds: undefined;
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<TabParamList>;
  DashboardTabs: NavigatorScreenParams<DashboardTabParamList>;
  Contact: undefined;
  ContactList: undefined;
  Gallery: undefined;
  FlexLayout: undefined;
  ShoppingCart: undefined;
  Training: undefined; // Included in Tab Navigator
};
