import Image from 'next/image'
import imagen from '../img/racko.jpg'

export default function Home() {
  return (
    <>

    <body>
      <div className="align-middle">

        <a href="#" classNameName="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image classNameName="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={imagen} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rack-O</h1>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rack-O es uno de los juegos de cartas más queridos. Ha sido un favorito para jugadores de todas las edades desde la década de 1950. Esta versión clásica presenta las reglas originales, la jugabilidad y la apariencia que adoran los jugadores.</p>
          </div>
        </a>
        
        <div>
          <h2>
            Componentes 
          </h2>
          <ul>
            <li>Una baraja de 60 cartas de cartas Rack-O</li>
            <li>4 estantes de plástico Rack-O</li>
            <li>Libro de reglas</li>
          </ul>
        </div>

        <div>
          <h2>
            Objetivo
          </h2>
          <p>
            Ser el primer jugador en reemplazar las cartas en su estante sacando cartas de la pila cuyos números se leen en cualquier progresión numérica de BAJO a ALTO.
          </p>
        </div>

        <div>
          <h2>
            Setup
          </h2>

          <h3>
            Cartas
          </h3>
          <p>
            Las tarjetas Rack-O están numeradas del 1 al 60. En este caso de 4 jugadores, se utilizan las 60 tarjetas. 
          </p>

          <h3>
            Rejillas
          </h3>
          <p>
            Cada jugador usa un estante. Los números que aparecen en cada estante: 5, 10, 15, 20, 25, 30, 35, 40, 45 y 50 se utilizan solo para puntuar. 
          </p>

          <h3>
            Acuerdo
          </h3>
          <p>
            Corte para el trato. Primero se reparten cartas bajas. El crupier baraja las cartas y reparte diez a todos los jugadores. 
          </p>
          <p>
            Nota importante: a medida que se reparte cada carta, cada jugador la coloca inmediatamente en una ranura de su estante.
            Cada jugador debe insertar su primera tarjeta en la ranura n. ° 50, la segunda tarjeta en la ranura n. ° 45, la tercera tarjeta en la ranura n. ° 40 y así sucesivamente hasta que su estante esté lleno con las diez tarjetas. 
          </p>
        </div>

        <div>
          <h2>
            Como se juega
          </h2>
          <p>
            La parte sin sal de las cartas (la Pila) se coloca boca abajo en el centro de la mesa. La carta superior se coloca boca arriba junto a ella para comenzar la pila de descartes. Los jugadores se turnan comenzando a la izquierda del crupier.
          </p>
          <p>
            Un jugador debe tomar una carta, ya sea la carta superior de la Pila o el Descarte superior. Si toma el Descarte superior, debe cambiarlo por uno de su estante, que descarta (boca arriba en la pila de Descartes).
            Si toma la carta superior de la Pila, puede cambiarla por una de su estante o descartarla si así lo desea.
          </p>
          <p>
            Cuando se intercambian tarjetas, el jugador debe colocar la nueva tarjeta en la ranura de la que se toma la tarjeta anterior.
          </p>
          <p>
            Si la Pila se agota antes de que cualquier jugador haga "Rack-O", la pila de Descarte se voltea y se usa como Pila de nuevo.
          </p>
        </div>

        <div>
          <h2>
            Ganar una ronda
          </h2>
          <p>
            ¡Una ronda termina cuando un jugador se convierte en Rack-O! Para ir al Rack-O, un jugador debe tener las diez cartas en su estante leyendo desde una tarjeta BAJA en la ranura n. ° 5 a una tarjeta ALTA en la ranura n. ° 50, en cualquier combinación de tarjetas cada vez más altas.
          </p>
          <p>
            La Figura 1 muestra una de las muchas combinaciones que un jugador podría tener para ir al Rack-O y ganar una ronda.
          </p>
        </div>

        <div>
          <h2>
            Fin del juego
          </h2>
          <p>
            El jugador que juega Rack-O anota 75 puntos, 5 por cada una de las diez cartas en su estante y 25 puntos por ir Rack-O.
          </p>
          <p>
            Los otros jugadores obtienen 5 puntos por las cartas, en su estante, en secuencia BAJA a ALTA. Comenzando con la tarjeta en la ranura n. ° 5 y terminando donde se ha roto la sucesión de tarjetas superiores. La figura 3 muestra una puntuación de 30 puntos.
          </p>
          <p>
            Ya que la tarjeta 37 en la ranura # 30 es seguida por la tarjeta 22 en la ranura # 35. No se puntúan las últimas cuatro cartas del estante aunque estén colocadas correctamente.
          </p>
          <p>
            A veces, un jugador puede anotar solo 5 puntos en una ronda, porque la tarjeta en la ranura # 10 es más baja que la tarjeta en la ranura # 5; aunque las nueve cartas restantes estén en orden.
          </p>
          <p>
            El primer jugador en anotar un total de 500 puntos o más gana el juego.
          </p>
        </div>
      
      </div>
    </body>
    </>
  )
}