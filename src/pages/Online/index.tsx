import React from "react";
import Layout from "../../components/layout";
import { Carousel } from "flowbite-react";
import { useQuery } from "react-query";
import { axiosClient } from "../../config/axios";

interface Online{
  id: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  link: string;
}
const Online = () => {
  const { data: online } = useQuery("getOnline", getOnline);

  async function getOnline() {
    const response = await axiosClient.get("/onlines");
    return response.data as Online[];
  }

  return (
    <Layout>
      <div className="p-2 bg-gray-200 h-screen w-full">
        <div className="bg-white p-2 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Онлайн кателоги</h4>
          </div>
        </div>
        {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                {online?.map((online: Online, index: number) => (
                  <img key={index}
                    className="padding-bottom:100%"
                    src={online.image}
                    alt={online.link}
                  />
                ))}
              </Carousel>
            </div> */}

            
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              
                <Carousel>
                {online?.map((online: Online, index: number) => (
                  <a href={online.link}>
                    <img key={index} src={online.image} className="padding-bottom:100%"/>
                  </a>
                ))}
                </Carousel>
              </div>
            
      </div>
    </Layout>
  );
};
export default Online;
