import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.scss';
import Provider from 'react-redux';
import { store } from '../redux/store';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="red"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      {/* <Provider store={store}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
    </>
  );
}

export default wrapper.withRedux(MyApp);
