import React from "react";

const DataTable = ({ data, columns, actions = [], dataDisplay }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {column.headerName}
                            </th>
                        ))}
                        {actions.map((action, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                <span className="sr-only">{action.name}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={`col+${colIndex}`}
                                        className="px-6 py-4"
                                    >
                                        {dataDisplay(column.field, item)}
                                    </td>
                                ))}
                                {actions.map((action, actionIndex) => (
                                    <td
                                        key={`action+${actionIndex}`}
                                        className="px-6 py-4"
                                    >
                                        <a
                                            href="#"
                                            onClick={(e) =>
                                                action.callback.call(e, item)
                                            }
                                            className="font-medium text-blue-500 dark:text-blue-300 hover:underline"
                                        >
                                            {action.name}
                                        </a>
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length + actions.length}
                                className="text-center py-4"
                            >
                                No data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
