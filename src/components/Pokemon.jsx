// egy db pokemon adatait írja ki , név, kép, típusai, weaknesst is - a type komponensből
import Type from "./Type";

const Pokemon = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt="sdfhg" />
      {props.type.map((type) => {
        return <Type key={type} type={type} />;
      })}
    </div>
  );
};

export default Pokemon;
