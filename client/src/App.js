import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

function App() {
  const user = false; // You can replace this with your actual user authentication logic
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Outlet /></Layout>}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/beats" element={<BeatsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/beat/:id" element={<SingleBeatPage />} />
          {/* Remove the extra closing </Route> tag */}
        </Route>
        {/* Use Navigate for redirection */}
        <Route
          path="/signin"
          element={user ? <Navigate to="/" /> : <SignIn />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
