import type { UserModel } from "../../features/users/models/User"

export const userTableConfig = {
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
    // {
    //     title: 'Actions',
    //     key: 'action',
    //     render: (_, user) => (
    //         <a>Delete<a>
    //     )
    // }
]
}