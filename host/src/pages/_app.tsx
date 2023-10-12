import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BASE_PATH_BFF_API } from 'shared';
import { Menu } from '../components/organisms/Menu';

import { AppProps } from 'next/app'
import { store } from '@/app/store';

const client = new ApolloClient({
  uri: BASE_PATH_BFF_API,
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <ApolloProvider client={client}> */}
        <Menu />
        <Component {...pageProps} />
        {/* <div>Hi there!</div> */}
      {/* </ApolloProvider> */}
    </Provider>
  )  
}
