import React, { useImperativeHandle } from "react";

function ZagvarBurtgel(
  { destroy, token, data = {}, turul, onRefresh }: any,
  ref: React.Ref<unknown> | undefined
) {
  useImperativeHandle(
    ref,
    () => ({
      khadgalya() {},
      khaaya() {
        destroy();
      },
    }),
    [destroy]
  );

  return (
    <div className="grid grid-cols-12 p-2">
      <div className=" col-span-6  divide-y p-2">
        <div>Хэрэглэгчийн нэр</div>
        <div>Хэрэглэгчийн код</div>
        <div>Машиний дугаар</div>
        <div>Утас</div>
        <div>Цаг</div>
        <div>Үйлчилгээ төрөл</div>
        <div>Mechanic</div>
      </div>
      <div className="col-span-6  divide-y p-2">
        <div>{data?.khereglegchiinNer}</div>
        <div>{data?.khereglegchiinKod}</div>
        <div>{data?.mashinDugaar}</div>
        <div>{data?.utas}</div>
        <div>{data?.avsantsag}</div>
        <div>{data?.uilchilgeeniiTurul}</div>
        <div>{data?.mechanic}</div>
      </div>
    </div>
  );
}

export default React.forwardRef(ZagvarBurtgel);
