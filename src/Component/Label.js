const Label = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.item.id}.png`}
          className="image_size"
        ></img>
      </div>
      <div className="desc">
        <h2 id="name">{props.item.name}</h2>
        <h6 className="desc_pokemon">{`height: ${props.item.height}dm\nweight: ${props.item.weight}\ntypes: ${props.item.types}`}</h6>
      </div>
    </div>
  );
};
export { Label };
