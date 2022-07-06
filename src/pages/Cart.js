import './Css/Cart.css'
import { Button, Container } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import CartContext from "../components/context/CartContext"
import { useContext, useState } from "react"
import Modal from "../components/Modal/Modal"
import TextField from '@mui/material/TextField';
import { addDoc, collection } from "firebase/firestore"
import db from "../utils/FirebaseConfig"
import { useNavigate } from "react-router-dom"

const Cart = () => {

    const { cartListItems, totalPrice, cleanCartProducts } = useContext(CartContext)
    const  [ showModal, setShowModal ] = useState(false)
    const [ formValue, setFormValue ] = useState({
        name:'',
        phone:'',
        email:''
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( ({data}) => {
            return {
                id: data.id,
                title: data.title,
                price: data.price,
            }
        }),
        total: totalPrice
    })

    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name] : e.target.value})
        
    }

    const finishOrder = () => {
    
        navigate('/')
    }

    const saveData = async (newOrder) => {
        try {
            const orderFirebase = collection(db, 'ordenes')
            const orderDoc = await addDoc(orderFirebase, newOrder);
            console.log("orden generada: ", orderDoc);
            setSuccess(orderDoc.id);
            cleanCartProducts();
        } catch (error) {
             console.log("catch:", error)   
        }
    }


    return(

        <>
        <Container>
            <h2>Checkout</h2>

            <div className='container'>
                <div className='container-title'>
                    <h3>Producto</h3>
                    <h3>Descripcion</h3>
                    <h3>Precio Unitario</h3>
                    <h3>Cantidad</h3>
                    <h3>Quitar</h3>
                </div>
                {cartListItems.map( ({data}) => {
                    const { id, image, price, title } = data
                    return(
                        <div key={id} className="container-info">
                         
                                <img src={`/${image}`} />
                                <p >{title}</p>
                                <p>$ {price}</p>
                                <p>1</p>

                                <button>
                                    <DeleteIcon />
                                </button>
                            
                        </div>
                    )
                })}

                <div>
                    <Button>Continuar comprando</Button>
                    <div>
                        <div>
                            <p>Subtotal</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <div>
                            <p>Total</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <Button onClick={() => setShowModal(true)} >Completar Compra</Button>
                    </div>
                </div>
            </div>
        </Container>


        <Modal title={success ? 'Compra exitosa' : 'Formulario de Contacto'} open={showModal} handleClose={() =>setShowModal(false)}>
                    {success ? (
                        <div>
                            la orden se genero con exito!
                            Numero de orden: {success}
                            <button onClick={finishOrder}>Aceptar</button>
                        </div>
                    ) : (
                        <form className="form-container" onSubmit=  {handleSubmit}>
                        <TextField id="standard-basic"
                        label="Nombre" 
                        name="name"
                        variant="standard"
                        value={formValue.name}
                        onChange={handleChange}
                        />
    
                        <TextField id="standard-basic"
                        label="Telefono"
                        name="phone"
                        variant="standard"
                        value={formValue.phone}
                        onChange={handleChange}
                        />
    
                        <TextField id="standard-basic"
                        label="Email"
                        name="email"
                        variant="standard"
                        value={formValue.email}
                        onChange={handleChange}
                        />
    
                            <Button type="submit">Enviar</Button>
                    </form>
                    )}
                   
        </Modal>
        </>
    )
}

export default Cart