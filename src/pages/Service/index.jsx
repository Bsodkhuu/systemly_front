import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Label, TextInput, Button, Table} from "flowbite-react";
const Service = () => {
  return(
    <Layout> 
          <form className="flex flex-col gap-4  overflow-y-auto">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="vin_number" value="Vin дугаар" />
                </div>
                <TextInput id="vin_number" />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="make" value="Загвар" />
                </div>
                <TextInput id="make" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="model" value="Маяг" />
                </div>
                <TextInput id="model" />
              </div>
              <div className="w-1/2 flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="manufactured_year" value="Үйлдвэрлэсэн он сар " />
                  </div>
                  <TextInput type="date" id="manufactured_year"  />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="imported_year" value="Импортлосон он сар" />
                  </div>
                  <TextInput type="date" id="imported_year"  />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="color" value="Өнгө" />
                </div>
                <TextInput id="color" />
              </div>
              <div className="w-1/2"> 
              <div className="mb-2 block">
              <Label htmlFor="license_plate_number" value="Улсын дугаар" />
              </div>
              <TextInput id="license_plate_number"/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="last_name" value="Эзэмшигчийн нэр" />
                </div>
                <TextInput id="last_name" />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="phone_number" value="Эзэмшигчийн утасны дугаар" />
                </div>
                <TextInput id="phone_number" />
              </div>
            </div>
            <div className="flex gap-4">
            <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="employee_name" value="Бүртгэсэн ажилтан" />
                </div>
                <TextInput id="employee_name" />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="registered_date" value="Бүртгүүлсэн он сар" />
                </div>
                <TextInput id="registered_date" type="date" />
              </div>
              
            </div>
           
            <div className="flex flex-wrap items-center gap-2">
              <div>
                <Button>
                  Цуцлах
                </Button>
              </div>
              <div>
                <Button>
                  Цаг авах
                </Button>
              </div>
            </div>
             <Table>

             </Table>
          </form>
        <div className="p-4 bg-gray-200 h-screen w-full">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h1 className="flex gap-4">
                Үйлчилгээний цаг авсан жагсаалт
              </h1>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                
              </div>
            </div>
            <Table> 
              <Table.Head className="uppercase"> 
              <Table.HeadCell>Vin дугаар</Table.HeadCell>
              <Table.HeadCell>Загвар</Table.HeadCell>
              <Table.HeadCell>Маяг</Table.HeadCell>
              <Table.HeadCell>Үйлдвэрлэсэн он сар</Table.HeadCell>
              <Table.HeadCell>Импортлосон он сар</Table.HeadCell>
              <Table.HeadCell>Өнгө</Table.HeadCell>
              <Table.HeadCell>Улсын дугаар</Table.HeadCell>
              <Table.HeadCell>Эзэмшигчийн нэр</Table.HeadCell>
              <Table.HeadCell>Эзэмшигчийн утасны дугаар</Table.HeadCell>
              <Table.HeadCell>Бүртгэсэн ажилтан</Table.HeadCell>
              <Table.HeadCell>Бүртгүүлсэн он сар</Table.HeadCell>
              <Table.HeadCell>Үйлдэл</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  
                  <Table.Cell className="text-xl space-x-2">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <FontAwesomeIcon icon={faTrash} />
                </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
    </Layout>
  );
}
export default Service; 