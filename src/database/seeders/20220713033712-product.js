const Sequelize = require("sequelize");
("use strict");
const products = [
  {
    name: "LA LARGA MARCHA",
    autorId: 1,
    price: 2500,
    description:"Una inquietante novela futurista donde la realidad supera a la fantasía más terrorífica. El escenario: una sociedad ultraconservadora que ha llevado al paroxismo sus rasgos más perversos, dominada por un estado policial. El acontecimiento: la más extraordinaria competición deportiva, una agotadora marcha a pie donde un resbalón puede ser el último. Los competidores: cien adolescentes elegidos por sorteo decididos a pasar sobre los cadáveres de sus compañeros para llegar a la meta. El premio: fama y fortuna para el ganador, es decir, para el único superviviente.Solo uno será el triunfador.Los 99 restantes morirán.",
    publisherId: 1,
    genreId: 12,
    languageId: 1,
    image: "laLargaMarcha.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "EL CHICO QUE DIBUJABA CONSTELACIONES",
    autorId: 2,
    price: 2530,
    description:"Esta es una historia de amor, de sueños y de vida. La de Valentina. La chica que no sabía que tenía el mundo a sus pies, la que creció y empezó a pensar en imposibles. La que cazaba estrellas, la que anhelaba más, la que tropezó con él. Con Gabriel. El chico que dibujaba constelaciones, el valiente e idealista, el que confió en las palabras «para siempre», y creó los pilares que terminaron sosteniendo el pasado, el ahora, lo que fueron y los recuerdos que se convertirán en polvo.",
    publisherId: 2,
    genreId: 6,
    languageId: 1,
    image: "elChicoqueDibujaba.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "EL PRINCIPITO",
    autorId: 3,
    price: 890,
    description:"El mundo de fantasía y la mirada tierna y curiosa de El Principito conquistó a grandes y chicos de distintas épocas. Catapulta editores presenta una nueva edición con las ilustraciones originales de Antoine de Saint Exupéry, traducida por Cristina Piña. Incluye un exclusivo señalador con pie para que el mismo Principito acompañe el viaje por las páginas de su libro.",
    publisherId: 3,
    genreId: 4,
    languageId: 1,
    image: "elPrincipito.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "EL AMOR DE MOBUKO",
    autorId: 4,
    price: 2150,
    description:"A Mobuko Tanaka nunca la han sacado a bailar. Siempre ha sido una chica callada y tímida, un personaje secundario en la obra de su propia vida. Pero ahora, con veinte años, Mobuko se ha enamorado por primera vez. El chico de sus sueños es Irie, un compañero del supermercado en el que trabaja. Aunque Mobuko trata de mantener las distancias, cuando otra compañera del supermercado descubre lo que siente por él, la anima a acercarse a Irie. ¿Tendrá Mobuko el valor suficiente para deshacerse de su timidez y conquistar al chico por el que se le derrite el corazón?",
    publisherId: 4,
    genreId: 5,
    languageId: 2,
    image: "elAmorDeMobuko.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "GAMBITO DE DAMA",
    autorId: 5,
    price: 3099,
    description:"Beth Harmon es una niña de ocho años que vive en un orfanato de Kentucky, en Estados Unidos. Allí, como todas sus compañeras, recibe tranquilizantes dos veces al día, lo que le provocará una adicción que la acompañará toda su vida. Pero su día a día dará un vuelco tras jugar su primera partida de ajedrez.",
    publisherId: 5,
    genreId: 6,
    languageId: 1,
    image: "elGambitoDeLaDama.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "LA SOMBRA DEL VIENTO",
    autorId: 6,
    price: 2860,
    description:"Un amanecer de 1945, un muchacho es conducido por su padre aun misterioso lugar oculto en el corazón de la ciudad vieja: El Cementerio de los Libros Olvidados. Allí, Daniel Sempere encuentra un libro maldito que cambia el rumbo de su vida y lo arrastra a un laberinto de intrigas y secretos enterrados en el alma oscura de la ciudad. La Sombra del Viento es un misterio literario ambientado en la Barcelona de la primera mitad del siglo XX, desde los últimos esplendores del Modernismo hasta las tinieblas de la posguerra. Aunando las técnicas del relato de intriga y suspenso, la novela histórica y la comedia de costumbres, La Sombre del Viento es sobre todo una trágica historia de amor cuyo eco se proyecta a traves del tiempo. Con gran fuerza narrativa, el autor entrelaza tramas y enigmas a modo de muñecas rusas en un inolvidable relato sobre los secretos del corazón y el embrujo de los libros cuya intriga se mantiene hasta la última página.",
    publisherId: 6,
    genreId: 12,
    languageId: 1,
    image: "laSombraDelViento.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "1984",
    autorId: 7,
    price: 2149,
    description:"En 1984, Londres está controlada por un gobieno totalitario. El Gran Hermano lo vigila absolutamente todo. La mano ejecutora, la Policía del Pensamiento, controla cada aspecto de la vida de los ciudadanos. Un hombre llamado Winston Smith, trabajador del Ministerio de la Verdad, intentará rebelarse contra el régimen opresor.",
    publisherId: 7,
    genreId: 4,
    languageId: 1,
    image: "1984.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "EL DIARIO DE ANA FRANK",
    autorId: 8,
    price: 1470,
    description:"Tras la invasión a Holanda, los Frank, comerciantes judíos alemanes emigrados a Amsterdam en 1933, se ocultaron de la Gestapo en una buhardilla anexa al edificio donde el padre de Ana tenía sus oficinas. Eran ocho personas y permanecieron recluidas desde junio de 1942 hasta agosto de 1944, fecha en que fueron detenidos y enviados a un campo de concentración. En ese lugar, y en las más precarias condiciones, Ana, una niña de trece años, escribió su estremecedor Diario: un testimonio único en su género sobre el horror y la barbarie nazi, y sobre los sentimientos y experiencias de la propia Ana y sus acompañantes. Ana murió en el campo de Bergen-Belsen en marzo de 1945.",
    publisherId: 8,
    genreId:2 ,
    languageId: 1,
    image: "elDiarioDeAnaFrank.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "EL PSICOANALISTA",
    autorId: 9,
    price: 4399,
    description:"Feliz cumpleaños, doctor. Bienvenido al primer día de su muerte. Así comienza el anónimo que recibe Starks, psicoanalista con una larga experiencia y una tranquila vida cotidiana. Starks tendrá que emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerla la existencia imposible.",
    publisherId:9 ,
    genreId:11 ,
    languageId: 1,
    image: "elPsicoanalista.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "LOS CUATRO ACUERDOS",
    autorId: 10,
    price: 2350,
    description:"El doctor Miguel Ruiz nos propone en este libro un sencillo procedimiento para eliminar todas aquellas creencias heredadas que nos limitan y substituirlas por otras que responden a nuestra realidad interior y nos conducen a la libertad. No hay razón para sufrir. La única razón por la que sufres es porque tú así lo eliges. Si observas tu vida encontrarás muchas excusas para sufrir, pero ninguna razón válida. Lo mismo es aplicable a la felicidad. La única razón por la que eres feliz es por que tú decides ser feliz. La felicidad es una elección, como también lo es el sufrimiento",
    publisherId:10 ,
    genreId: 1,
    languageId: 1,
    image: "losCuatroAcuerdos.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "EL HOMBRE EN BUSCA DEL SENTIDO",
    autorId: 11,
    price: 1850,
    description:"En esta obra, Viktor E. Frankl explica la experiencia que le llevó al descubrimiento de la logoterapia. Prisionero, durante mucho tiempo, en los desalmados campos de concentración, él mismo sintió en su propio ser lo que significaba una existencia desnuda. ¿Cómo pudo él que todo lo había perdido, que había visto destruir todo lo que valía la pena, que padeció hambre, frío, brutalidades sin fin, que tantas veces estuvo a punto del exterminio, cómo pudo aceptar que la vida fuera digna de vivirla? El psiquiatra que personalmente ha tenido que enfrentarse a tales rigores merece que se le escuche, pues nadie como él para juzgar nuestra condición humana sabia y compasivamente. Las palabras del doctor Frankl alcanzan un temple sorprendentemente esperanzador sobre la capacidad humana de trascender sus dificultades y descubrir la verdad conveniente y orientadora.",
    publisherId: 11,
    genreId:2,
    languageId: 1,
    image: "elHombreEnBuscaDelSentido.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "EL MONJE QUE VENDIÓ SU FERRARI",
    autorId: 12,
    price: 2149,
    description:"El monje que vendió su Ferrari es la sugerente y emotiva historia de Julian Mantle, un superabogado cuya vida estresante, desequilibrada y obsesionada con el dinero acaba provocándole un infarto. Ese desastre provoca en Julian una crisis espiritual que lo lleva a enfrentarse a las grandes cuestiones de la vida. Esperando descubrir los secretos de la felicidad y el esclarecimiento, emprende un extraordinario viaje por el Himalaya para conocer una antiquísima cultura de hombres sabios. Y allí descubre un modo de vida más gozoso, así como un método que le permite liberar todo su potencial y vivir con pasión, determinación y paz. Escrito a modo de fábula, este libro contiene una serie de sencillas y eficaces lecciones para mejorar nuestra manera de vivir. Vigorosa fusión de la sabiduría espiritual de Oriente con los principios del éxito occidentales, muestra paso a paso cómo vivir con más coraje, alegría, equilibrio y satisfacción",
    publisherId: 7,
    genreId: 1,
    languageId: 1,
    image: "elMonjeQueVendioSuFerrari.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "CIEN AÑOS DE SOLEDAD",
    autorId: 13,
    price: 2699,
    description:"Entre la boda de José Arcadio Buendía con Amelia Iguarán hasta la maldición de Aureliano Babilonia transcurre todo un siglo. Cien años de soledad para una estirpe única, fantástica, capaz de fundar una ciudad tan especial como Macondo y de engendrar niños con cola de cerdo. En medio, una larga docena de personajes dejarán su impronta a las generaciones venideras, que tendrán que lidiar con un mundo tan complejo como sencillo",
    publisherId: 7,
    genreId: 6,
    languageId: 1,
    image: "cienAnosDeSoledad.jpg",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "SIETE VIDAS",
    autorId: 14,
    price: 2399,
    description:"Tres amigos viajan a Memphis para donar sangre a un viejo conocido ingresado tras un accidente. Sin embargo, estos tres pueblerinos se pierden en las luces de la gran ciudad. En Siete vidas hay personas tenaces, como una anciana madre que lo deja todo por ese hijo condenado a muerte que lleva años esperando un indulto que nunca llega. Y personas hartas de sobrellevar una vida de recriminaciones, como el abogado Mack Stafford, casado con una mujer odiosa, de una familia adinerada, que estaba convencida de que junto a él llevaría una vida de lujo. Pero también hay abogados de éxito pero sin escrúpulos, capaces de causar la ruina de una familia. Del mismo modo, hay personas sin piedad e hipócritas que ni siquiera son capaces de aceptar al hijo pródigo enfermo de SIDA, ni mucho menos oír en voz alta la palabra «homosexual»",
    publisherId: 7,
    genreId: 6,
    languageId: 1,
    image: "sieteVidas.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "BLOOM INTO YOU",
    autorId: 15,
    price: 625,
    description:"¿Qué significa amar a alguien? Toko se enfrenta a esa respuesta después de la confesión de Sayaka. Mientras, Yu, quien no pudo contener sus sentimientos no correspondidos, recibe un mensaje de Toko. Ambas se precipitan, para decirle algo importante a esa persona especial. 'Nanami, te quiero'.",
    publisherId: 12,
    genreId: 5,
    languageId: 1,
    image: "bloomintoYou.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "A SANGRE FRÍA",
    autorId: 16,
    price: 3549,
    description:"A sangre fría narra el brutal asesinato de los cuatro miembros de una familia de Kansas. En 1959, un violento crimen sacudió la tranquila vida de Holcomb, Kansas. La sociedad estadounidense de aquellos años quedó conmocionada por un crimen que sugería que cualquiera podía morir asesinado en cualquier momento.",
    publisherId: 13,
    genreId: 11,
    languageId: 1,
    image: "aSangreFria.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "HARRY POTTER Y LA PIEDRA FILOSOFAL",
    autorId: 17,
    price: 3444,
    description:"Harry vive con sus horribles tíos y el insoportable primo Dudley, hasta que su ingreso en el Colegio Hogwarts de Magia y Hechicería cambia su vida para siempre. Allí aprenderá trucos y encantamientos fabulosos, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Y, sobre todo, conocerá los secretos que lo ayudarán a cumplir con su destino.",
    publisherId: 14,
    genreId: 4,
    languageId: 1,
    image: "harryPotter.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "CRIMEN Y CASTIGO",
    autorId: 18,
    price: 2300,
    description:"Crimen y castigo es una novela que trata la historia de un joven exestudiante de la carrera de Derecho de la universidad de San Petersburgo (Rusia) que se ve obligado a abandonar sus estudios por problemas económicos. En la penuria, decide probarse a sí mismo si es un hombre extraordinario o no según su teoría.",
    publisherId: 15,
    genreId: 6,
    languageId: 1,
    image: "crimenYcastigo.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "MUJERCITAS",
    autorId: 19,
    price:4999,
    description:"'Mujercitas' narra cómo cuatro niñas se convierten en mujeres, con la Guerra de Secesión norteamericana como telón de fondo. Son momentos difíciles, que la familia March, afrontará con fortaleza y dignidad. Pero la novela va más allá de la transmisión de los valores de la burguesía decimonónica y nos muestra 'el valor del trabajo para la independencia de las mujeres, la necesidad de construir una realidad mejor', y la importancia de virtudes como el esfuerzo personal o la solidaridad.",
    publisherId: 16,
    genreId: 7,
    languageId: 1,
    image: "mujercitas.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "LOS SIETE MARIDOS DE EVELYN HUGO",
    autorId: 20,
    price: 2690,
    description:"Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar la verdad sobre su vida llena de glamour y de escándalos. Pero cuando elige para ello a Monique Grant, una periodista desconocida, nadie se sorprende más que la misma Monique. Por qué ella ? Por qué ahora ? Monique no está precisamente en su mejor momento. Su marido la abandonó, y su vida profesional no avanza. Aún ignorando por que Evelyn la ha elegido para escribir su biografía. Monique esta decidida a aprovechar esa oportunidad para dar impulso a su carrera. Convocada al lujoso apartamento de Evelyn, Monique escucha fascinada mientras la actriz le cuenta su historia. Desde su llegada a Los Angeles en los años 50 hasta su decisión de abandonar su carrera en el espectáculo en los 80 - y desde luego, los siete maridos que tuvo en ese tiempo - Evelyn narra una historia de ambición implacable, amistad inesperada y un gran amor prohibido.",
    publisherId: 17,
    genreId: 6,
    languageId: 1,
    image: "losSieteMaridos.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "PADRE RICO, PADRE POBRE",
    autorId: 21,
    price: 3249,
    description:"El libro de finanzas personales número 1 en todo el mundo.Con un estilo claro y ameno, este libro te pondrá en el camino directo al éxito financiero y así lograrás que el dinero trabaje para ti.Padre Rico, Padre Pobre te ayudará a  derribar el mito de que necesitas tener ingresos elevados para hacerte rico. o Desafiar la creencia de que tu casa es una inversión, o Demostrar a los padres por qué no deben confiar en el sistema escolar para que sus hijos aprendan a manejar el dinero.",
    publisherId: 7,
    genreId: 8,
    languageId: 1,
    image: "padreRicoPadrePobre.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "EL PODER DEL AHORA",
    autorId:22,
    price: 2400,
    description:"Para adentrarse en EL PODER DEL AHORA tendremos que dejar atrás nuestra mente analítica y su falso yo, el ego. Desde la primera página de este extraordinario libro nos elevamos a una mayor altura y respiramos un aire más ligero. Conectamos con la esencia indestructible de nuestro Ser: 'la Vida Una omnipresente, eterna, que está más allá de la miríada de formas de vida sujetas al nacimiento y a la muerte'. Aunque el viaje es todo un reto, Eckhart Tolle nos guía usando un lenguaje simple y un sencillo formato de pregunta-respuesta.",
    publisherId: 18,
    genreId: 1,
    languageId: 1,
    image: "elPoderDelAhora.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "TE ESPERARÉ TODA MI VIDA",
    autorId: 23,
    price: 2770,
    description:"Montse, Julia y Juana son tres amigas españolas que reciden en Londres. Para olvidarse de su estresante día a día (y para ayudar a que Montse supere la ruptura con un novio traicionero), escapan de viaje de chicas a Edimburgo. Las mágicas tierras escocesas las sorprenderan más de lo que esperaban y cambiarán el rumbo que tenián planificado por uno mucho más tentador. Y, aunque allí donde van a ir a parar no tendrán ni crema de manos ni señal de celular, a cambio encontraran un castillo, highlanders apasionados e, incluso, un eterno amor que nunca se apaga. Una novela time travel divertidísima, sorprendente y romántica con el sello inconfundible de Megan Maxwell.",
    publisherId: 2,
    genreId: 7,
    languageId: 1,
    image: "teEsperareTodaMiVida.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "RAYUELA",
    autorId: 24,
    price: 4999,
    description:"«En pleno contento precario, en plena falsa tregua, tendí la mano y toqué el ovillo París, su materia infinita arrollándose a sí misma; entonces no había desorden, entonces el mundo seguía siendo algo petrificado y establecido, un juego de elementos girando en sus goznes, una madeja de calles y árboles y nombres y meses.» En Rayuela (1963), Julio Cortázar supo condensar sus obsesiones estéticas, literarias y vitales a partir de un mosaico diverso, prof undo, inagotable que, a su vez, refleja de forma maravillosa lo más esencial de su época. El amor turbulento de Oliveira y La Maga, los amigos del Club de la Serpiente, las impredecibles caminatas por París -la ciudad que promete el cielo pero puede conducir al infierno-, encuentran su contracara en la aventura protagonizada por Oliveira, Talita y Traveler en Buenos Aires. Rayuela es un libro único, abierto a múltiples lecturas, lúdico, complejo, lleno de riesgo y humor, de una originalidad sin precedentes y un talento innato para influir en las futuras generaciones.",
    publisherId:7 ,
    genreId: 6,
    languageId: 1,
    image: "rayuela.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "CUENTOS DE EVA LUNA",
    autorId:25,
    price: 3099,
    description:"Veintitres relatos de amor y violencia secretamente entrelazados por un fino hilo narrativo y un rico lenguaje que recrea azarosas peripecias en un mundo exuberante y voluptuoso.Una niña solitaria se enamora del amante de su madre y practica misteriosas ceremonias rituales; una mujer permanece medio siglo encerrada en un sótano, víctima de un caudillo celoso; en el fragor de una batalla, un hombre viola a una muchacha y mata a su padre... Éstas son algunas de las historias reunidas en este volumen, que recupera con pulso vibrante los inolvidables protagonistas de la novela Eva Luna",
    publisherId: 19,
    genreId: 6,
    languageId: 1,
    image: "cuentosDeEvaLuna.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "LOS AÑOS PERDIDOS",
    autorId: 26,
    price: 2500,
    description:"Tras toda una vida dedicada a los estudios bíblicos, Jonathan Lyons cree haber hallado el más buscado y valioso de los pergaminos: una carta supuestamente escrita por Jesucristo y que desapareció de la Biblioteca del Vaticano alrededor del año 1500. Pero, poco después del hallazgo, Jonathan es encontrado muerto de un disparo en su estudio, y su mujer, Kathleen, enferma de Alzheimer, escondida en un armario, desorientada y con el arma del crimen en la mano. ¿Mató ella a su marido en un ataque de celos, tal y como sospecha la policía? ¿O quizá la muerte de Jonathan esté ligada al misterioso pergamino? Con su madre imputada por el asesinato y sin ningún rastro del manuscrito, Mariah Lyons luchará por descubrir qué se oculta detrás de la muerte de su padre",
    publisherId: 7,
    genreId:11,
    languageId: 1,
    image: "losAñosPerdidos.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "ANTOLOGÍA POÉTICA",
    autorId: 27,
    price: 670,
    description:"En esta antología poética, compuesta por ella misma, encontramos, en síntesis subjetiva, desde los poemas románticos de su primera época hasta la última producción animada por una inquietud de renovación. La más exquisita gracia, profundidad, ironía y pasión se revelan a lo largo de sus 180 mejores poesías.",
    publisherId:20 ,
    genreId: 10,
    languageId: 1,
    image: "antologia.png",
    categoryId: 2,
    createdAt: new Date(),
  },
  {
    name: "COMEDIAS DRAMÁTICAS",
    autorId: 28,
    price:570,
    description:"Siete comedias dramáticas del dramaturgo argentino José Ignacio Serralunga. En ellas, protagonistas comunes, reconocibles, con sus alegrías y sus angustias cotidianas, pero envueltas, por obra de la imaginación, en algunas circunstancias que nos distancian, como espectadores, de esa realidad prosaica.Nada parecen prometer en principio el encuentro del sacerdote con la joven, la dueña de casa y su empleada doméstica, una madre con sus hijos, dos soldados en la víspera de una batalla, o unas inmigrantes francesas en un pueblito argentino en el siglo diecinueve. Salvo que, como sucede en algunas de estas piezas teatrales, aparezcan atisbos de situaciones mágicas, oníricas, incluso mitológicas que harán, por contraste, parecer aún más reales, más atrapantes, las historias.",
    publisherId: 21,
    genreId: 9,
    languageId: 1,
    image: "comediasDramaticas.png",
    categoryId: 1,
    createdAt: new Date(),
  },
  {
    name: "ODISEA",
    autorId: 29,
    price: 4990,
    description:"Todos conocemos la historia de la «Odisea», aunque no la hayamos leído. Está en canciones, en novelas, en poemas, en cuadros, en chistes. Blackie Books arranca su colección «Clásicos Liberados» con la historia de todas las historias occidentales, dando voz tanto a Nick Cave como a Mary Beard u Ovidio. Tomando la adaptación favorita de Borges para incluir, además, una versión de la historia de Margaret Atwood en una edición cuidadísima, pero no cara, ilustrada a todo color por el gran Calpurnio. Liberar a los clásicos es acercarnos a ellos de nuevas forma",
    publisherId: 22,
    genreId: 3,
    languageId: 1,
    image: "laOdisea.png",
    categoryId:2,
    createdAt: new Date(),
  },
  {
    name: "LA BAILARINA DE AUSCHWITZ",
    autorId: 30,
    price: 4995,
    description:"Una emocionante historia de superación sobre la capacidad del ser humano para sanar y vencer la adversidad. Eger tenía dieciséis años cuando los nazis invadieron su pueblo de Hungría y se la llevaron con el resto de su familia a Auschwitz. Al pisar el campo, sus padres fueron enviados a la cámara de gas y ella permaneció junto a su hermana, pendiente de una muerte segura. Pero bailar El Danubio azul para Mengele salvó su vida, y a partir de entonces empezó una nueva lucha por la supervivencia. Primero en los campos de exterminio, luego en la Checoslovaquia tomada por los comunistas y, finalmente, en Estados Unidos, donde acabaría convirtiéndose en discípula de Viktor Frankl. Fue en ese momento, tras décadas ocultando su pasado, cuando se dio cuenta de la necesidad de curar sus heridas, de hablar del horror que había vivido y de perdonar como camino a la sanación. Su mensaje es claro: tenemos la capacidad de escapar de las prisiones que construimos en nuestras mentes y podemos elegir ser libres, sean cuales sean las circunstancias de nuestra vida.",
    publisherId: 2,
    genreId: 2,
    languageId: 1,
    image: "laBailarinaDeAuschwitz.png",
    categoryId: 1,
    createdAt: new Date(),
  },

  
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
