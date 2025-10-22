import { formConfig } from "./form.config";
import { createUser } from "../../features/users/users.async";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router";
import CustomForm from "../../components/CustomForm";
import useAuthDashboardRedirect from "../../hooks/useAuthDashboardRedirect";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit = async (formData: FormData) => {
    const result = await dispatch(createUser(formData));

    if (result.meta.requestStatus === "fulfilled") navigate("/login");
  };

  useAuthDashboardRedirect();

  return <CustomForm onSubmit={onSubmit} formConfig={formConfig} />;
};

export default Register;
