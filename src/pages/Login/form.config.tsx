import { Input } from "antd";

export const formConfig = [{
    name: 'email',
    label: 'Email',
    rules: [{ required: true, message: 'Email is required.' }],
    component: <Input type="text" />,
    placeholder: "Email"
}, {
    name: 'Password',
    label: 'Password',
    rules: [{ required: true, message: 'Password is required.' }],
    component: <Input type="password" />,
    placeholder: "Password"
}];