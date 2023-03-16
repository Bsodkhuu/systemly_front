
import { Button,Card,  Avatar, ListGroup} from "flowbite-react";
const Cart = () => {
    return (
     <div className="p-2"> 
        <Card className="max-w-sm"> 
           <h1 className="text-1xl">Сагс</h1>
             <div className="w-50"> 
              <ListGroup> 
                <ListGroup.Item> 
                <Avatar src=""/>
              </ListGroup.Item>
              <ListGroup.Item> 
                Партын дугаар: 12345
              </ListGroup.Item>
              <ListGroup.Item> 
                Тайлбар: Meyle
              </ListGroup.Item>
              <ListGroup.Item> 
                Нэгжийн үнэ: 50
              </ListGroup.Item>
              <ListGroup.Item> 
                Валют: $
              </ListGroup.Item>
              <ListGroup.Item> 
                Тоо ширхэг: 1
              </ListGroup.Item>
              <ListGroup.Item> 
                Нийт үнэ: 50$
              </ListGroup.Item>

            </ListGroup>
             &nbsp;
            <a href="/create"> 
            <Button  className="bg-blue-500"> 
              Захиалга үүсгэх
            </Button>
            </a>
            </div>
        </Card>
            
    </div>
       
    );
}

export default Cart;