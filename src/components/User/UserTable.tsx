import { Table } from "antd";
import { userTableConfig } from "./table.config";
import type { UserModel } from "../../features/users/models/User";

interface Props {
    dataSource: UserModel[]
}

const UserTable: React.FC<Props> = ({ dataSource }) => {

    console.log(dataSource);
    return (
        <Table dataSource={dataSource} columns={userTableConfig.columns} pagination={{ position: ['bottomRight'] }} />
    );
}

export default UserTable;