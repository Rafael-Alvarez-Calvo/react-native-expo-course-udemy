// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { BasicsTypes } from "./typescript/BasicsTypes";
// import { ObjectLiterals } from "./typescript/ObjectLiterals";
// import { Counter } from "./typescript/Counter";
// import { LoginPage } from "./typescript/LoginPage";

import { AuthProvider } from "./context/AuthContext";
import { FormsPage } from "./typescript/FormsPage";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col items-center justify-center h-100vh py-10">
        <h1 className="text-4xl font-bold underline">React + TS</h1>
        {/* <BasicsTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  );
}

export default App;
