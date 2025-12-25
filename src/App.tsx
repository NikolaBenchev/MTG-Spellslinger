import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState } from "./selectors";
import { checkAuth } from "./features/auth/auth.async";
import type { AppDispatch } from "./store/store";
import RouteManager from "./routes/RouteManager";
import Navbar from "./components/SideNav/SideNav";
import Layout from "antd/es/layout/layout";
import { useSyncUserToRedux } from "./hooks/useSyncUserDataToRedux";

function App() {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading } = useSelector(getAuthState);

    useSyncUserToRedux();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Layout hasSider>
                <Navbar />
                <Layout>
                    <RouteManager />
                </Layout>
            </Layout>
        </Suspense>
    );
}

export default App;
