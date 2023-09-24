import { Outlet, Route, Routes } from "react-router-dom";
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
} from "./pages/index"; // Import your pages
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
   // Initialize the cart state here

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
        </Route>
        <Route path="/singin" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
