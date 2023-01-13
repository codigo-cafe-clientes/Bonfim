import datas from './data.json';

export default function Slider() {
  return (
    <section>
      <ul>
        { datas.map(( item ) => (
          <li key={item.id} data-image={item.image} data-content={item.content} >{item.title}</li>
        )) }
      </ul>
      <div>
        <h3>{datas[0].title}</h3>
        <p>{datas[0].content}</p>
        <a href="#">Saiba mais</a>
      </div>
    </section>
  );
}