import type { UserModel } from "../../../features/users/models/User"
import { Popconfirm, Button } from "antd"
import { DeleteOutlined } from "@ant-design/icons"

export const getUsersTableConfig = ({
    handleDelete
}: {
    handleDelete: (uuid: string) => void
}) => {
    const config = {
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
            render: (_: any, user: UserModel) =>
                <Popconfirm
                    placement="bottomRight"
                    title={`Are you sure you want to delete ${user.username}`}
                    onConfirm={() => handleDelete(user.uuid)}
                >
                    <Button type="link" danger icon={<DeleteOutlined />} />
                </Popconfirm>
        }]
    }
    return config;
}