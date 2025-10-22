import CustomForm from "../../components/CustomForm";
import { formConfig } from "./form.config";
import { loginUser } from "../../features/auth/auth.async";
import type { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import useAuthDashboardRedirect from "../../hooks/useAuthDashboardRedirect";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = async (formData: FormData) => {
    dispatch(loginUser(formData));
  };

  useAuthDashboardRedirect();

  return (
    <>
      <CustomForm onSubmit={onSubmit} formConfig={formConfig} />
    </>
  );
};

export default Login;
