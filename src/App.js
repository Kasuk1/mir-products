import { AppRouter } from "./routes/AppRouter";
import GlobalStyle from "./styles/GlobalStyle";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab)

function App() {
  return (
    <>
      <AppRouter />
      <GlobalStyle />
    </>
  );
}

export default App;
