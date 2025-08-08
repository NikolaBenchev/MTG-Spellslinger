import { Form, Button } from "antd";
import { formConfig } from "./form.config";
import { createUser } from "../../features/users/users.async";

const Register = () => {
    return (
        <Form layout="vertical" onFinish={createUser}>
            {formConfig.map(item => <Form.Item {...item}>{item.component}</Form.Item>)}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Register