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
} from "flowbite-react";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
import { useForm } from "react-hook-form";

export interface Online{
  id: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  link: string;
}

 export interface Supplier{
  id: string;
  createdAt: string;
  updatedAt: string;
  supplierList: string;
  vehicleManufacturerId?: string;
}

interface ProductCategory{
  id: string;
  createdAt: string;
  updatedAt: string;
  en: string;
}

interface ProductSubCategory extends ProductCategory{
  id: string;
  createdAt: string;
  updatedAt: string;
  en: string;
  productCategoryId?: string;
}

 export interface Product{
  id: string;
  createdAt: string;
  updatedAt: string;
  manufacturerId: string;
  description: string;
  netPrice: number;
  currency: string;
  part_number: string;
  fittingPostion: string;
  makeModelFit: string;
  quantity: number;
  order_date: string;
}


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
  const { register, handleSubmit } = useForm<Product>();
  const { mutateAsync } = useMutation("product", product);

  const { data, isLoading } = useQuery("products", getProducts);

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
  const [productQuantities, setProductQuantities] = useState<
    {
      id: string;
      quantity: number;
    }[]>();

  async function getProducts() {
    const response = await axiosClient.get("/products");
    return response.data;
  }

  if (isLoading) {
    return <Layout></Layout>;
  }

  async function product(values: Product) {
    const response = await axiosClient.post("/products", {
      ...values, 
      quantity: parseInt(values.quantity.toString()), 
      netPrice: parseInt(values.netPrice.toString()),
    });
    return response.data;
  }
  async function onSubmit(values: Product) {
    await mutateAsync(values);
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
                  <Button className="bg-orange-500" onClick={openModal}>
                  Харилцагч нэмэх
                </Button>
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

            {/* сэлбэгийн жагсаалт */}
            <div className="p-4">
              <Card>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <div className="mb-2 block">
                    <Label htmlFor="part_number" value="Парт дугаар"/>
                    </div>
                    <TextInput type="text" {...register("part_number")}/>
                  </div>
                  <div className="w-1/2">
                    <div className="mb-2 block">
                    <Label htmlFor="description" value="Тайлбар"/>
                    </div>
                    <TextInput type="text" {...register("description")}/>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <div className="mb-2 block">
                    <Label htmlFor="netPrice" value="Нэгжийн үнэ"/>
                    </div>
                    <TextInput type="text" {...register("netPrice")}/>
                  </div>
                  <div className="w-1/2">
                    <div className="mb-2 block">
                    <Label htmlFor="currency" value="Валют"/>
                    </div>
                    <TextInput type="text" {...register("currency")}/>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <div className="mb-2 block">
                    <Label htmlFor="fittingPostion" value="Fitting"/>
                    </div>
                    <TextInput type="text" {...register("fittingPostion")}/>
                  </div>
                  <div className="w-1/2">
                    <div className="mb-2 block">
                    <Label htmlFor="quantity" value="Тоо, ширхэг"/>
                    </div>
                    <TextInput type="text" {...register("quantity")}/>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <div className="mb-2 block">
                    <Label htmlFor="manufacturerId" value="Үйлдвэрлэгч"/>
                    </div>
                    <TextInput type="text" {...register("manufacturerId")}/>
                  </div>
                  <div className="w-1/2">
                    <div className="mb-2 block">
                    <Label htmlFor="makeModelFit" value="Model Fit"/>
                    </div>
                    <TextInput type="text" {...register("makeModelFit")}/>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleSubmit(onSubmit)} className="bg-orange-400">
                    Сагслах
                  </Button>
            </div>
                </form>
               
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
                  {data?.map((i: any) => (
                    <ListGroup.Item>
                      Парт дугаар: {i.part_number}
                      <ListGroup.Item></ListGroup.Item>
                      Тайлбар: {i.description}
                      <ListGroup.Item></ListGroup.Item>
                      Нэгжийн үнэ: {i.netPrice}
                      <ListGroup.Item></ListGroup.Item>
                      Валют: {i.currency}
                      <ListGroup.Item></ListGroup.Item>
                      Fitting: {i.fittingPostion}
                      <ListGroup.Item></ListGroup.Item>
                      Тоо, ширхэг: {i.quantity}
                      <ListGroup.Item></ListGroup.Item>
                      <ListGroup.Item></ListGroup.Item>
                      Нийт үнэ: {i.netPrice * i.quantity}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                &nbsp;
                <a href="/messej">
                  <Button className="bg-blue-500">Захиалга үүсгэх</Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Zahialga;
