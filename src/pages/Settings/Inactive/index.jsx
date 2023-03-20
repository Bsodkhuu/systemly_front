import Layout from "../../../components/layout";
import {useState} from "react";
import { TextInput, Button, Card, Table, Modal, Label } from "flowbite-react";

const Inactive = () => {

   const [showInactive, setShowInactive] = useState(false);
   const [showModal, setShowModal] = useState(false);

    function Inactive(){
        setShowInactive();
    }

    function openModal() {
    setShowModal(true);
    }

   function closeModal() {
     setShowModal(false);
    }
    
 

  function search(){
    setShowSearch();
  }
    return (
        <Layout> 
          
        </Layout>
    );
}

export default Inactive;