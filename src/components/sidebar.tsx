import { Button, Collapse, Drawer } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../config/axios";
import { FaHouseDamage, FaHandshake } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineQuestionCircle,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import {
  MdOutlineShoppingCartCheckout,
  MdOutlineSell,
  MdEmojiTransportation,
  MdPriceCheck,
  MdRememberMe,
} from "react-icons/md";
import { CgUserList } from "react-icons/cg";
import { RiFolderSettingsFill } from "react-icons/ri";
import { TbListDetails, TbBrandBooking, TbZoomMoney } from "react-icons/tb";
import { HiOutlineCollection } from "react-icons/hi";
import { CiViewList, CiMenuFries } from "react-icons/ci";
import { BiTimer, BiMoneyWithdraw, BiExit } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineUserAdd, HiOutlineUserGroup } from "react-icons/hi";
import { VscBellDot } from "react-icons/vsc";
import { BsChatSquareQuote } from "react-icons/bs";

const { Panel } = Collapse;
const SidebarComponent = () => {
  const navigate = useNavigate();

  async function logOut() {
    await axiosClient.post("/logout");
    navigate("/login");
  }

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="md:w-[15%]">
      <div className="sm:block md:hidden">
        <div className="p-2 rounded-sm absolute  top-3 right-0">
          <CiMenuFries
            className=" text-4xl text-orange-500 "
            onClick={showDrawer}
          />
        </div>
        <Drawer
          className=""
          title="Үндсэн цэс"
          placement="left"
          onClose={onClose}
          open={open}
          height="100%">
          <Collapse>
            <Panel header="Нүүр" key="1">
              <a
                href="/"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-center w-12">
                  <AiOutlineHome />
                </div>{" "}
                Нүүр
              </a>
            </Panel>
            <Panel header="Захиалга" key="2" className="">
              <div className="divide-y space-y-3 ">
                <a
                  href="/my"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-center  w-12">
                    <HiOutlineCollection />
                  </div>{" "}
                  Миний захиалга
                </a>
                <a
                  href="/order"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-center  w-12">
                    <MdOutlineShoppingCartCheckout />
                  </div>
                  Захиалга хийх
                </a>
                {/* <a href="/backorder" className='flex h-8 w-full justify-start items-center' > <div className='text-xl flex justify-center  w-12' ><TbNotesOff/></div>Бэлэн бус захиалга</a> */}
              </div>
            </Panel>
            <Panel header="Засвар Борлуулалт" key="3">
              <div className="divide-y space-y-3 ">
                <a
                  href="/profile"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-center  w-12">
                    {" "}
                    <AiOutlineUserAdd />{" "}
                  </div>
                  Харилцагчийн бүртгэл
                </a>
                <a
                  href="/customer"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-center  w-12">
                    {" "}
                    <CgUserList />{" "}
                  </div>{" "}
                  Харилцагч нэмэх
                </a>
                <a
                  href="/sale"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-center  w-12">
                    <MdOutlineSell />{" "}
                  </div>
                  Засвар,борлуулалт
                </a>
                <a
                  href="/spare"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-center  w-12">
                    <CiViewList />
                  </div>{" "}
                  Сэлбэгийн үлдэгдэл
                </a>
                <a
                  href="/service"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-center  w-12">
                    <BiTimer />{" "}
                  </div>
                  Үйлчилгээний цаг
                </a>
              </div>
            </Panel>
            <Panel header="Хүний нөөц" key="4">
              <div className="divide-y space-y-3 ">
                <a
                  href="/human"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-center  w-12">
                    {" "}
                    <CgUserList />{" "}
                  </div>{" "}
                  Нийт ажилчдын бүртгэл
                </a>
              </div>
            </Panel>
            <Panel header="Тохиргоо" key="5">
              <div className="divide-y space-y-3">
                <a
                  href="/price"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-center  w-12">
                    {" "}
                    <BiMoneyWithdraw />{" "}
                  </div>{" "}
                  Засварын үнийн тохиргоо
                </a>
                <a
                  href="/clock"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-center  w-12">
                    {" "}
                    <RxLapTimer />{" "}
                  </div>{" "}
                  Ажлын цагийн хуваарь
                </a>
              </div>
            </Panel>
            <Panel header="Сүлд ERP" key="6">
              <div className="divide-y space-y-3">
                <a
                  href="/suld"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <FaHouseDamage />{" "}
                  </div>{" "}
                  Сүлд ERP
                </a>
              </div>
            </Panel>
            <Panel header="Захиалга" key="7">
              <div className="divide-y space-y-3">
                <a
                  href="/asuulguud"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <AiOutlineQuestionCircle />{" "}
                  </div>
                  Асуулгууд
                </a>
                <a
                  href="/orders"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <BsCartPlus />{" "}
                  </div>
                  Захиалгууд
                </a>
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <MdEmojiTransportation />{" "}
                  </div>
                  Тээврийн захиалга
                </a>
              </div>
            </Panel>
            <Panel header="Захиалгийн систем" key="8">
              <div className="divide-y space-y-3">
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <TbListDetails />{" "}
                  </div>{" "}
                  Сэлбэгийн удирдлага
                </a>
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <MdPriceCheck />{" "}
                  </div>
                  Нийлүүлэгчийн үнэ
                </a>
              </div>
            </Panel>
            <Panel header="Хүний нөөц" key="9">
              <div className="divide-y space-y-3">
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <GrUserWorker />{" "}
                  </div>{" "}
                  Ажилчид
                </a>
              </div>
            </Panel>
            <Panel header="CRM" key="10">
              <div className="divide-y space-y-3">
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <GrUserWorker />{" "}
                  </div>{" "}
                  Ажилчид
                </a>
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <HiOutlineUserAdd />{" "}
                  </div>{" "}
                  Харилцагчийн бүртгэл
                </a>
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <HiOutlineUserGroup />{" "}
                  </div>{" "}
                  Харилцагчийн ажилчид
                </a>
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <MdRememberMe />{" "}
                  </div>{" "}
                  N! гишүүд
                </a>
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <FaHandshake />{" "}
                  </div>{" "}
                  Нийлүүлэгчид
                </a>
              </div>
            </Panel>
            <Panel header="NEXUS" key="11">
              <div className="divide-y space-y-3">
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <GrUserWorker />{" "}
                  </div>{" "}
                  Ажилчид
                </a>
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <SlNote />{" "}
                  </div>{" "}
                  Сургалт
                </a>
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <TbBrandBooking />{" "}
                  </div>{" "}
                  Брэнд бүүк
                </a>
              </div>
            </Panel>
            <Panel header="Тохиргоо" key="12">
              <div className="divide-y space-y-3">
                <a
                  href="#"
                  className="flex h-8 w-full justify-start items-center">
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <TbZoomMoney />{" "}
                  </div>
                  Үнийн тохиргоо
                </a>
                <a
                  href="/notifications"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <VscBellDot />{" "}
                  </div>
                  Мэдэгдэл илгээх
                </a>
                <a
                  href="/feedback"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <BsChatSquareQuote />{" "}
                  </div>
                  Санал хүсэлт
                </a>
              </div>
            </Panel>
            <Panel header="Үндсэн тохиргоо" key="13">
              <div className="divide-y space-y-3">
                <a
                  href="/role"
                  className="flex h-8 w-full justify-start items-center">
                  {" "}
                  <div className="text-xl flex justify-cente  w-12">
                    {" "}
                    <RiFolderSettingsFill />{" "}
                  </div>
                  Үндсэн тохиргоо
                </a>
              </div>
            </Panel>
          </Collapse>
          <div className="w-full   flex justify-center items-center mt-4">
            <Button
              onClick={logOut}
              danger
              className=" text-2xl flex justify-center items-center">
              <BiExit /> <div className="text-sm">Гарах</div>{" "}
            </Button>
          </div>
        </Drawer>
      </div>
      <div className="hidden md:block">
        <Collapse>
          <Panel header="Нүүр" key="1">
            <a href="/" className="flex h-8 w-full justify-start items-center">
              <div className="text-xl flex justify-center  w-12">
                <AiOutlineHome />
              </div>{" "}
              Нүүр
            </a>
          </Panel>
          <Panel header="Захиалга" key="2" className="">
            <div className="divide-y space-y-3">
              <a
                href="/my"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-center w-12">
                  <HiOutlineCollection />
                </div>{" "}
                Миний захиалга
              </a>
              <a
                href="/order"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-center  w-12">
                  <MdOutlineShoppingCartCheckout />
                </div>
                Захиалга хийх
              </a>
              {/* <a href="/backorder" className='flex h-8 w-full justify-start items-center' > <div className='text-xl flex justify-center  w-12' ><TbNotesOff/></div>Бэлэн бус захиалга</a> */}
            </div>
          </Panel>
          <Panel header="Засвар Борлуулалт" key="3">
            <div className="divide-y space-y-3 ">
              <a
                href="/profile"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-center  w-12">
                  {" "}
                  <AiOutlineUserAdd />{" "}
                </div>
                Харилцагчийн бүртгэл
              </a>
              <a
                href="/customer"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-center  w-12">
                  {" "}
                  <CgUserList />{" "}
                </div>{" "}
                Харилцагч нэмэх
              </a>
              <a
                href="/sale"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-center  w-12">
                  <MdOutlineSell />{" "}
                </div>
                Засвар,борлуулалт
              </a>
              <a
                href="/spare"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-center  w-12">
                  <CiViewList />
                </div>{" "}
                Сэлбэгийн үлдэгдэл
              </a>
              <a
                href="/service"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-center  w-12">
                  <BiTimer />{" "}
                </div>
                Үйлчилгээний цаг
              </a>
            </div>
          </Panel>
          <Panel header="Хүний нөөц" key="4">
            <div className="divide-y space-y-3 ">
              <a
                href="/human"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-center  w-12">
                  {" "}
                  <CgUserList />{" "}
                </div>{" "}
                Нийт ажилчдын бүртгэл
              </a>
            </div>
          </Panel>
          <Panel header="Тохиргоо" key="5">
            <div className="divide-y space-y-3">
              <a
                href="/price"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-center  w-12">
                  {" "}
                  <BiMoneyWithdraw />{" "}
                </div>{" "}
                Засварын үнийн тохиргоо
              </a>
              <a
                href="/clock"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-center  w-12">
                  {" "}
                  <RxLapTimer />{" "}
                </div>{" "}
                Ажлын цагийн хуваарь
              </a>
            </div>
          </Panel>
          <Panel header="Сүлд ERP" key="6">
            <div className="divide-y space-y-3">
              <a
                href="/suld"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <FaHouseDamage />{" "}
                </div>{" "}
                Сүлд ERP
              </a>
            </div>
          </Panel>
          <Panel header="Захиалга" key="7">
            <div className="divide-y space-y-3">
              <a
                href="/asuulguud"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <AiOutlineQuestionCircle />{" "}
                </div>
                Асуулгууд
              </a>
              <a
                href="/orders"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <BsCartPlus />{" "}
                </div>
                Захиалгууд
              </a>
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <MdEmojiTransportation />{" "}
                </div>
                Тээврийн захиалга
              </a>
            </div>
          </Panel>
          <Panel header="Захиалгийн систем" key="8">
            <div className="divide-y space-y-3">
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <TbListDetails />{" "}
                </div>{" "}
                Сэлбэгийн удирдлага
              </a>
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <MdPriceCheck />{" "}
                </div>
                Нийлүүлэгчийн үнэ
              </a>
            </div>
          </Panel>
          <Panel header="Хүний нөөц" key="9">
            <div className="divide-y space-y-3">
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <GrUserWorker />{" "}
                </div>{" "}
                Ажилчид
              </a>
            </div>
          </Panel>
          <Panel header="CRM" key="10">
            <div className="divide-y space-y-3">
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <GrUserWorker />{" "}
                </div>{" "}
                Ажилчид
              </a>
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <HiOutlineUserAdd />{" "}
                </div>{" "}
                Харилцагчийн бүртгэл
              </a>
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <HiOutlineUserGroup />{" "}
                </div>{" "}
                Харилцагчийн ажилчид
              </a>
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <MdRememberMe />{" "}
                </div>{" "}
                N! гишүүд
              </a>
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <FaHandshake />{" "}
                </div>{" "}
                Нийлүүлэгчид
              </a>
            </div>
          </Panel>
          <Panel header="NEXUS" key="11">
            <div className="divide-y space-y-3">
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <GrUserWorker />{" "}
                </div>{" "}
                Ажилчид
              </a>
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <SlNote />{" "}
                </div>{" "}
                Сургалт
              </a>
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <TbBrandBooking />{" "}
                </div>{" "}
                Брэнд бүүк
              </a>
            </div>
          </Panel>
          <Panel header="Тохиргоо" key="12">
            <div className="divide-y space-y-3">
              <a
                href="#"
                className="flex h-8 w-full justify-start items-center">
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <TbZoomMoney />{" "}
                </div>
                Үнийн тохиргоо
              </a>
              <a
                href="/notifications"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <VscBellDot />{" "}
                </div>
                Мэдэгдэл илгээх
              </a>
              <a
                href="/feedback"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <BsChatSquareQuote />{" "}
                </div>
                Санал хүсэлт
              </a>
            </div>
          </Panel>
          <Panel header="Үндсэн тохиргоо" key="13">
            <div className="divide-y space-y-3">
              <a
                href="/role"
                className="flex h-8 w-full justify-start items-center">
                {" "}
                <div className="text-xl flex justify-cente  w-12">
                  {" "}
                  <RiFolderSettingsFill />{" "}
                </div>
                Үндсэн тохиргоо
              </a>
            </div>
          </Panel>
        </Collapse>
        <div className="w-full   flex justify-center items-center mt-4">
          <Button
            onClick={logOut}
            danger
            className=" text-2xl flex justify-center items-center">
            <BiExit /> <div className="text-sm">Гарах</div>{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SidebarComponent;
