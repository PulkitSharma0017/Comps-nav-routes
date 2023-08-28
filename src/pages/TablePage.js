import Table from "../components/Table";

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
    },
    {
      label: "Color",
      render: (dataObj) => <div className={`m-2 p-3 ${dataObj.color}`}></div>,
    },
    {
      label: "Score",
      render: (dataObj) => dataObj.score,
      header: () => <th className="bg-red-500">Score</th>,
    },
  ];

  const keyFn = (dataObj) => {
    return dataObj.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
