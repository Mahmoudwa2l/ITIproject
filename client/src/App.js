import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {useSelector} from 'react-redux';
import {
  Home,
  ProjectPage,
  PricingPage,
  SignIn,
  Checkout,
  PageNotFound,
  AboutPage,
  BeatsPage,
  Cart,
  SingleBeatPage,
} from "./pages/index";
import { Footer, NavBar } from "./components";

const queryClient = new QueryClient();

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      <Footer />
    </>
  );
}
function Layout2({ children }) {
  return (
    <>
      <NavBar />
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </>
  );
}

function App() {
  const user = useSelector((state) => state.user.currentUser);
 /*  const readuser = user ? user : false; */
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Outlet /></Layout>}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          
          <Route path="/about" element={<AboutPage />} />
          
          <Route path="/beat/:id" element={<SingleBeatPage />} />
        </Route>

        <Route path="/" element={<Layout2><Outlet /></Layout2>}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/beats" element={<BeatsPage />} />
        </Route>

        {/* Use Navigate for redirection */}
        <Route
          path="/signin"
          element={user ? <Navigate to="/" /> : <SignIn />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
