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
import { dataSale } from "../../dummyData/dataCards";
import { IDataSaleTrackingCard } from "../../shared/interface/card";
import ProgressItem from "../components/ProgressItem";
import { dataProductProgress } from "../../dummyData/dataProductProgress";
import { IProgressItemProps } from "../../shared/interface/productProgress";
import TableProduct from "../components/Table/TableProduct";
import { dataTableProduct } from "../../dummyData/dataTable";

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
            className="!px-0"
            children={
              <div className="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-3 lg:grid-cols-5">
                {dataSale &&
                  dataSale?.length > 0 &&
                  dataSale.map((item: IDataSaleTrackingCard, index: number) => (
                    <SalesTrackingCard key={index} data={{ ...item }} />
                  ))}
              </div>
            }
          />
          <div className="w-full h-full flex gap-6 flex-col table-custom:flex-row mb-6">
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
          <div className="flex flex-col gap-6 xl:flex-row">
            <div className="flex flex-col md:flex-row gap-6 xl:w-2/3">
              <DetailHeader
                title="Tình hình sản xuất"
                filter={SelectDateFilter(itemMenu)}
                className="shadow-dropdow-custom"
                children={
                  <PieChart
                    data={dataPieChart}
                    dataExecution={statementExecution}
                  />
                }
              />
              <DetailHeader
                title="Tiến độ sản xuất theo nhóm"
                filter={SelectDateFilter(itemMenu)}
                className="shadow-dropdow-custom"
                children={
                  <div className="flex flex-col gap-8 max-h-[466px] overflow-y-scroll pr-1">
                    {dataProductProgress && dataProductProgress.length > 0
                      ? dataProductProgress.map(
                          (item: IProgressItemProps, index: number) => (
                            <ProgressItem
                              data={{ ...item }}
                              key={index}
                            ></ProgressItem>
                          )
                        )
                      : Array(7)
                          .fill(0)
                          .map((_item: number, index: number) => (
                            <ProgressItem key={index}></ProgressItem>
                          ))}
                  </div>
                }
              />
            </div>
            <div className=" xl:w-1/3">
              <DetailHeader
                title="Nguyên vật liệu cần mua"
                filter={SelectDateFilter(itemMenu)}
                className="shadow-dropdow-custom"
                paddingCustom
                children={<TableProduct data={dataTableProduct} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
