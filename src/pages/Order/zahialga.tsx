import React, { FC, useState, ChangeEvent } from "react";
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
import {faCarSide, faCircleExclamation, faMagnifyingGlass, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {  useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
import { Product, ProductCategory, ProductSubCategory, VehicleCategory } from "../API";

interface ModalProps{
  showModal: boolean;
  closeModal: () => void;
}

const DescriptionModal: FC<ModalProps> = ({showModal, closeModal}) => {
  const { data: product } = useQuery("getProduct", getProduct);

  async function getProduct() {
    const response = await axiosClient.get("/products");
    return response.data as Product[];
  }
  return (
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Header>Fitting Position</Modal.Header>
      <Modal.Body> 
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Table>
            <Table.Head className="uppercase">
              <Table.HeadCell>Машин төрөл</Table.HeadCell>
              <Table.HeadCell>Fitting Position</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-x">
              {product?.map(( product: Product, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>{product.vehicle.vehicleType}</Table.Cell>
                  <Table.Cell>{product.productFits.positionId}</Table.Cell>
                  <Table.Cell>{product.productFits.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
}


const Zahialga = () => {
  const [showModal, setShowModal] = useState(false);

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

  const { data: vehicleCategory } = useQuery("getVehicleCategory", getVehicleCategory);

  async function getVehicleCategory() {
    const response = await axiosClient.get("/vehicle_categories");
    return response.data as VehicleCategory[];
  }
  //product=> сэлбэгийн жагсаалт юм байнаа
  const { data: product } = useQuery("getProduct", getProduct);

  async function getProduct() {
    const response = await axiosClient.get("/products");
    return response.data as Product[];
  }

  const [inputText, setInputText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart((cart) => [
    ...cart,
    ]);
  };

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
 

  const reviews = [
    {
      id: 1,
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/bilsentin.jpg",
    },
    {
      id: 2,
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/bosh.jpg",
    },
    {
      id: 3,
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2023/04/brembo.jpg",
    },
    {
      id: 4, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/clarios.jpg",
    },
    {
      id: 4, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/clarios.jpg",
    },
    {
      id: 5, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2022/01/Continental.jpg",
    },
    {
      id: 6, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/Delphi.jpg",
    },
    {
      id: 7, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/denso.jpg",
    },
    {
      id: 8, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/dr1v.jpg)",
    },
    {
      id: 9, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/elring.jpg",
    },
    {
      id: 10, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/exide.jpg",
    },
    {
      id: 11, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/08/hc-cargo.jpg",
    },
    {
      id: 12, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/hella.jpg",
    },
    {
      id: 13, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/knorr.jpg",
    },
    {
      id: 14, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/kyb.jpg",
    },
    {
      id: 15, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/mahle.jpg",
    },
    {
      id: 16, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/05/mann.jpg",
    },
    {
      id: 17, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2023/04/Niterra.jpg",
    },
    {
      id: 18, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2022/03/NRF.jpg",
    },
    {
      id: 19, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2022/03/NTN.jpg",
    },
    {
      id: 20, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/osram.jpg",
    },
    {
      id: 21, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/Philips.jpg",
    },
    {
      id: 22, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/schaeffler.jpg",
    },
    {
      id: 23, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/skf.jpg",
    },
    {
      id: 24, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2022/04/Totalenergies.jpg",
    },
    {
      id: 25, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/valeo.jpg",
    },
    {
      id: 26, 
      image: "",
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
                    <FontAwesomeIcon icon={faCarSide}/>
                  </div>
                  <Select placeholder="Машины ангилал">
                    {vehicleCategory?.map((i) => (
                      <option value={i.id}>
                        {i.mn}
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
              </div>
            </div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                {reviews.map((review) => (
                  <img className="d-block w-50" src={review.image}/>
                ))}
              </Carousel>
            </div>

            <div className="p-4">
              <Card>
                <Table>
                  <Table.Head className="uppercase">
                   <Table.HeadCell>Үйлдвэрлэгч</Table.HeadCell>
                   <Table.HeadCell>Үйлдвэрлэгчийн партын дугаар</Table.HeadCell>
                   <Table.HeadCell>Бүтээгдэхүүний нэр</Table.HeadCell>
                   <Table.HeadCell>Бүтээгдэхүүний Тайлбар</Table.HeadCell>
                   <Table.HeadCell>Бүтээгдэхүүний хэмжих нэгж</Table.HeadCell>
                   <Table.HeadCell>Нэгжийн утга</Table.HeadCell>
                   <Table.HeadCell>Үндсэн үнэ</Table.HeadCell>
                   <Table.HeadCell>Валют</Table.HeadCell>
                   <Table.HeadCell>Fitting Position</Table.HeadCell>
                   <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
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
                        <Table.Cell>{product.prodmetricType}</Table.Cell>
                        <Table.Cell>{product.priceMain}</Table.Cell>
                        <Table.Cell>{product.currency}</Table.Cell>
                        <Table.Cell>
                        <Button className="bg-orange-400" onClick={openModal}>
                        <FontAwesomeIcon icon={faCircleExclamation}  size="2xl"/>
                        </Button>
                        </Table.Cell>
                        <Table.Cell>
                          <TextInput onChange={handleChange} value={inputText}/>
                        </Table.Cell>
                        <Table.Cell>
                        <a href="/messej">
                          <Button className="bg-orange-500">
                          <FontAwesomeIcon icon={faShoppingCart}/>
                         </Button>
                        </a>
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
              <div className="w-50">
                <h4>Сагсанд нэмэгдсэн бүтээгдэхүүн</h4>
                <ListGroup>
                  {product?.map((product: Product, index:number) => (
                    <ListGroup.Item key={index}>
                      Бүтээгдэхүүний код: {product.productCode}
                      <ListGroup.Item></ListGroup.Item>
                      Бүтээгдэхүүний нэр: {product.productName}
                      <ListGroup.Item></ListGroup.Item>
                      Бүтээгдэхүүний хэмжих нэгж: {product.prodmetric.typeId}
                      <ListGroup.Item></ListGroup.Item>
                      Тоо ширхэг : {inputText}
                      <ListGroup.Item></ListGroup.Item>
                      Нийт : {product.priceMain * product.quantity} 
                      {/* hudalaa shvv hhaa */}
                      <ListGroup.Item></ListGroup.Item>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <DescriptionModal showModal={showModal} closeModal={closeModal} />
    </Layout>
  );
};

export default Zahialga;
