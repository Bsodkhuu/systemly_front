import { Button, DatePicker, Form, Select } from "antd";
import React, { useImperativeHandle } from "react";

function TsagZakhialakh(
  { destroy, token, data = {}, turul, onRefresh }: any,
  ref: React.Ref<unknown> | undefined
) {
  const { RangePicker } = DatePicker;
  useImperativeHandle(
    ref,
    () => ({
      khadgalya() {},
      khaaya() {
        destroy();
        data(undefined);
      },
    }),
    [destroy]
  );

  return (
    <Form
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 12 }}
      layout="horizontal"
      // onFinish={onFinish}
      name="basic"
      autoComplete="off">
      <Form.Item
        label="Хэрэглэгчийн нэр"
        name="khereglegchiinNer"
        rules={[
          {
            required: true,
            message: "Хэрэглэгчийн нэр оруулна уу",
          },
        ]}>
        <input className="border border-stale-600 w-full rounded-md h-8 " />
      </Form.Item>
      <Form.Item
        label="Хэрэглэгчийн код"
        name="registeriinDugaar"
        rules={[
          {
            required: true,
            message: "Хэрэглэгчийн код оруулна уу",
          },
        ]}>
        <input className="border border-stale-600 w-full rounded-md h-8 " />
      </Form.Item>
      <Form.Item
        label="Утас"
        name="utas"
        rules={[{ required: true, message: "Утас оруулна уу" }]}>
        <input className="border border-stale-600 w-full rounded-md h-8 " />
      </Form.Item>
      <Form.Item
        label="Машин дугаар "
        name="mashiniiDugaar"
        rules={[{ required: true, message: "Машиний дугаар сонгоно уу" }]}>
        <Select>
          <Select.Option value="demo">1010УБУ</Select.Option>
          <Select.Option value="demo1">1011УБУ</Select.Option>
          <Select.Option value="demo2">1213УБУ</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Цаг"
        name="tsag"
        rules={[
          {
            required: true,
            message: "Үйлчилгээ авах цаг өдөрөө сонгоно уу",
          },
        ]}>
        <RangePicker />
      </Form.Item>
      <Form.Item
        label="Үйлчилгээний төрөл"
        name="uilchilgeeniiTurul"
        rules={[{ required: true, message: "Үйлчилгээ сонгоно уу" }]}>
        <Select>
          <Select.Option value="Zaswar">Zaswar</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Үйлчилгээ хийх mechanic"
        name="ajiltanId"
        rules={[{ required: true, message: "mechanic сонгоно уу" }]}>
        <Select>
          <Select.Option value="Bataa">Bataa</Select.Option>
          <Select.Option value="Bataa">Dorjoo</Select.Option>
          <Select.Option value="Bataa">Dulmaa</Select.Option>
        </Select>
      </Form.Item>
      <div className="flex justify-end space-x-3 ">
        <Form.Item className="flex justify-end">
          <Button
            //  className="bg-slate-500 hover:bg-white hover:text-black hover:ring hover:ring-orange-300 focus:outline-none focus:ring focus:ring-orange-300"
            onClick={() => destroy()}>
            Гарах
          </Button>
        </Form.Item>
        <Form.Item className="flex justify-end">
          <Button
            // className="bg-orange-500 hover:bg-white hover:text-black hover:ring hover:ring-gray-300  focus:outline-none focus:ring focus:ring-gray-300 "
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
