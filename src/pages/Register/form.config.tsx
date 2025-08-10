import { Input } from "antd";

export const formConfig = [{
    name: 'username',
    label: 'Username',
    rules: [{ required: true, message: 'Username is required.' }],
    component: <Input type="text" />,
    placeholder: "Username"
}, {
    name: 'email',
    label: 'Email',
    rules: [{ required: true, message: "Email is required." }],
    component: <Input type="text" />,
    placeholder: "Email"
}, {
    name: 'password',
    label: 'Password',
    rules: [{ required: true, message: "Password is required." }],
    component: <Input type="password" />,
    placeholder: "Password"
}, {
    name: 'repeatPassword',
    label: 'Repeat Password',
    rules: [{ required: true, message: "Please repeat your password." }],
    component: <Input type="password" />,
    placeholder: "Repeat Password"
}]