import CustomForm from "../../components/CustomForm";
import { formConfig } from "./form.config";

const Login = () => {
    const onSubmit = async(formData: FormData) => {
        
    }

    return (
        <>
            <CustomForm onSubmit={onSubmit} formConfig={formConfig}/>
        </>
    );
}

export default Login;