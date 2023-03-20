import Layout from "../../../components/layout";
import {
    Button,
    Table,
    Label,
    Modal,
    Card,
    TextInput,
    Select,
    ListGroup,
    Dropdown, Textarea, FileInput
  } from "flowbite-react";
import {useState} from "react";

const Transport= () => {

    const [showModal,setShowModal] = useState(false);
    const [showSearch, setShowSearch] = useState();

    function openModal(){
        setShowModal(true);
    }
    function closeModal(){
        setShowModal(false);
    }

    function transport(){
        setShowModal(false);
    }
    function search(){
        setShowSearch();
    }
    return(
        <Layout> 
           <Modal show={showModal} onClose={closeModal}>
            <Modal.Header>
                Тээврийн хэрэгсэл нэмэх
            </Modal.Header>
            <Modal.Body>
                <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
                    <div className="flex gap-4"> 
                    <div className="w-1/2"> 
                      <div className="mb-2 block"> 
                        <Label htmlFor="" value="Тээврийн нэр"/>
                      </div>
                      <TextInput id="" />
                    </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer> 
                <Button onClick={closeModal} className="bg-gray-400">
                    Буцах
                </Button>
                <Button onClick={transport} className="bg-blue-500">
                    Хадгалах
                </Button>
            </Modal.Footer>
           </Modal>
           <div className="p-4 bg-gray-200 h-screen w-full"> 
             <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between mb-4"> 
                  <h4 className="text-1xl">Тээврийн хэрэгсэл</h4>
                  <div className="flex gap-4">
                    <TextInput id="search" type="search" placeholder="Тээврийн хэрэгсэл" />
                    <Button className="bg-blue-500" onClick={search}> 
                    Хайх
                    </Button>
                  </div>
                </div>
                <h1>Автомашины дэлгэрэнгүй</h1>
                <h1>Үйлчилгээний цаг авах </h1>
                <h1>Үйлчилгээний түүх </h1>
             </div>
           </div>
        </Layout>
    );
}

export default Transport;