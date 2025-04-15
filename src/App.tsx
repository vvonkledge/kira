import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";

// Page components
const Home = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Welcome to Kira</h1>
    <p>This is a demo app with Clerk authentication integration.</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard (Protected)</h1>
      <p>This is a protected route that only authenticated users can access.</p>
    </div>
  );
};

// Layout component to include navbar on all pages
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* Auth routes */}
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Layout>
                  <Dashboard />
                </Layout>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
