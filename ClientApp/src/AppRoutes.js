// import { Counter } from "./components/Counter";
// import { FetchData } from "./components/FetchData";
import { Peserta } from "./components/Peserta";
import { Test } from "./components/Test";
import { TestPeserta } from "./components/TestPeserta";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/peserta',
    element: <Peserta />
  },
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '/testpeserta',
    element: <TestPeserta />
  }
];

export default AppRoutes;
