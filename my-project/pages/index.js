import Image from 'next/image'
import racko from '../img/racko.jpg'

export default function Home() {
  return (
    <>

    <body>
      <div classNameName="align-middle">

        <div>
          <Image classNameNameName="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={racko} alt="" />
        </div>

        <a href="#" className="block p-6 max-w-5xlsm bg-white rounded-lg border ">
          <h1 classNameName="mb-2 text-2xl font-bold tracking-tight text-red-600 ">Rack-O</h1>
          <p classNameName="mb-3 font-normal  ">Rack-O es un juego de cartas de combinación secuencial de Milton Bradley con el objetivo de obtener 10 números, en orden numérico, en la mano. La puntuación se puede mantener en una hoja de papel separada, según un sistema personalizado o el sistema provisto en el libro de reglas. Rack-O permite entre 2 y 4 jugadores y se recomienda para jugadores de 8 años en adelante. Rack-O fue lanzado en 1956 y actualmente está siendo producido por Winning Moves Games USA.</p>
        </a>
        
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mirB7hTlU4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <a href="#" className="block p-6 max-w-5xlsm bg-white rounded-lg border ">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-red-600 ">Componentes</h2>
              <ul>
                <li>Una baraja de 60 cartas de cartas Rack-O</li>
                <li>4 estantes de plástico Rack-O</li>
                <li>Libro de reglas</li>
              </ul>
        </a>

        <a href="#" className="block p-6 max-w-5xlsm bg-white rounded-lg border ">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-red-600 ">Objetivo</h2>
            <p classNameName="mb-3 font-normal  ">Ser el primer jugador en reemplazar las cartas en su estante sacando cartas de la pila cuyos números se leen en cualquier progresión numérica de BAJO a ALTO.</p>
        </a>

        <a href="#" className="block p-6 max-w-5xlsm bg-white rounded-lg border ">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-red-600 ">Setup</h2>

            <h3 className="mb-2 text-xl font-bold tracking-tight text-indigo-500 ">Cartas</h3>
            <p classNameName="mb-3 font-normal  ">Las tarjetas Rack-O están numeradas del 1 al 60. En este caso de 4 jugadores, se utilizan las 60 tarjetas.</p>

            <h3 className="mb-2 text-xl font-bold tracking-tight text-indigo-500 ">Rejillas</h3>
            <p classNameName="mb-3 font-normal  ">Cada jugador usa un estante. Los números que aparecen en cada estante: 5, 10, 15, 20, 25, 30, 35, 40, 45 y 50 se utilizan solo para puntuar.</p>

            <h3 className="mb-2 text-xl font-bold tracking-tight text-indigo-500 ">Acuerdo</h3>
            <p classNameName="mb-3 font-normal  ">Corte para el trato. Primero se reparten cartas bajas. El crupier baraja las cartas y reparte diez a todos los jugadores.</p>

        </a>

        <a href="#" className="block p-6 max-w-5xlsm rounded-lg border">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-red-600 ">Como se juega</h2>
            <p classNameName="mb-3 font-normal  ">La parte sin sal de las cartas (la Pila) se coloca boca abajo en el centro de la mesa. La carta superior se coloca boca arriba junto a ella para comenzar la pila de descartes. Los jugadores se turnan comenzando a la izquierda del crupier.</p>
            <p classNameName="mb-3 font-normal  ">Un jugador debe tomar una carta, ya sea la carta superior de la Pila o el Descarte superior. Si toma el Descarte superior, debe cambiarlo por uno de su estante, que descarta (boca arriba en la pila de Descartes).Si toma la carta superior de la Pila, puede cambiarla por una de su estante o descartarla si así lo desea.</p>
            <p classNameName="mb-3 font-normal  ">Cuando se intercambian tarjetas, el jugador debe colocar la nueva tarjeta en la ranura de la que se toma la tarjeta anterior.</p>
            <p classNameName="mb-3 font-normal  ">Si la Pila se agota antes de que cualquier jugador haga Rack-O, la pila de Descarte se voltea y se usa como Pila de nuevo.</p>
        </a>

        
        <a href="#" className="block p-6 max-w-5xlsm rounded-lg border ">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-red-600 ">Ganar una ronda</h2>
            <p classNameName="mb-3 font-normal  ">¡Una ronda termina cuando un jugador se convierte en Rack-O! Para ir al Rack-O, un jugador debe tener las diez cartas en su estante leyendo desde una tarjeta BAJA en la ranura n. ° 5 a una tarjeta ALTA en la ranura n. ° 50, en cualquier combinación de tarjetas cada vez más altas.</p>
            <p classNameName="mb-3 font-normal  ">La Figura 1 muestra una de las muchas combinaciones que un jugador podría tener para ir al Rack-O y ganar una ronda.</p>
        </a>

        <a href="#" className="block p-6 max-w-5xlsm rounded-lg border ">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-red-600 ">Fin del juego</h2>
              <p classNameName="mb-3 font-normal  ">El jugador que juega Rack-O anota 75 puntos, 5 por cada una de las diez cartas en su estante y 25 puntos por ir Rack-O.</p>
              <p classNameName="mb-3 font-normal  ">Los otros jugadores obtienen 5 puntos por las cartas, en su estante, en secuencia BAJA a ALTA. Comenzando con la tarjeta en la ranura n. ° 5 y terminando donde se ha roto la sucesión de tarjetas superiores. La figura 3 muestra una puntuación de 30 puntos.</p>
              <p classNameName="mb-3 font-normal  ">Ya que la tarjeta 37 en la ranura # 30 es seguida por la tarjeta 22 en la ranura # 35. No se puntúan las últimas cuatro cartas del estante aunque estén colocadas correctamente.</p>
              <p classNameName="mb-3 font-normal  ">A veces, un jugador puede anotar solo 5 puntos en una ronda, porque la tarjeta en la ranura # 10 es más baja que la tarjeta en la ranura # 5; aunque las nueve cartas restantes estén en orden.</p>
              <p classNameName="mb-3 font-normal  ">A veces, un jugador puede anotar solo 5 puntos en una ronda, porque la tarjeta en la ranura # 10 es más baja que la tarjeta en la ranura # 5; aunque las nueve cartas restantes estén en orden.</p>
        </a>
      
      </div>
    </body>
    </>
  )
}