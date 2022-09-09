const Cards = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} className="cardImg" />
      <h2>{props.name}</h2>
      <p>{props.region}</p>
      <p>{props.population}</p>
    </div>
  )
}
export default Cards
