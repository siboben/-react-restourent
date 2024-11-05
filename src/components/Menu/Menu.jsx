

const Menu = ({img, title, price, description}) => {
  return (
    <div>
        <img src={img} alt="" />
        <div>
            <h4>{title}</h4>
            <h5>{price}</h5>
            <p>{description}</p>
            <button>order now</button> 
        </div>
    </div>
  )
}

export default Menu