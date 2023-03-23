import { Sidebar } from "flowbite-react";

const { Item, Collapse, Items, ItemGroup } = Sidebar;

const SidebarComponent = () => {
  return (
    <Sidebar className="w-1/4 h-screen">
      <Items>
        <ItemGroup>
          <Item href="/">Нүүр</Item>
          <Collapse label="Захиалга">
            <Item href="/my">Миний захиалга</Item>
            <Item href="/order">Захиалга хийх</Item>
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
