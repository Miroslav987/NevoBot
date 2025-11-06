import AddFormBot from "@entities/bot/ui/AddFormBot/AddFormBot"
import { useModal } from "@shared/context/ModalProvider"
import { Button } from "antd"


const Bots = () => {
  const {openModal}= useModal()
  return (
    <div>
      <h2>Боты</h2>
      <br />
      <Button onClick={()=> openModal(<AddFormBot/>)}>+</Button>
    </div>
  )
}

export default Bots
