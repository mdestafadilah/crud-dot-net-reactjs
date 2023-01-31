// import { Counter } from "./components/Counter";
// import { FetchData } from "./components/FetchData";
import { Peserta } from "./components/Peserta";
import { Alat } from "./components/Alat";
import { AlatPeserta } from "./components/AlatPeserta";
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
    path: '/alat',
    element: <Alat />
  },
  {
    path: '/alatpeserta',
    element: <AlatPeserta />
  }
];

export default AppRoutes;
