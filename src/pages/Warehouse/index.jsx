import {
    Button,
    FileInput,
    Label,
    Modal,
    TextInput, Avatar,Card
  } from "flowbite-react";

  import Layout from "../../components/layout";
  import { Bar, Pie } from "react-chartjs-2";
  import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
  } from "chart.js";
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(BarElement);
  Chart.register(ArcElement);
  import { useState } from "react";
  
  const Warehouse = () => {
    const [showModal, setShowModal] = useState(false);
  
    function openModal() {
      setShowModal(true);
    }
  
    function closeModal() {
      setShowModal(false);
    }
  
    function createwarehouse() {
      // fetch('/api/customer')
      setShowModal(false);
    }
  
    return (
      <Layout>
        <Modal show={showModal} onClose={closeModal}>
          <Modal.Header>Бараа нэмэх</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
              
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="brand_name" value="Брендын нэр" />
                  </div>
                  <TextInput id="brand_name" />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="logo" value="Лого" />
                  </div>
                  <FileInput id="logo" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="part_number" value="Партын дугаар" />
                  </div>
                  <TextInput id="part_number" />
                </div>
               
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal} className="bg-gray-400">
              Буцах
            </Button>
            <Button onClick={createwarehouse} className="bg-blue-500">
              Хадгалах
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="p-4 bg-gray-200 h-screen w-full">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h1 className="text-1xl">Агуулах</h1>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-blue-500" onClick={openModal}>
                  Агуулах бүртгэх
                </Button>
              </div>
            </div>
           <div className="flex flex-wrap items-center gap-2">
            <a href="/description" className="text-1xl"> 
            <Avatar placeholderInitials="" size="xl">
              </Avatar> 
            </a>
            <a href="/description" className="text-1xl"> 
            <Avatar placeholderInitials="" size="xl" /> 
            </a>
           </div>
           &nbsp;
           <Card className="w-2/5 h-96">
          <Bar
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  borderWidth: 1,
                  backgroundColor: "#9925be",
                },
              ],
            }}
          />
        </Card>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default Warehouse;
  