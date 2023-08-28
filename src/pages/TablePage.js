// import Table from "./Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-300", score: 1 },
    { name: "Lime", color: "bg-green-400", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: (dataObj) => dataObj.name,
      sortValue: (dataObj) => dataObj.name,
    },
    {
      label: "Color",
      render: (dataObj) => <div className={`m-2 p-3 ${dataObj.color}`}></div>,
    },
    {
      label: "Score",
      render: (dataObj) => dataObj.score,
      sortValue: (dataObj) => dataObj.score,
    },
  ];

  const keyFn = (dataObj) => {
    return dataObj.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
