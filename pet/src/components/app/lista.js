const listapets = [
  {
    nameanimal: "Rex",
    idade: "5 Anos",
    animal: "Cachorro",
    raca: "Pastor",
    namedono: "Paulo Santos",
    telefone: "11-9998-5555",
  },
  {
    nameanimal: "Pingo",
    idade: "5 Anos",
    animal: "Cachorro",
    raca: "Rote",
    namedono: "Paulo Santos",
    telefone: "11-9998-5555",
  },
];
const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <p>{todo.nameanimal}</p>
          </div>
        );
      })}
    </div>
  );
};

function ListaComponent() {
  return (
    <div className="App">
      <div>
        <Todos todos={listapets}></Todos>
      </div>
    </div>
  );
}
export default ListaComponent;
