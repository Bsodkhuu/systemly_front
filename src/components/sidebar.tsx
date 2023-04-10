import React from "react";
import { Sidebar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../config/axios";

const { Item, Collapse, Items, ItemGroup } = Sidebar;

const SidebarComponent = () => {
  const navigate = useNavigate();

  async function logOut() {
    await axiosClient.post("/logout");
    navigate("/login");
  }

  return (
    <Sidebar className="w-1/4 h-screen">
      <Items>
        <ItemGroup>
          <Item href="/">Нүүр</Item>
          <Collapse label="Захиалга">
            <Item href="/my">Миний захиалга</Item>
            <Item href="/order">Захиалга хийх</Item>
            <Item href="/backorder">Бэлэн бус захиалга</Item>
            <Item href="/online">Онлайн кателоги</Item>
          </Collapse>

          <Collapse label="Засвар Борлуулалт">
            <Item href="/customer">Харилцагчийн бүртгэл</Item>
            <Item href="/sale">Засвар,борлуулалт</Item>
            <Item href="/spare">Сэлбэгийн үлдэгдэл</Item>
            <Item href="/service">Үйлчилгээний цаг</Item>
          </Collapse>
          <Collapse label="Хүний нөөц">
            <Item href="/human">Нийт ажилчдын бүртгэл</Item>
          </Collapse>
          <Collapse label="Тохиргоо">
            <Item href="/settings">Засвар</Item>
            <Item href="/price">Засварын үнийн тохиргоо</Item>
            <Item href="/clock">Ажлын цагийн хуваарь</Item>
          </Collapse>
          <Item href="/product_categories">Жишээ шүү Барааны категори</Item>
          <Item onClick={logOut}>Системээс гарах</Item>
        </ItemGroup>
      </Items>
    </Sidebar>
  );
};

export default SidebarComponent;
