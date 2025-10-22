import { Form, Button } from "antd";

interface Props {
    onSubmit: (values: any) => void;
    formConfig: any;
}

const CustomForm: React.FC<Props> = ({ onSubmit, formConfig }) => {
    return (
        <Form layout="vertical" onFinish={onSubmit}>
            {formConfig.map((item: any) => (
                <Form.Item {...item}>{item.component}</Form.Item>
            ))}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CustomForm;
