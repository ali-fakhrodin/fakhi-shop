import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./pages/Home";
import Basket from "./pages/Basket.jsx";
import Products from "./pages/Products.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false}> */}
        <BrowserRouter>
          <Routes>
            <Route path="" element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="login" element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route path="basket" element={<Basket />} />
              <Route path="products" element={<Products />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      {/* </ReactQueryDevtools> */}
    </QueryClientProvider>
  );
}
export default App;
