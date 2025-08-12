import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spin, Table, type TableProps } from "antd";

import { getUsersState } from "../../../selectors";
import type { AppDispatch } from "../../../store/store";
import { getUsersTableConfig } from "./table.config";
import { deleteUser, getUsers } from "../../../features/users/users.async";
import type { UserModel } from "../../../features/users/models/User";

const UserTable: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [tableConfig, setTableConfig] = useState<TableProps<UserModel> | null>(null);
    const { list, pagination, isLoading } = useSelector(getUsersState);

    const handleDelete = (uuid: string) => dispatch(deleteUser(uuid));


    useEffect(() => {
        dispatch(getUsers())
            .then(() =>
                setTableConfig(
                    getUsersTableConfig({
                        handleDelete
                    })
                ));
    }, []);

    return (
        <>
            {isLoading ?
                <Spin size="large" />
                :
                <Table dataSource={list} columns={tableConfig?.columns} pagination={{ position: ['bottomRight'] }} />
            }
        </>
    );
}

export default UserTable;