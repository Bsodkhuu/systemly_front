import { TextInput, Button, FileInput, Modal, Label,Select, Carousel, Card, Table, Avatar} from "flowbite-react";
import { useState } from "react";
import Layout from "../../../components/layout";


 const Spare = () => {

   const [showModal, setShowModal] = useState(false);
   const [showSearch, setShowSearch] = useState();
   const [showNexus, setShowNexus] = useState();
   const [showAll, setShowAll] = useState();


   function nexus(){
       // supplier selbeg medeelliig table helwereer haruulah 
       //fetch api 
      setShowNexus(true);
   }

   function all(){
      //excel file orj irsen medeelliig table helwereer haruulaj 
      //fetch api
      setShowAll(true);
   }

   function openModal(){
      setShowModal(true);
   }
   function closeModal(){
      setShowModal(false);
   }
   function spare(){
      setShowModal(false);
   }
   function search(){
      setShowSearch();
   }

   const reviews = [
      {
         id: 1, 
         image: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
         link:"" 
      },
      {
         id: 2, 
         link:"",
         image: "https://flowbite.com/docs/images/carousel/carousel-1.svg", 
      },
   ];
    return (
        <Layout> 
         <Modal show={showModal} onClose={closeModal}> 
           <Modal.Header> 
            Сэлбэг нэмэх
           </Modal.Header>
           <Modal.Body>
            <form className="flex flex-col gap-4 max-h-96 overflow-y-auto"> 
            
            <div className="flex gap-4">
               <div className="w-1/2"> 
               <div className="mb-2 block">
                  <Label htmlFor="fileName" value="Файл оруулах"/>
               </div>
               <FileInput id="fileName"/>
               </div> 
            </div>
            </form>

           </Modal.Body>
           <Modal.Footer>
          <Button onClick={closeModal} className="bg-gray-400">
            Буцах
          </Button>
          <Button onClick={spare} className="bg-blue-500">
            Хадгалах
          </Button>
        </Modal.Footer>
         </Modal>
          <div className="p-4 bg-gray-200 h-screen w-full"> 
            <div className="bg-white p-6 rounded-lg">
               <div className="flex justify-between mb-4"> 
               <h3 className="text-1xl">Сэлбэгийн үлдэгдэл</h3>
                 <div className="flex gap-4"> 
                 <TextInput id="search" type="search" placeholder="Сэлбэгний үлдэгдэл хайх"/>
                 <Button className="bg-blue-500" onClick={search}>
                  Хайх
                 </Button>
                 <Button className="bg-blue-500" onClick={openModal}>
                  Сэлбэг нэмэх
                 </Button>
                 </div>
               </div>
                

                {/* supplier, nexus,busad */}

                <div className="grid grid-cols-2"> 
                <div className="col-span-2"> 
                {/* supplier logo */}
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"> 
                  <Carousel> 
                   {reviews.map(review => (
                    
                       <img className="d-block w-50" 
                       src={review.image}
                       alt={review.link} />
                   ))}
                  </Carousel>
                </div>
                <div className="p-4"> 
                  <Card> 
                     <div className="flex gap-4"> 
                     <Button className="bg-blue-500" onClick={nexus}>Nexus
                     {/* supplier selbeg medeelliig table helwereer haruulah  */}
                     </Button>
                     <Button className="bg-blue-500" onClick={all}>Бусад
                     {/* excel file orj irsen medeelliig table helwereer haruulaj  */}
                     </Button>

                     </div>
                   {/* too,shirheg, zarah vne garaas oruulj ogno shvv  */}
                     <Table> 
                        <Table.Head className="uppercase">
                           <Table.HeadCell> 
                              Партын дугаар
                           </Table.HeadCell>
                           <Table.HeadCell> 
                              Нийлүүлэгч
                           </Table.HeadCell>
                           <Table.HeadCell> 
                              Тайлбар
                           </Table.HeadCell>
                           <Table.HeadCell> 
                               Нэгжийн үнэ
                           </Table.HeadCell>
                           <Table.HeadCell> 
                              Валют
                           </Table.HeadCell>
                           <Table.HeadCell> 
                              Хаанаас
                           </Table.HeadCell>
                           <Table.HeadCell> 
                              Тоо, ширхэг
                           </Table.HeadCell>
                           <Table.HeadCell> 
                              Зарах үнэ
                           </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                           <Table.Row>
                              <Table.Cell>
                                 12345
                              </Table.Cell>
                              <Table.Cell>
                                 <Avatar src=""/>

                              </Table.Cell>
                              <Table.Cell>
                                 example
                              </Table.Cell>
                              <Table.Cell>
                                 10
                              </Table.Cell>
                              <Table.Cell>
                                 $
                              </Table.Cell>
                              <Table.Cell>
                                Nexus
                              </Table.Cell>
                              <Table.Cell>
                                 1
                              </Table.Cell>
                              <Table.Cell>
                                 10.000
                              </Table.Cell>
                              </Table.Row> 
                        </Table.Body>
                     </Table>
                  </Card>
                </div>
                </div>
                </div>
            </div>
          </div>
        </Layout>
    );
 }

 export default Spare;