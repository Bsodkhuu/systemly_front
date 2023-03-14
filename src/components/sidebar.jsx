import { Sidebar } from "flowbite-react";

const { Item, Collapse, Items, ItemGroup } = Sidebar;

const SidebarComponent = () => {
  return (
    <Sidebar className="w-1/3">
      <Items>
        <ItemGroup>
          <Item href="/">Нүүр</Item>
          <Collapse label="Харилцагч">
            <Item href="/customer">Харилцагчийн бүртгэл</Item>
            <Item href="/transport">Тээврийн хэрэгслийн бүртгэл</Item>
            <Item href="/service">Үйлчилгээний цаг авах</Item>
            <Item href="/service/history">Түүх харах</Item>
          </Collapse>
          <Collapse label="Гишүүд">
            <Item href="#">Манай гишүүд</Item>
            <Item href="#">Брэндбүүк</Item>
            <Item href="#">Танилцуулга</Item>
            <Item href="#">Шинэ гишүүний судалгаа</Item>
          </Collapse>
          <Collapse label="Хүний нөөц">
            <Item href="/human">Нийт ажилчдын бүртгэл</Item>
            <Item href="/employee/performance">Ажилчдын ажлын гүйцэтгэлийг бүртгэх, хянах</Item>
            <Item href="/employee/salary">Ажилчдын цалин урамшуулал хянах</Item>
          </Collapse>
          <Collapse label="Агуулах">
            <Item href="/warehouse">Агуулахын бүртгэл</Item>
            <Item href="#">Худалдан авалт</Item>
          </Collapse>
          <Collapse label="Борлуулалт">
            <Item href="#">Нийт бүтээгдэхүүний борлуулалт</Item>
            <Item href="#">Үйлчилгээний төлбөр тооцоо</Item>
            <Item href="#">Хямдрал, урамшуулал</Item>
          </Collapse>
          <Collapse label="Захиалга">
            <Item href="/order">Сэлбэг Захиалга</Item>
            <Item href="#">Inquiry авах</Item>
          </Collapse>
          <Item>Системээс гарах</Item>
        </ItemGroup>
      </Items>
    </Sidebar>
  );
};

export default SidebarComponent;
