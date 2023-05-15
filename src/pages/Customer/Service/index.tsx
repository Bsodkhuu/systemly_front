import React, {useRef, useState} from "react";
import { TextInput, Button, Table, Card } from "flowbite-react";
import Layout from "../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { 
  Calendar , 
  Badge, 
  Modal,
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd';
import { useSearchParams } from "react-router-dom";
import { ServiceAppointment } from "../../API";


const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
        {
          type: 'error',
          content: 'This is error event.',
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event',
        },
        {
          type: 'success',
          content: 'This is very long usual event。。....',
        },
        {
          type: 'error',
          content: 'This is error event 1.',
        },
        {
          type: 'error',
          content: 'This is error event 2.',
        },
        {
          type: 'error',
          content: 'This is error event 3.',
        },
        {
          type: 'error',
          content: 'This is error event 4.',
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const Service = () => {
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { RangePicker } = DatePicker;


  const { data: serviceAppointment } = useQuery("getServiceAppointment",()=> 
    getServiceAppointment({
      startTime: searchParams.get("startTime") || "",
    })
  );

  const startTimeRef = useRef<HTMLInputElement>(null);

  async function getServiceAppointment(params: { startTime: string }) {
    const response = axiosClient.get(`/service_appointments?startTime=${params.startTime}`);
    return (await response).data;
  }
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onFinish = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  return (
    <Layout>
      <div className="p-4 bg-gray-200 md:h-screen w-full ">
        <div className="bg-white md:p-6 p-4 rounded-lg space-y-4">
          <div className="md:flex justify-between md:mb-4 space-y-2">
            <h4 className="text-md">Үйлчилгээний цаг авах</h4>
            <div className="flex gap-4">
              {/* <TextInput id="date" type="date" />
              <Button className="bg-orange-500">Хайх</Button> */}
              <RangePicker />
               <Button className="bg-orange-500">Хайх</Button>
              <Button className="bg-orange-500" onClick={showModal} >Үйлчилгээний цаг авах</Button>
              <Modal title="Цаг авах" open={isModalOpen}
              footer={[]}
              closeIcon={[]}
              >
                <Form 
                      labelCol={{span: 10,}}
                      wrapperCol={{span: 12,}} 
                      layout="horizontal"
                      onFinish={onFinish}
                      name="basic"
                      autoComplete="off">
                  <Form.Item 
                    label="Хэрэглэгчийн нэр"
                    name="khereglegchiinNer"
                    rules={[{ required: true, message: 'Хэрэглэгчийн нэр оруулна уу'}]}
                  >
                  <input className="border border-stale-600 w-full rounded-md h-8 "/>
                  </Form.Item>
                  <Form.Item label="Хэрэглэгчийн код"  
                     name="registeriinDugaar"
                    rules={[{ required: true, message: 'Хэрэглэгчийн код оруулна уу'}]} 
                    >
                  <input className="border border-stale-600 w-full rounded-md h-8 "/>
                  </Form.Item>
                  <Form.Item label="Утас"
                  name="utas"
                  rules={[{ required: true, message: 'Утас оруулна уу'}]}>
                  <input className="border border-stale-600 w-full rounded-md h-8 "/>
                  </Form.Item>
                  <Form.Item label="Машин дугаар "
                  name="mashiniiDugaar"
                   rules={[{ required: true, message: 'Машиний дугаар сонгоно уу'}]}  >
                    <Select>
                      <Select.Option value="demo">1010УБУ</Select.Option>
                      <Select.Option value="demo1">1011УБУ</Select.Option>
                      <Select.Option value="demo2">1213УБУ</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Цаг"
                  name="tsag"
                   rules={[{ required: true, message:'Үйлчилгээ авах цаг өдөрөө сонгоно уу'}]}>
                  <RangePicker />
                  </Form.Item>
                  <Form.Item label="Үйлчилгээний төрөл"
                  name="uilchilgeeniiTurul"
                   rules={[{ required: true, message: 'Үйлчилгээ сонгоно уу' }]}  >
                    <Select>
                      <Select.Option value="Zaswar">Zaswar</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Үйлчилгээ хийх mechanic"
                  name="ajiltanId"
                   rules={[{ required: true, message:'mechanic сонгоно уу'}]}>
                    <Select>
                      <Select.Option value="Bataa">Bataa</Select.Option>
                      <Select.Option value="Bataa">Dorjoo</Select.Option>
                      <Select.Option value="Bataa">Dulmaa</Select.Option>
                    </Select>
                  </Form.Item>
                  <div className="flex justify-end space-x-3 " >
                  <Form.Item className="flex justify-end">
                    <Button className="bg-slate-500 hover:bg-white hover:text-black hover:ring hover:ring-orange-300 focus:outline-none focus:ring focus:ring-orange-300" onClick={handleCancel} >Гарах</Button>
                  </Form.Item>
                  <Form.Item className="flex justify-end"  >
                      <Button   className="bg-orange-500 hover:bg-white hover:text-black hover:ring hover:ring-gray-300  focus:outline-none focus:ring focus:ring-gray-300 " type="primary" htmlType="submit">Submit</Button>
                  </Form.Item>
                  </div>
                </Form>
              </Modal>
            </div>
          </div>
          {/* calendar */}
          <div className="grid grid-cols-12">
          <div className="col-span-3">
          <div 
          // className="md:grid md:grid-cols-2"
          >
            <div className="md:p-4">
              <Card className="max-w-sm">
                <h5 className="text-1xl">Цаг авсан жагсаалт</h5>
                <div className="flex gap-4">
                  <TextInput id="search" type="search" placeholder="Хайх" />
                  <Button className="bg-orange-500">Хайх</Button>
                </div>
                {/* <div className="md:hidden sm:block">
                {serviceAppointment?.map((serviceAppointment: ServiceAppointment, index: number) => (
                     <div className="w-full bg-gray-200 rounded-md text-[11px] flex">
                     <div className="w-full p-2 space-y-2">
                           <div>Нэр</div>                    
                           <div>Үйлчилгээний төрөл</div>
                           <div>Цаг авсан</div>
                     </div>
                       <div className="w-full p-2 text-right" key={index}>
                       <div>{serviceAppointment.customer.lastName}</div>
                               <div>{serviceAppointment.serviceType.name}</div>
                               <div>{serviceAppointment.startTime}</div>
                       </div>
                     </div>
                    ))}
                    </div> */}
                <Table className="hidden md:block">
                  <Table.Head className="uppercase">
                    {/* <Table.HeadCell></Table.HeadCell> */}
                    <Table.HeadCell>Нэр</Table.HeadCell>
                    <Table.HeadCell>Үйлчилгээний төрөл</Table.HeadCell>
                    <Table.HeadCell>Цаг авсан</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {serviceAppointment?.map((serviceAppointment: ServiceAppointment, index: number) => (
                      <Table.Row key={index}>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>{serviceAppointment.startTime}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </div>
           
          </div>
          <div className="md:p-4">
            <Card className="max-w-sm">
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-orange-500">Хайх</Button>
              </div>
              <Table className="hidden md:block">
                <Table.Head className="uppercase">
                  <Table.HeadCell>Хуваарь</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {serviceAppointment?.map((serviceAppointment: ServiceAppointment, index: number) => (
                    <Table.Row key={index}>
                      <Table.Cell>{serviceAppointment.startTime}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <div className="md:hidden">
              {serviceAppointment?.map((serviceAppointment: ServiceAppointment, index: number) => (
                    <div className="w-full bg-gray-200 rounded-md text-[11px] flex">
                    <div className="w-full p-2 space-y-2">
                          <div>Хуваарь</div>                    
                    </div>
                      <div className="w-full p-2 text-right" >
                      <div>{serviceAppointment.startTime}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          </div>
          </div>
          <div className="md:col-span-9 md:shadow-md  md:bg-red-500 md:block hidden ">
            <Calendar className="text-[9px]" dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
            </div>
          </div>
        </div>
        
      </div>
    </Layout>
  );
};
export default Service;
