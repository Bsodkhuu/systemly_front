import { Table } from "antd";
import React, { useImperativeHandle, useMemo, useState } from "react";

function BuhDelgerenguiTsagKharakh(
  { destroy, token, data = {}, turul, onRefresh }: any,
  ref: React.Ref<unknown> | undefined
) {
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

  const columns = React.useMemo(() => {
    return [
      {
        title: "Цаг",
        dataIndex: "avsantsag",
      },
      {
        title: "Машиний дугаар",
        dataIndex: "mashinDugaar",
      },
      {
        title: "Хэрэглэгчийн нэр",
        dataIndex: "khereglegchiinNer",
      },
      {
        title: "Хэрэглэгчийн код",
        dataIndex: "khereglegchiinKod",
      },

      {
        title: "Үйлчилгээний төрөл",
        dataIndex: "uilchilgeeniiTurul",
      },
      {
        title: "Mechanic",
        dataIndex: "mechanic",
      },
      {
        title: "Утас",
        dataIndex: "utas",
      },
    ];
  }, [data]);
  return (
    <div className="">
      <Table
        size="small"
        columns={columns}
        scroll={{ y: "calc(100vh - 30rem)" }}
        dataSource={data}
      />
    </div>
  );
}

export default React.forwardRef(BuhDelgerenguiTsagKharakh);
