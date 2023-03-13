import { Footer, Sidebar } from "flowbite-react";

const { Item, Collapse, Items, ItemGroup } = Sidebar;

const SidebarComponent = () => {
  return (
    <Sidebar className="w-1/4">
      <Items>
        <ItemGroup>
          <Item href="/">Нүүр</Item>
          <Collapse label="Харилцагч">
            <Item href="/customer">Хэрэглэгчийн бүртгэл</Item>
            <Item href="/transport">Тээврийн хэрэгслийн бүртгэл</Item>
            <Item href="/service">Үйлчилгээний цаг авах</Item>
            <Item href="/service/history">Түүх харах</Item>
          </Collapse>
          <Collapse label="Хүний нөөц">
            <Item href="#">Нийт ажилчдын бүртгэл</Item>
            <Item href="#">Ажилчдын ажлын гүйцэтгэлийг бүртгэх, хянах</Item>
            <Item href="#">Ажилчдын цалин урамшуулал хянах</Item>
          </Collapse>
          <Collapse label="Агуулах">
            <Item>Агуулахын бүртгэл</Item>
            <Item>Худалдан авалт</Item>
          </Collapse>
          <Collapse label="Борлуулалт">
            <Item>Нийт бүтээгдэхүүний борлуулалт</Item>
            <Item>Үйлчилгээний төлбөр тооцоо</Item>
            <Item>Хямдрал, урамшуулал</Item>
          </Collapse>
          <Collapse label="Захиалга">
            <Item>Сэлбэгийн Захиалга</Item>
          </Collapse>
          <Item>Системээс гарах</Item>
        </ItemGroup>
      </Items>
    </Sidebar>
  );
};

export default SidebarComponent;
