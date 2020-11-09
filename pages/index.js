import {useState} from 'react'

function Home(){
    return <div>
                <h1>Home {process.env.NEXT_PUBLIC_HOME_ENV} </h1>
                <Contador />
            </div>
}

function Contador(){

    const [contador, setContador] = useState(1);

    function adicionarContador(){
        console.log(`This processor architecture is ${process.arch}`);
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;