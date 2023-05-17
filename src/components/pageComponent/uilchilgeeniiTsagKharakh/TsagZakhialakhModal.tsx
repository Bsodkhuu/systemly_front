import { Button, DatePicker, Form, Select } from "antd";
import React from "react";
import local from "antd/lib/date-picker/locale/mn_MN";
import { axiosClient } from "../../../config/axios";

function TsagZakhialakh({
  destroy,
  personName,
  vehicleData,
  phoneData,
  personData,
  serviceData,
}: any) {
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  function onFinish() {
    tsagZakhialakh();
  }

  async function tsagZakhialakh() {
    const ugugdul = form.getFieldsValue();
    ugugdul.endTime = ugugdul.startTime[1];
    ugugdul.startTime = ugugdul.startTime[0];
    const fileResponse = await axiosClient.post(
      "http://localhost:3000/service_appointments",
      ugugdul
    );
    return fileResponse.data;
  }

  return (
    <Form
      form={form}
      initialValues={{ remember: true }}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 12 }}
      layout="horizontal"
      onFinish={onFinish}
      name="basic"
      autoComplete="off">
      <Form.Item
        label="Хэрэглэгчийн нэр"
        name="person"
        rules={[
          {
            required: true,
            message: "Хэрэглэгчийн нэр оруулна уу",
          },
        ]}>
        <Select id="personId" placeholder="Хэрэглэгчийн нэр">
          {personName?.map(
            (i: {
              id: string | number | readonly string[] | undefined;
              lastName:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <option key={`person_${i.id}`} value={i.id}>
                {i.lastName}
              </option>
            )
          )}
        </Select>
      </Form.Item>
      <Form.Item
        label="Утас"
        name="phone"
        rules={[
          {
            required: true,
            message: "Утас оруулна уу",
          },
        ]}>
        <Select id="phoneId" placeholder="Утасны дугаар">
          {phoneData?.map(
            (i: {
              id: string | number | readonly string[] | undefined;
              phone:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <option key={`phone_${i.id}`} value={i.id}>
                {i.phone}
              </option>
            )
          )}
        </Select>
      </Form.Item>
      <Form.Item
        label="Машин дугаар "
        name="personVehicle"
        rules={[
          {
            required: true,
            message: "Машиний дугаар сонгоно уу",
          },
        ]}>
        <Select id="vehicleId" placeholder="Машины нэр">
          {vehicleData?.map(
            (i: {
              id: string | number | readonly string[] | undefined;
              vehicleName:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <option key={`vehicle_${i.id}`} value={i.id}>
                {i.vehicleName}
              </option>
            )
          )}
        </Select>
      </Form.Item>
      <Form.Item
        label="Цаг"
        name="startTime"
        rules={[
          {
            required: true,
            message: "Үйлчилгээ авах цаг өдөрөө сонгоно уу",
          },
        ]}>
        <RangePicker locale={local} />
      </Form.Item>
      <Form.Item
        label="Үйлчилгээний төрөл"
        name="service"
        rules={[
          {
            required: true,
            message: "Үйлчилгээ сонгоно уу",
          },
        ]}>
        <Select id="serviceId" placeholder="Үйлчилгээний нэр">
          {serviceData?.map(
            (i: {
              id: string | number | readonly string[] | undefined;
              serviceName:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <option key={`service_${i.id}`} value={i.id}>
                {i.serviceName}
              </option>
            )
          )}
        </Select>
      </Form.Item>
      <Form.Item
        label="Үйлчилгээ хийх mechanic"
        name="employee"
        rules={[
          {
            required: true,
            message: "mechanic сонгоно уу",
          },
        ]}>
        <Select id="personId" placeholder="Ажилтны нэр">
          {personData?.map(
            (i: {
              id: string | number | readonly string[] | undefined;
              lastName:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <option key={`person_${i.id}`} value={i.id}>
                {i.lastName}
              </option>
            )
          )}
        </Select>
      </Form.Item>
      <div className="flex justify-end space-x-3 ">
        <Form.Item className="flex justify-end">
          <Button
            className="bg-slate-500 text-white hover:bg-white hover:text-black"
            onClick={() => destroy()}>
            Гарах
          </Button>
        </Form.Item>
        <Form.Item className="flex justify-end">
          <Button
            className="bg-orange-500 hover:bg-white text-white hover:text-black"
            // type="primary"
            htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default React.forwardRef(TsagZakhialakh);
