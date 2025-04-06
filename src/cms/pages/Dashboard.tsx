import { IItemDropDown } from "../../shared/interface/itemDropdown";
import MainHeader from "../components/Headers/MainHeader";
import DetailHeader from "../components/Headers/DetailHeader";
import SelectDateFilter from "../components/Selects/SelectDateFilter";
import BarChart from "../components/Charts/BarChart";
import {
  dataChart,
  dataChartHorizontal,
  labels,
} from "../../dummyData/dataChart";
import PieChart from "../components/Charts/PieChart";
import { dataPieChart, statementExecution } from "../../dummyData/dataPieChart";
import SalesTrackingCard from "../components/Card/SalesTrackingCard";
import { dataCardProduct, dataSale } from "../../dummyData/dataCards";
import { IDataSaleTrackingCard } from "../../shared/interface/card";

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
        <div className="w-full h-full">
          <DetailHeader
            title="Top sản phẩm sản xuất nhiều nhất"
            filter={SelectDateFilter(itemMenu)}
            children={
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
                {dataSale &&
                  dataSale?.length > 0 &&
                  dataSale.map((item: IDataSaleTrackingCard, index: number) => (
                    <SalesTrackingCard key={index} data={{ ...item }} />
                  ))}
              </div>
            }
          />
          <div className="w-full h-full flex gap-6 flex-col table-custom:flex-row">
            <DetailHeader
              title="Kế hoạch sản xuất"
              filter={SelectDateFilter(itemMenu)}
              className="shadow-dropdow-custom"
              children={
                <BarChart
                  labels={labels}
                  data={dataChart}
                  step={20}
                  max={100}
                  chartHeight={316}
                  showLegend
                  lableCategory="Mặt hàng"
                  lableValue="Cái"
                />
              }
            />
            <DetailHeader
              title="Top 5 khách hàng có sản lượng nhiều nhất"
              filter={SelectDateFilter(itemMenu)}
              className="shadow-dropdow-custom"
              children={
                <BarChart
                  labels={labels}
                  data={dataChartHorizontal}
                  step={20}
                  max={100}
                  horizontal={true}
                  showLegend={false}
                  chartHeight={316}
                  lableCategory="Khách hàng"
                  lableValue="Sản lượng"
                />
              }
            />
          </div>
          <div>
            <DetailHeader
              title="Tình hình sản xuất"
              filter={SelectDateFilter(itemMenu)}
              className="shadow-dropdow-custom"
              children={
                <div className="">
                  <PieChart
                    data={dataPieChart}
                    dataExecution={statementExecution}
                  />
                  <div className="flex gap-2">
                    {dataCardProduct &&
                      dataCardProduct?.length > 0 &&
                      dataCardProduct.map(
                        (item: IDataSaleTrackingCard, index: number) => (
                          <SalesTrackingCard
                            key={index}
                            data={{ ...item }}
                            className="shadow-none border border-gray-custom/40 !p-2 rounded-[8px]"
                          />
                        )
                      )}
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
