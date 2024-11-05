import Menu from "../Menu/Menu"
import burger from '../../assets/img/burger.jpg';
import  pizza from '../../assets/img/pizza.jpg';

const Foods = () => {
  return (
    <div>
        <h1>FOOD MENU</h1>
        <Menu img={burger} title='burger' price='20$' description='Made with Italian Sauce, Chicken, and organice vegetables.' />
        <Menu img={pizza} title='pizza' price='10$' description='best pizza ever in city ' /> 
    </div>
  )
}

export default Foods