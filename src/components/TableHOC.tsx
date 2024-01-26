/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTable, Column, TableOptions, useSortBy, usePagination } from "react-table";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

// eslint-disable-next-line @typescript-eslint/ban-types
function TableHOC<T extends Object>(columns: Column<T>[], data: T[], containerClassName: string, heading: string, showPagination: boolean = false) {
	return function HOC() {
		const options: TableOptions<T> = {
			columns,
			data,
			initialState: {
				pageSize: 5,
			},
		};
		const {
			getTableProps,
			getTableBodyProps,
			headerGroups,
			page,
			prepareRow,
			nextPage,
			previousPage,
			canNextPage,
			canPreviousPage,
			pageCount,
			gotoPage,
			state: { pageIndex },
		} = useTable(options, useSortBy, usePagination);

		return (
			<div className={containerClassName}>
				<h2 className="heading">{heading}</h2>
				<table className="table" {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps(column.getSortByToggleProps())}>
										{column.render("Header")}
										{column.isSorted && (
											<span>{column.isSortedDesc ? <AiOutlineSortDescending /> : <AiOutlineSortAscending />}</span>
										)}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps}>
									{row.cells.map((cell) => (
										<td {...cell.getCellProps}>{cell.render("Cell")}</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
				{showPagination && pageCount >= 5 && (
					<div className="table-pagination">
						<button disabled={!canPreviousPage} onClick={previousPage}>
							Prev
						</button>
						<span>{`${pageIndex + 1} of ${pageCount}`}</span>
						<button disabled={!canNextPage} onClick={nextPage}>
							Next
						</button>
						<button disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)}>
							Go to Last Page
						</button>
					</div>
				)}
			</div>
		);
	};
}

export default TableHOC;
