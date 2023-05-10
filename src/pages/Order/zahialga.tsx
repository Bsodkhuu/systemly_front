import React, { FC, useState } from "react";
import {
  TextInput,
  Button,
  Carousel,
  Card,
  Select,
  Label,
  ListGroup,
  Modal,
  Table, 
} from "flowbite-react";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {  useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
import { Online,  Product, ProductCategory, ProductSubCategory, Supplier } from "../API";

interface ModalProps{
  showModal: boolean;
  closeModal: () => void;
}

const ZahialgaModal: FC<ModalProps> = ({showModal, closeModal }) => {
  const { data: online } = useQuery("getOnline", getOnline);

  async function getOnline() {
    const response = await axiosClient.get("/onlines");
    return response.data as Online[];
  }
  return (
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Header>Онлайн кателоги</Modal.Header>
      <Modal.Body>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              
              <Carousel>
              {online?.map((online: Online, index: number) => (
                <a href={online.link}>
                  <img key={index} src={online.image} className="padding-bottom:100%"/>
                </a>
              ))}
              </Carousel>
            </div>
      </Modal.Body>
    </Modal>
  );
}
const Zahialga = () => {
  const [showModal, setShowModal] = useState(false);

  const {data: supplier} = useQuery("getSupplier", getSupplier);

  async function getSupplier() {
    const response = await axiosClient.get("/suppliers");
    return response.data as Supplier[];
  }

  const {data: productCategory} = useQuery("getProductCategory", getProductCategory);

  async function getProductCategory() {
    const response = await axiosClient.get("/product_categories");
    return response.data as ProductCategory[];
  }

  const {data: productSub} = useQuery("getProductSub", getProductSub);

  async function getProductSub() {
    const response = await axiosClient.get("/product_subcategories");
    return response.data as ProductSubCategory[];
  }
  //product=> сэлбэгийн жагсаалт юм байнаа
  const { data: product } = useQuery("getProduct", getProduct);

  async function getProduct() {
    const response = await axiosClient.get("/products");
    return response.data as Product[];
  }
  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const reviews = [
    {
      id: 1,
      image: "https://nexusautomn.s3.amazonaws.com/media/order/uploads/2022/09/30/obo_customs_400x141.png",
      link: "",
    },
    {
      id: 2,
      link: "",
      image: "https://nexusautomn.s3.amazonaws.com/media/order/uploads/2022/02/13/supply-solution.png",
    },
  ];
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h5 className="text-1xl">Захиалга</h5>
              <div className="flex gap-4">
                
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="brand" value="Брэнд" />
                  </div>
                  <Select>
                   {supplier?.map((i) => (
                    <option value={i.id}>
                      {i.supplierList}
                    </option>
                   ))}
                  </Select>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="category" value="Ангилал" />
                  </div>
                  <Select>
                    {productCategory?.map((i) => (
                      <option value={i.id}>
                        {i.en}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                  <TextInput id="search" type="search" placeholder="Хайх" />
                 
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">

                  </div>
                  <Button className="bg-orange-500" onClick={openModal}>Онлайн кателоги</Button>
                </div>
              </div>
            </div>
            {/* category, sub category */}
            <div className="w-48">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                  {productCategory?.map((i) => (
                      <Label htmlFor="category" value={i.en} />
                    ))}
                  </div>
                  <Select>
                    {productSub?.map((i) => (
                      <option value={i.id}>
                        {i.en}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    {productCategory?.map((i) => (
                      <Label htmlFor="category" value={i.en} />
                    ))}
                  </div>
                  <Select>
                    {productSub?.map((i) => (
                      <option value={i.id}>
                        {i.en}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                {reviews.map((review) => (
                  <img
                    className="d-block w-50"
                    src={review.image}
                    alt={review.link}
                  />
                ))}
              </Carousel>
            </div>

            
            <div className="p-4">
              <Card>
                <Table>
                  <Table.Head className="uppercase">
                   <Table.HeadCell>Үйлдвэрлэгч</Table.HeadCell>
                   <Table.HeadCell>Бүтээгдэхүүний код</Table.HeadCell>
                   <Table.HeadCell>Бүтээгдэхүүний нэр</Table.HeadCell>
                   <Table.HeadCell>Тайлбар</Table.HeadCell>
                   <Table.HeadCell>Бүтээгдэхүүний хэмжих нэгж</Table.HeadCell>
                   <Table.HeadCell>Үндсэн үнэ</Table.HeadCell>
                   <Table.HeadCell>Тээврийн хэрэгсэл төрөл</Table.HeadCell>
                   <Table.HeadCell>Тээврийн хэрэгслийн нэр</Table.HeadCell>
                   <Table.HeadCell>Үйлдэл</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {product?.map((product: Product, index: number) => (
                      <Table.Row key={index}>
                        <Table.Cell>{product.manufacturerId}</Table.Cell>
                        <Table.Cell>{product.productCode}</Table.Cell>
                        <Table.Cell>{product.productName}</Table.Cell>
                        <Table.Cell>{product.productDescription}</Table.Cell>
                        <Table.Cell>{product.prodmetric.typeId}</Table.Cell>
                        <Table.Cell>{product.priceMain}</Table.Cell>
                        <Table.Cell>{product.vehicleType}</Table.Cell>
                        <Table.Cell>{product.nameEng}</Table.Cell>
                        <Table.Cell>
                          <Button className="bg-orange-500">
                          <FontAwesomeIcon icon={faShoppingCart}/>
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-span">
          <div className="p-2">
            <Card className="max-w-sm">
              <h1 className="text-1xl">Сагс</h1>
              <div className="w-50">
                <ListGroup>
                  
                    <ListGroup.Item>
                      
                      <ListGroup.Item></ListGroup.Item>
                     
                      <ListGroup.Item></ListGroup.Item>
                      
                      <ListGroup.Item></ListGroup.Item>
                      
                      <ListGroup.Item></ListGroup.Item>
                     
                      <ListGroup.Item></ListGroup.Item>
                      
                      <ListGroup.Item></ListGroup.Item>
                      <ListGroup.Item></ListGroup.Item>
                      
                    </ListGroup.Item>
                
                </ListGroup>
                &nbsp;
                <a href="/messej">
                  <Button className="bg-orange-500">Захиалга үүсгэх</Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <ZahialgaModal showModal={showModal} closeModal={closeModal} />
    </Layout>
  );
};

export default Zahialga;
