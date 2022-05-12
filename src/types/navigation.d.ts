export type AppStackParamsList = {
  Home: undefined;
  Loading: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamsList {}
  }
}
