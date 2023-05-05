import { Table, Card,Checkbox} from "flowbite-react";
import Layout from "../../../components/layout";
import React from "react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";


interface ZamiinMedee extends ZamiinMedeeStatusType{
  id: string;
  createdAt: string;
  updatedAt: string;
  location: string
  date: string;
  zamStatusTypeId?: string;
  [statusTypeName: string]: any;
}
interface ZamiinMedeeStatusType{
  statusTypeId: string;
  statusTypeName: string;
}

export interface InquiryDetail extends Supplier{
  id: string;
  createdAt: string;
  updatedAt: string;
  affiliateId: string;
  partNumber: string;
  quantity: number;
  netPrice: number;
  productId?: string;
  supplierId?: string;
  inquiryId?: string;
  orderDetailId?: string;
  statusTypeId?: string;
  [supplierList: string]: any;
}

 export interface Supplier{
  supplierList: string;
  vehicleManufacturerId?: string
}
interface OrderDetail extends InquiryDetail{
  order_id: string;
  userId?: string;
  teevriinzahialgaId?: string;
}
interface StatusType extends InquiryDetail{
  statusName: string;
}
const My = () => {
  const { data: zaminMedee } = useQuery("getZaminMedee", getZaminMedee);

  const { data: inquiryDetail } = useQuery("getInquiryDetail", getInquiryDetail);

  async function getInquiryDetail(){
    const response = await axiosClient.get("/inquiry_details");
    return response.data as InquiryDetail[];
  }
  async function getZaminMedee() {
    const response = await axiosClient.get("/zamin_medees");
    return response.data as ZamiinMedee[];
  }

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h5 className="text-1xl">Миний захиалгууд</h5>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-4">
                <Card>
                  <h5 className="text-1xl">Захиалгийн жагсаалт</h5>
                  <div className="flex gap-4">
                    <a href="#">Идэвхитэй</a>
                    <a href="/history">Түүх</a>
                  </div>
                  <Table>
                      <Table.Head className="uppercase">
                      <Table.HeadCell><Checkbox/></Table.HeadCell>
                       <Table.HeadCell>Захиалгийн дугаар</Table.HeadCell>
                       <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                       <Table.HeadCell>Статус төрөл</Table.HeadCell>
                     
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {inquiryDetail?.map((inquiryDetail: InquiryDetail, index: number) => (
                          <Table.Row key={index}>
                            <Table.Cell></Table.Cell>
                            <Table.Cell>{inquiryDetail.orderDetail.order_id}</Table.Cell>
                            <Table.Cell>{inquiryDetail.supplier.supplierList}</Table.Cell>
                            <Table.Cell><a href="/create">{inquiryDetail.statusType.statusName}</a></Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                </Card>
              </div>
              <div className="p-4">
                <Card>
                  <h5 className="text-1xl">Захиалгийн дэлгэрэнгүй</h5>
                  <div className="flex gap-4">
                    <Table>
                      <Table.Head className="uppercase">
                      <Table.HeadCell>Захиалга</Table.HeadCell>
                       <Table.HeadCell>Партын дугаар</Table.HeadCell>
                       <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                       <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                       <Table.HeadCell>Currency</Table.HeadCell>
                       {/* <Table.HeadCell>Нийт үнэ</Table.HeadCell> */}
                      </Table.Head>
                      <Table.Body className="divide-y">
                       {inquiryDetail?.map((inquiryDetail: InquiryDetail, index: number)=> (
                         <Table.Row key={index}>
                         <Table.Cell>{inquiryDetail.orderDetail.order_id}</Table.Cell>
                         <Table.Cell>{inquiryDetail.partNumber}</Table.Cell>
                         <Table.Cell>{inquiryDetail.quantity}</Table.Cell>
                         <Table.Cell>{inquiryDetail.netPrice}</Table.Cell>
                         <Table.Cell>{inquiryDetail.currency}</Table.Cell>
                         {/* <Table.Cell>{inquiryDetail.quantity * inquiryDetail.netPrice}</Table.Cell> */}
                       </Table.Row>
                       ))}
                      </Table.Body>
                    </Table>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-span">
            <div className="p-4">
              <Card className="max-w-sm">
                <h5 className="text-1xl">Замын мэдээний дэлгэрэнгүй</h5>
                <div className="flex gap-4">
                <Table>
                        <Table.Head className="uppercase">
                          <Table.HeadCell>Байршил</Table.HeadCell>
                          <Table.HeadCell>Статус</Table.HeadCell>
                          <Table.HeadCell>Он сар</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                          {zaminMedee?.map((zaminMedee: ZamiinMedee, index: number)=> (
                            <Table.Row key={index}>
                              <Table.Cell>{zaminMedee.location}</Table.Cell>
                              <Table.Cell>{zaminMedee.zamStatusType.statusTypeName}</Table.Cell>
                              <Table.Cell>{zaminMedee.date}</Table.Cell>
                            </Table.Row>
                          ))}
                        </Table.Body>
                      </Table>
                </div>
              </Card>
            </div>
          </div>
      </div>
      
    </Layout>
  );
};
export default My;
