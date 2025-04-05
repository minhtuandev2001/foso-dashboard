import { IItemDropDown } from "../../shared/interface/itemDropdown";
import MainHeader from "../components/Headers/MainHeader";
import DetailHeader from "../components/Headers/DetailHeader";
import BarChart from "../components/Charts/BarChart";
import { dataChart } from "../../shared/interface/chart";
import SelectDateFilter from "../components/Selects/SelectDateFilter";

const labels = [
  {
    title: "Kế hoạch",
    color: "#0375f3",
  },
  {
    title: "thực hiện",
    color: "#1fc583",
  },
];

const data: dataChart[] = [
  {
    label: "Áo ba lỗ",
    colums: [
      {
        data: 60,
      },
      {
        data: 40,
      },
    ],
  },
  {
    label: "Áo sơ mi",
    colums: [
      {
        data: 100,
      },
      {
        data: 60,
      },
    ],
  },
  {
    label: "Áo thun polo",
    colums: [
      {
        data: 80,
      },
      {
        data: 20,
      },
    ],
  },
  {
    label: "Quần baggy",
    colums: [
      {
        data: 70,
      },
      {
        data: 45,
      },
    ],
  },
  {
    label: "Quần jogger",
    colums: [
      {
        data: 90,
      },
      {
        data: 57,
      },
    ],
  },
];

export default function Dashboard() {
  const itemMenu: IItemDropDown[] = [
    {
      render: () => <p className="text-nowrap">Năm trước</p>,
    },
    {
      render: () => <p className="text-nowrap">Quý trước</p>,
    },
    {
      render: () => <p className="text-nowrap">Tháng trước</p>,
    },
    {
      render: () => <p className="text-nowrap">Tuần trước</p>,
    },
    {
      render: () => <p className="text-nowrap">Tuần này</p>,
    },
    {
      render: () => <p className="text-nowrap">Thàng này</p>,
    },
    {
      render: () => <p className="text-nowrap">Năm nay này</p>,
    },
  ];
  return (
    <div>
      <MainHeader></MainHeader>
      <div className="px-2 lg:px-[48px] w-full h-full">
        <div>card</div>
        <div className="w-full h-full">
          <div className="w-full h-full">
            <DetailHeader
              title="Kế hoạch sản xuất"
              filter={SelectDateFilter(itemMenu)}
              className="shadow-dropdow-custom"
              children={
                <BarChart
                  labels={labels}
                  data={data}
                  step={20}
                  max={100}
                  chartHeight={316}
                />
              }
            />
          </div>
          <div>char 2</div>
        </div>
      </div>
    </div>
  );
}
