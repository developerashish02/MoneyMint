import { Suspense, lazy } from "react";
import "./App.css";
import Loading from "./components/Loading";

const SideBar = lazy(() => import("./components/SideBar"));
const MainBody = lazy(() => import("./components/MainBody"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <div className="flex h-full">
      <div className="w-1/6 bg-gray-200">
        <Suspense fallback={<Loading />}>
          <SideBar />
        </Suspense>
      </div>

      {/* Main Content */}
      <div className="w-5/6">
        <div className="bg-white">
          <Suspense fallback={<Loading />}>
            <Header />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<Loading />}>
            <MainBody />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
