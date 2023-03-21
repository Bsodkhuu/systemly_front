import { TextInput, Button, Carousel, FileInput, Card, Textarea, Label, Table} from "flowbite-react";
import Layout from "../../../components/layout";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart";

const Inquiry = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showFile, setShowFile] = useState();
    

    function inquiry(){
        //fetch api
        //selbegin jagsaalt table utga oruulah automataar
    }
    function file(){
        //excel file
        setShowFile();
    }
      function search() {
        // fetch('/api/customer')
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
    return(
        <Layout> 
            <div className="p-4 bg-gray-200 h-screen w-full"> 
              <div className="bg-white p-6 rounded-lg"> 
                <div className="flex justify-between mb-4"> 
                 <h5 className="text-1xl">Үнийн санал авах</h5>
                 <div className="flex gap-4"> 
                   <TextInput id="search" type="search" placeholder="Хайх"/>
                   <Button className="bg-blue-500" onClick={search}>
                    Хайх
                   </Button>
                 </div>
                </div>

                {/* inquiry logo */}

                <div className="grid grid-cols-2">
                    <div className="col-span-2">
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                            <Carousel>
                            {reviews.map(review => (
                       <img className="d-block w-50" 
                       src={review.image}
                       alt={review.link} />
                   ))}
                            </Carousel>
                        </div>
                 
                    </div>
                    
                    {/* file input  */}
                     <div className="flex"> 
                       
                        <div className="p-4"> 
                         <Card className="max-w-lg">
                           <div className="w-3/4">
                            <Label htmlFor="description" value="Тайлбар бичих" />
                             <Textarea id="description"/>
                             &nbsp;
                             <Button className="ml-auto">
                                Хүсэлт илгээх
                             </Button>
                           </div>
                           </Card>
                        </div>
                        
                     </div>
                     {/* сэлбэгийн жагсаалт харуулах  */}
                   <div className="p-4"> 
                     <Card> 
                        <FileInput />
                        <h1 className="text-1xl">Сэлбэгийн үнийн саналын жагсаалт</h1>
                         <Table> 
                           <Table.Head className="uppercase"> 
                            <Table.HeadCell> 
                                Сериал
                            </Table.HeadCell>
                            <Table.HeadCell> 
                                OE Брэнд
                            </Table.HeadCell>
                            <Table.HeadCell> 
                                Тайлбар
                            </Table.HeadCell>
                            <Table.HeadCell> 
                                Хэрэглээ
                            </Table.HeadCell>
                            <Table.HeadCell> 
                                Үнэ
                            </Table.HeadCell>
                            <Table.HeadCell> 
                                Валют
                            </Table.HeadCell>
                            <Table.HeadCell> 
                                Үйлдэл
                            </Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y"> 
                            <Table.Row>
                                <Table.Cell> 
                                    08139540
                                </Table.Cell>
                                <Table.Cell> 
                                    MERCEDES-BENZ
                                </Table.Cell>
                                <Table.Cell> 
                                    Brake Disc
                                </Table.Cell>
                                <Table.Cell> 
                                    Standard
                                </Table.Cell>
                                <Table.Cell> 
                                    22.95
                                </Table.Cell>
                                <Table.Cell> 
                                    $
                                </Table.Cell>
                                <Table.Cell className="text-1xl"> 
                                <FontAwesomeIcon icon={faCartShopping} />
                                </Table.Cell>
                                </Table.Row>
                        </Table.Body>
                      </Table>
                 </Card>
               </div>
                 {/* сагс харуулах */}
               <Cart/>
                </div>
              </div>
            </div>
        </Layout>
    );
}
export default Inquiry;