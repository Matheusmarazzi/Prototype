import Div from './components/Div';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';
import './App.css';
import Title from './components/Title';

function App() {
  const [components, setComponents] = useState([]);
  const [typeComponent, setTypeComponent] = useState('');
  const [wid, setWid] = useState();
  const [hei, setHei] = useState();
  const [placeHolder, setPlaceHolder] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('');
  const [radius, setRadius] = useState();
  const [size, setSize] = useState();
  const [border, setBorder] = useState('');
  const [borderSize, setBorderSize] = useState();




 





  // const div = <button>teste</button>;


  function handleAddItem(){
    if(typeComponent === "Botao"){
      setComponents(prevComponent => ([
        ...prevComponent,
        <Button wid={wid} color={color} hei={hei} content={content} radius={radius} border={border} borderSize={borderSize}/>
      ]));
    }
    if(typeComponent === 'Div'){
      setComponents(prevComponent => ([
        ...prevComponent,
        <Div wid={wid} color={color} hei={hei} radius={radius} border={border} borderSize={borderSize} />
      ]));
      
    }
    if(typeComponent === 'Input'){
      setComponents(prevComponent => ([
        ...prevComponent,
        <Input wid={wid} color={color} hei={hei} placeHolder={placeHolder} radius={radius} border={border} borderSize={borderSize}/>
      ]));
    }
    if(typeComponent === 'Title'){
      setComponents(prevComponent => ([
        ...prevComponent,
        <Title size={size} color={color} content={content} border={border} borderSize={borderSize}/>
      ]));
    }
    

  }
  function handleRemoveItem(){
    setComponents((prevArray) => prevArray.slice(0, -1))
  }

  return (
    <div className="container">
      <div className='form'>
        <h5>Selecione o tipo de Item:</h5>
        <select value={typeComponent} onChange={(e)=>setTypeComponent(e.target.value)}>
          <option value=''>Selecione um item</option>
          <option value="Div">Div</option>
          <option value="Botao">Botão</option>
          <option value="Input">Input</option>
          <option value="Title">Title</option>

        </select>
        {typeComponent !== "Title" && 
        (<>
          <h5>Defina a largura(em pixels) do Item:</h5>
          <input type='number' value={wid} onChange={(e)=>setWid(e.target.value)} />
          <h5>Defina a altura(em pixels) do Item:</h5>
          <input type='number' value={hei} onChange={(e)=>setHei(e.target.value)} />
        </>)}

        {typeComponent === "Title" && 
        (<>
          <h5>Defina o tamanho da fonte em pixels:</h5>
          <input type='number' value={size} onChange={(e)=>setSize(e.target.value)} />
        </>)}

        <h5>Defina a cor de fundo  do Item:</h5>
        <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} />

        <h5>Defina a cor da borda:</h5>
        <input type='text' value={border} onChange={(e)=>setBorder(e.target.value)} />

        <h5>Defina o tamanho da borda em pixels:</h5>
        <input type='number' value={borderSize} onChange={(e)=>setBorderSize(e.target.value)} />

        <h5>Arredondanto da borda:</h5>
        <input type='number' value={radius} onChange={(e)=>setRadius(e.target.value)} />

        {typeComponent === "Botao" | typeComponent === "Title"  ? 
        (<>
          <h5>Defina o texto do componente:</h5>
          <input type='text' value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Digite o texto do componente' />
        </>):null}
        
        {typeComponent === "Input" && 
        (<>
          <h5>Defina o texto do placeholder:</h5>
          <input type='text' value={placeHolder} onChange={(e)=>setPlaceHolder(e.target.value)} placeholder='Digite o placeholder do input' />
        </>)}
        

        <button style={{backgroundColor:"#74c365"}}  onClick={handleAddItem}>Adicionar</button>
        <button style={{backgroundColor:"#f77"}} onClick={handleRemoveItem}>Remover último item</button>

      </div>
      <div className='renderItens'>
        {components}
        
      </div>
      
    </div>
  );
}

export default App;
