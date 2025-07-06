import {COUNT_PER_PAGE} from "@/common/constants";
import {Pagination, Typography} from "@mui/material";
import styles from "./TasksPagination.module.css";
import {ChangeEvent} from 'react';

type Props = {
    totalCount: number
    page: number
    setPage: (page: number) => void
}

export const TasksPagination = ({totalCount, page, setPage}: Props) => {
    const changePage = (_: ChangeEvent<unknown>, page: number) => {
        setPage(page);
    };
    return (
        <>
            <Pagination
                count={Math.ceil(totalCount / COUNT_PER_PAGE)}
                page={page}
                onChange={changePage}
                variant="outlined"
                color="secondary"
                className={styles.pagination}
            />
            <div className={styles.totalCount}>
                <Typography variant="caption">Total: {totalCount}</Typography>
            </div>
        </>
    );
};