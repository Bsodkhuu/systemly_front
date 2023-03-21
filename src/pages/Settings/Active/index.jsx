import { TextInput, Button, Table} from "flowbite-react";
import Layout from "../../../components/layout";
import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Active = () => {
    const [showSearch, setShowSearch] = useState();
    function search(){
        setShowSearch();
      }
    return(
        <Layout> 
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Үйлчилгээний нэр (Идэвхитэй)</h4>
                        <div className="flex gap-4">
                            <TextInput id="search" type="search" placeholder="Хайх" />
                            <Button className="bg-blue-500" onClick={search}>
                                Хайх
                            </Button>
                        </div>
                    </div>
                    <Table> 
                        <Table.Head className="uppercase">
                            <Table.HeadCell>Засвар үйлчилгээний нэр</Table.HeadCell>
                            <Table.HeadCell>Үнэ</Table.HeadCell>
                            <Table.HeadCell>Валют</Table.HeadCell>
                            <Table.HeadCell>Үйлдэл</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row> 
                                <Table.Cell>
                                    Наклад
                                </Table.Cell>
                                <Table.Cell>
                                    10000
                                </Table.Cell>
                                <Table.Cell>
                                    $
                                </Table.Cell>
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
export default Active