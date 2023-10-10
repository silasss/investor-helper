import { store } from 'shared';
import { Provider } from 'react-redux';
import { Menu } from '../components/organisms/Menu';

import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Menu />
      <Component {...pageProps} />
    </Provider>
  )
}
