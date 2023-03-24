import { Sidebar } from "flowbite-react";

const { Item, Collapse, Items, ItemGroup } = Sidebar;

const SidebarComponent = () => {
  return (
    <Sidebar className="w-1/4 h-screen">
      <Items>
        <ItemGroup>
          <Item href="/">Нүүр</Item>
          <Collapse label="Захиалга">
            Сүлд
            <Item href="#">Асуулгууд</Item>
            <Item href="#">Захиалгууд</Item>
            <Item href="#">Тээврийн захиалга</Item>
            Гишүүн
            <Item href="/my">Миний захиалга</Item>
            <Item href="/order">Захиалга хийх</Item>
          </Collapse>
          <Collapse label="Захиалгын систем">
            <Item href="#">Сэлбэгийн удирдлага</Item>
            <Item href="#">Нийлүүлэгчийн үнэ</Item>
          </Collapse>
          <Collapse label="Хүний нөөц /Сүлд">
            <Item href="#">Ажилчид</Item>
          </Collapse>
          <Collapse label="CRM">
            <Item href="#">Харилцагчийн бүртгэл</Item>
            <Item href="#">Харилцагчийн ажилчид</Item>
            <Item href="#">N! Гишүүд</Item>
            <Item href="#">Нийлүүлэгчид</Item>
          </Collapse>
          <Collapse label="NEXUS!">
            <Item href="#">Сургалт</Item>
            <Item href="/sale">Брэнд бүүк</Item>
            
          </Collapse>
          <Collapse label="Тохиогоо Сүлд">
            <Item href="#">Үнийн тохиргоо</Item>
            <Item href="#">Эрхийн тохиргоо</Item>
          </Collapse>
          <Collapse label="Засвар Борлуулалт">
            <Item href="/customer">Харилцагчийн бүртгэл</Item>
            <Item href="/sale">Засвар,борлуулалтын бүртгэл</Item>
            <Item href="/spare">Сэлбэгийн үлдэгдэл</Item>
            <Item href="/service">Үйлчилгээний цаг</Item>
          </Collapse>
          <Collapse label="Хүний нөөц">
            <Item href="/human">Нийт ажилчдын бүртгэл</Item>
            {/* <Item href="/naryd">Нарядын тайлан</Item> */}
            
          </Collapse>
          
          
          <Collapse label="Тохиргоо">
            <Item href="/settings">Засвар</Item>
            <Item href="/price">Засварын үнийн тохиргоо</Item>
            <Item href="/clock">Ажлын цагийн хуваарь</Item>
          </Collapse>
         
          <Item>Системээс гарах</Item>
        </ItemGroup>
      </Items>
    </Sidebar>
  );
};

export default SidebarComponent;
