import productImage from "../../../assets/images/product.png";
import nodataTable from "../../../assets/images/nodataTable.png";
import { IDataTableProps } from "../../../shared/interface/table";

export default function TableProduct({ data }: { data: IDataTableProps[] }) {
  return (
    <div className="overflow-x-scroll w-full h-ful">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr className="text-left !text-xs !font-semibold !text-gray-custom !leading-[16px]">
            <th className="px-5 py-2 md:py-4">STT</th>
            <th className="px-2 py-2 md:py-4 w-full">Nguyên vật liệu</th>
            <th className="px-2 py-2 md:py-4 !min-w-[79px] md:!min-w-[99px]">
              Đơn vị tính
            </th>
            <th className="px-5 py-2 md:py-4 !min-w-[103px]">Số lượng</th>
          </tr>
        </thead>
        <tbody className="w-full h-full">
          {data && data.length > 0 ? (
            data.map((item: IDataTableProps, index: number) => (
              <tr
                key={item?.id}
                className="last:border-b-0 bg-white border-b-1 border-gray-custom/10 !text-sm !leading-[24px] !font-semibold "
              >
                <td className="py-[19px] text-center w-[64px]">{index + 1}</td>
                <td className="py-[19px]">
                  <div className="flex flex-row gap-2 px-2">
                    <div className="min-w-8 h-8 max-h-8">
                      <img
                        className="w-full h-full object-cover"
                        src={productImage}
                        alt={item?.name}
                      />
                    </div>
                    <div className="flex gap-1 flex-col">
                      <p className="font-medium !leading-[16px] line-clamp-1">
                        {item?.name}
                      </p>
                      <p className="!text-[10px] !font-normal !leading-[12px] text-gray-custom/80 line-clamp-1">
                        (none)
                      </p>
                      <p className="!text-[10px] !font-normal !leading-[12px] text-light-blue-custom line-clamp-1">
                        {item?.code}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="!min-w-[79px] md:!min-w-[99px] px-2">
                  <p>{item?.unit}</p>
                </td>
                <td className="py-[19px] text-center !min-w-[103px]">
                  <p className="line-clamp-1">{item?.quantity}</p>
                </td>
              </tr>
            ))
          ) : (
            <tr className="!w-full">
              <td colSpan={4} className="w-full">
                <div className="!w-full h-full flex flex-col items-center justify-center py-[72px]">
                  <div className="w-[250px] h-[250px]">
                    <img
                      src={nodataTable}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <p className="!text-2xl !font-medium !leading-[32px] text-gray-custom/50">
                    Chưa có dữ liệu
                  </p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
