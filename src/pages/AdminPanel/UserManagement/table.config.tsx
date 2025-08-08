import type { UserModel } from "../../../features/users/models/User"
import { Popconfirm, Button, type TableProps } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { deleteUser } from "../../../features/users/users.async"

export const tableConfig: TableProps<UserModel> = {
    columns: [{
        title: 'Uuid',
        dataIndex: 'uuid',
        key: 'uuid'
    }, {
        title: 'Display Name',
        dataIndex: 'displayName',
        key: 'displayName'
    }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Actions',
        key: 'action',
        render: (_, user) =>
            <Popconfirm placement="bottomRight" title="delete user" onConfirm={() => deleteUser(user.uuid)}>
                <Button type="link" danger icon={<DeleteOutlined />} />
            </Popconfirm>
    }
    ]
}