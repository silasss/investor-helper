import { Provider } from "react-redux";

const Providers = ({ children, store }: {children: React.ReactNode, store: any}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Providers;
