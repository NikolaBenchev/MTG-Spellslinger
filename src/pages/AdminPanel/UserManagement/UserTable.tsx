import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spin, Table } from "antd";

import { getUsersState } from "../../../selectors";
import type { AppDispatch } from "../../../store/store";
import { tableConfig } from "./table.config";
import { getUsers } from "../../../features/users/users.async";

const UserTable: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { list, pagination, isLoading } = useSelector(getUsersState);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <>
            {isLoading ? <Spin size="large"/> : <Table dataSource={list} columns={tableConfig.columns} pagination={{ position: ['bottomRight'] }} />}
        </>
    );
}

export default UserTable;