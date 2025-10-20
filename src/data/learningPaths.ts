export type ResourceType = 'web' | 'video' | 'repo';

export interface Resource {
  type: ResourceType;
  title: string;
  url: string;
}

export interface Module {
  title: string;
  description: string;
  resources?: Resource[];
}

export interface Level {
  title: string;
  modules: Module[];
}

export interface LearningPath {
  title: string;
  description: string;
  levels: Level[];
}

const programmingLevels: Level[] = [
  {
    title: "Nivel 0-1: Fundamentos de la Programación",
    modules: [
      {
        title: "Lógica de Programación",
        description: "Aprende a pensar como un programador. Domina los algoritmos, el pseudocódigo y los diagramas de flujo para resolver problemas de manera estructurada.",
        resources: [
          { type: 'web', title: '¿Qué es la Lógica de Programación?', url: 'https://www.freecodecamp.org/espanol/news/que-es-la-logica-de-programacion/' },
          { type: 'video', title: 'Aprende Lógica de Programación desde Cero', url: 'https://www.youtube.com/watch?v=i5A62rec7xY' },
          { type: 'repo', title: 'Ejercicios de Lógica para Principiantes', url: 'https://github.com/nschurmann/logica-programacion-ejercicios' },
        ],
      },
      {
        title: "Fundamentos de Git y GitHub",
        description: "El control de versiones es esencial. Aprende a usar Git para gestionar tus proyectos y GitHub para colaborar con otros desarrolladores.",
        resources: [
          { type: 'web', title: 'Guía simple y visual de Git', url: 'https://rogerdudler.github.io/git-guide/index.es.html' },
          { type: 'video', title: 'Curso Completo de Git y GitHub', url: 'https://www.youtube.com/watch?v=VdGzPZ31ts8' },
          { type: 'repo', title: 'Recursos y Tutoriales de Git y GitHub', url: 'https://github.com/jonathan-casarrubias/git-github-recursos' },
        ],
      },
    ],
  },
  {
    title: "Ruta de Python 🐍",
    modules: [
      {
        title: "Nivel 1: Básico",
        description: "Sintaxis, tipos de datos, estructuras de control (if, for, while) y funciones básicas. Tu primer paso en el mundo de Python.",
        resources: [
          { type: 'web', title: 'W3Schools - Tutorial de Python', url: 'https://www.w3schools.com/python/' },
          { type: 'video', title: 'Curso Python desde Cero (MoureDev)', url: 'https://www.youtube.com/watch?v=Kp4Mvapo5kc' },
          { type: 'repo', title: 'Aprende Python - Trekhleb', url: 'https://github.com/trekhleb/learn-python' },
        ],
      },
      {
        title: "Nivel 2: Intermedio",
        description: "Profundiza con funciones avanzadas, módulos, manejo de excepciones y los fundamentos de la Programación Orientada a Objetos (POO).",
        resources: [
          { type: 'web', title: 'Real Python - POO en Python', url: 'https://realpython.com/python3-object-oriented-programming/' },
          { type: 'video', title: 'Python Intermedio: POO y Ficheros (Fazt Code)', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw' },
          { type: 'repo', title: 'Proyectos en Python (TheAlgorithms)', url: 'https://github.com/TheAlgorithms/Python' },
        ],
      },
      {
        title: "Nivel 3: Avanzado",
        description: "Explora conceptos como decoradores, generadores, concurrencia y el ecosistema de paquetes de Python.",
        resources: [
            { type: 'web', title: 'Decoradores en Python (Real Python)', url: 'https://realpython.com/primer-on-python-decorators/' },
            { type: 'video', title: 'Programación Concurrente en Python', url: 'https://www.youtube.com/watch?v=B1aNSSs1LhA' },
            { type: 'repo', title: 'Ejemplos de Patrones de Diseño en Python', url: 'https://github.com/yungshun/awesome-python-patterns' },
        ],
      },
      {
        title: "Nivel 4: Experto",
        description: "Domina la metaprogramación, optimización de rendimiento y los frameworks web más populares como Django y Flask.",
        resources: [
            { type: 'web', title: 'Documentación de Django', url: 'https://docs.djangoproject.com/en/5.0/' },
            { type: 'video', title: 'Curso de Flask (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=Z1RJmh_OkyI' },
            { type: 'repo', title: 'Awesome Django - Colección de Recursos', url: 'https://github.com/wsvincent/awesome-django' },
        ],
      },
    ],
  },
  {
    title: "Ruta de JavaScript ⚡",
    modules: [
        {
            title: "Nivel 1: Básico",
            description: "Manipulación del DOM, manejo de eventos, variables, tipos de datos y estructuras de control que dan vida a las páginas web.",
            resources: [
                { type: 'web', title: 'JavaScript.info - El Tutorial Moderno de JavaScript', url: 'https://javascript.info/' },
                { type: 'video', title: 'Curso de JavaScript para Principiantes (jonmircha)', url: 'https://www.youtube.com/watch?v=2preA6s_VXA' },
                { type: 'repo', title: '30 Días de JavaScript - Retos y Proyectos', url: 'https://github.com/Asabeneh/30-Days-Of-JavaScript' },
            ],
        },
        {
            title: "Nivel 2: Intermedio",
            description: "Adopta las características modernas de ES6+ y domina la asincronía con promesas y async/await para crear aplicaciones más potentes.",
            resources: [
                { type: 'web', title: 'Guía de Asincronía en JS (MDN)', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises' },
                { type: 'video', title: 'Async/Await Explicado (La Cocina del Código)', url: 'https://www.youtube.com/watch?v=r_kRk3n_N2k' },
                { type: 'repo', title: 'Ejemplos de características de ES6+', url: 'https://github.com/lukehoban/es6features' },
            ],
        },
        {
            title: "Nivel 3: Avanzado",
            description: "Entiende el corazón de JavaScript: prototipos, el event loop, closures y el funcionamiento de las Web APIs.",
            resources: [
                { type: 'web', title: 'Entendiendo el Event Loop en JS', url: 'https://www.freecodecamp.org/espanol/news/javascript-event-loop-tutorial/' },
                { type: 'video', title: '¿Qué es el Event Loop? (Visualización)', url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ' },
                { type: 'repo', title: 'You Don\'t Know JS (Libro)', url: 'https://github.com/getify/You-Dont-Know-JS' },
            ],
        },
        {
            title: "Nivel 4: Experto",
            description: "Construye aplicaciones complejas con frameworks como React, Vue o Angular, y adéntrate en el backend con Node.js.",
            resources: [
                { type: 'web', title: 'Documentación Oficial de React', url: 'https://react.dev/' },
                { type: 'video', title: 'Curso de Node.js para Principiantes (Fazt)', url: 'https://www.youtube.com/watch?v=iSwkFYpeE1M' },
                { type: 'repo', title: 'Awesome NodeJS - Recursos y Librerías', url: 'https://github.com/sindresorhus/awesome-nodejs' },
            ],
        },
    ],
  },
  {
    title: "Ruta de Java ☕",
    modules: [
        {
            title: "Nivel 1: Básico",
            description: "Comprende la sintaxis de Java, el funcionamiento de la JVM, los tipos de datos primitivos y las estructuras de control de flujo.",
            resources: [
                { type: 'web', title: 'W3Schools - Tutorial de Java', url: 'https://www.w3schools.com/java/' },
                { type: 'video', title: 'Curso de Java desde Cero (pildorasinformaticas)', url: 'https://www.youtube.com/watch?v=c2B_92-XP70' },
                { type: 'repo', title: 'Algoritmos en Java (TheAlgorithms)', url: 'https://github.com/TheAlgorithms/Java' },
            ],
        },
        {
            title: "Nivel 2: Intermedio",
            description: "Domina la Programación Orientada a Objetos, el framework de colecciones y el manejo avanzado de excepciones.",
            resources: [
                { type: 'web', title: 'GeeksForGeeks - POO en Java', url: 'https://www.geeksforgeeks.org/object-oriented-programming-in-java/' },
                { type: 'video', title: 'Java POO a Fondo (pildorasinformaticas)', url: 'https://www.youtube.com/watch?v=A-n_92-yN-c' },
                { type: 'repo', title: 'Tutoriales de Core Java - Colecciones', url: 'https://github.com/eugenp/tutorials/tree/master/core-java-modules/core-java-collections' },
            ],
        },
        {
            title: "Nivel 3: Avanzado",
            description: "Explora la concurrencia, hilos, genéricos y la potente API de Streams para un código más funcional y eficiente.",
            resources: [
                { type: 'web', title: 'Baeldung - Concurrencia en Java', url: 'https://www.baeldung.com/java-concurrency' },
                { type: 'video', title: 'Introducción a Java Streams API', url: 'https://www.youtube.com/watch?v=aGZNyq5i3gM' },
                { type: 'repo', title: 'Ejemplos de Concurrencia Avanzada en Java', url: 'https://github.com/eugenp/tutorials/tree/master/core-java-modules/core-java-concurrency-advanced' },
            ],
        },
        {
            title: "Nivel 4: Experto",
            description: "Construye aplicaciones robustas con Spring Framework, gestiona dependencias con Maven/Gradle y explora la arquitectura de microservicios.",
            resources: [
                { type: 'web', title: 'Spring Framework - Guías Oficiales', url: 'https://spring.io/guides' },
                { type: 'video', title: 'Curso de Spring Framework Completo', url: 'https://www.youtube.com/watch?v=P_IJb1nC3kM' },
                { type: 'repo', title: 'Spring PetClinic - Aplicación de Ejemplo', url: 'https://github.com/spring-projects/spring-petclinic' },
            ],
        },
    ],
  },
  {
    title: "Ruta de C / C++",
    modules: [
        {
            title: "Nivel 1: Básico",
            description: "Domina los fundamentos: punteros, gestión de memoria manual, compilación y enlazado. La base para todo lo demás.",
            resources: [
                { type: 'web', title: 'Learn-C.org - Tutorial Interactivo', url: 'https://www.learn-c.org/' },
                { type: 'video', title: 'Curso de C++ para Principiantes (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=18c3MTX0PK0' },
                { type: 'repo', title: 'Algoritmos en C++ (TheAlgorithms)', url: 'https://github.com/TheAlgorithms/C-Plus-Plus' },
            ],
        },
        {
            title: "Nivel 2: Intermedio",
            description: "Implementa estructuras de datos complejas desde cero y aplica los principios de la Programación Orientada a Objetos en C++.",
            resources: [
                { type: 'web', title: 'GeeksForGeeks - Estructuras de Datos', url: 'https://www.geeksforgeeks.org/data-structures/' },
                { type: 'video', title: 'Estructuras de Datos y Algoritmos (CS Dojo)', url: 'https://www.youtube.com/watch?v=B31LgI4Y4DQ' },
                { type: 'repo', title: 'Implementaciones de Estructuras de Datos en C++', url: 'https://github.com/TheAlgorithms/C-Plus-Plus/tree/master/data_structures' },
            ],
        },
        {
            title: "Nivel 3: Avanzado",
            description: "Utiliza el poder de la Standard Template Library (STL), plantillas (templates) y concurrencia básica para código de alto rendimiento.",
            resources: [
                { type: 'web', title: 'cppreference.com - Referencia de Concurrencia', url: 'https://en.cppreference.com/w/cpp/thread' },
                { type: 'video', title: 'Introducción al Multithreading en C++', url: 'https://www.youtube.com/watch?v=p5i1S2a6-pc' },
                { type: 'repo', title: 'Ejemplos de Concurrencia en C++', url: 'https://github.com/sol-prog/cpp-concurrency' },
            ],
        },
        {
            title: "Nivel 4: Experto",
            description: "Sumérgete en la programación de sistemas, optimización de bajo nivel y las características de C++ moderno (C++11/14/17/20).",
            resources: [
                { type: 'web', title: 'C++ Core Guidelines - Guías de Estilo', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines' },
                { type: 'video', title: 'Tutorial de C++ Moderno (The Cherno)', url: 'https://www.youtube.com/watch?v=xnqTKD8uD64' },
                { type: 'repo', title: 'Características de C++ Moderno', url: 'https://github.com/AnthonyCalandra/modern-cpp-features' },
            ],
        },
    ],
  },
  {
    title: "Ruta de C# 💻",
    modules: [
        {
            title: "Nivel 1: Básico",
            description: "Introduce la sintaxis de C#, el ecosistema .NET y los tipos de datos fundamentales para construir tus primeras aplicaciones.",
            resources: [
                { type: 'web', title: 'Documentación Oficial de C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
                { type: 'video', title: 'Curso Completo de C# (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=GhQdlIFylQ8' },
                { type: 'repo', title: 'Algoritmos en C# (TheAlgorithms)', url: 'https://github.com/TheAlgorithms/C-Sharp' },
            ],
        },
        {
            title: "Nivel 2: Intermedio",
            description: "Aplica la Programación Orientada a Objetos, aprende a consultar datos con LINQ y a interactuar con bases de datos usando Entity Framework.",
            resources: [
                { type: 'web', title: 'Tutorial de Entity Framework Core', url: 'https://learn.microsoft.com/en-us/ef/core/' },
                { type: 'video', title: 'Tutorial de LINQ en 15 Minutos', url: 'https://www.youtube.com/watch?v=gfkTfcpWqAY' },
                { type: 'repo', title: 'Código de Ejemplo de Entity Framework Core', url: 'https://github.com/dotnet/efcore' },
            ],
        },
        {
            title: "Nivel 3: Avanzado",
            description: "Domina conceptos avanzados como delegados, eventos y programación asíncrona con async/await para aplicaciones responsivas.",
            resources: [
                { type: 'web', title: 'Programación Asíncrona en C# (Documentación)', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios' },
                { type: 'video', title: 'Explicación de Async y Await en C#', url: 'https://www.youtube.com/watch?v=2moh18sh5p4' },
                { type: 'repo', title: 'Patrones de Código y Buenas Prácticas en .NET', url: 'https://github.com/davidfowl/DotNetCodingPatterns' },
            ],
        },
        {
            title: "Nivel 4: Experto",
            description: "Construye aplicaciones web modernas con ASP.NET Core, interfaces interactivas con Blazor y aplica patrones de diseño avanzados.",
            resources: [
                { type: 'web', title: 'Documentación de ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/' },
                { type: 'video', title: 'Curso Intensivo de Blazor', url: 'https://www.youtube.com/watch?v=lE8NdaX97m0' },
                { type: 'repo', title: 'Aplicación de Ejemplo de ASP.NET Core', url: 'https://github.com/dotnet/aspnetcore' },
            ],
        },
    ],
  },
  {
    title: "Ruta de SQL 🗄️",
    modules: [
        {
            title: "Nivel 1: Básico",
            description: "Aprende a realizar consultas con SELECT, filtrar datos con WHERE y combinar información de múltiples tablas con JOINs.",
            resources: [
                { type: 'web', title: 'W3Schools - Tutorial de SQL', url: 'https://www.w3schools.com/sql/' },
                { type: 'video', title: 'Curso de SQL para Principiantes', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' },
                { type: 'repo', title: 'SQL Formatter - Herramienta para formatear código', url: 'https://github.com/zeroturnaround/sql-formatter' },
            ],
        },
        {
            title: "Nivel 2: Intermedio",
            description: "Realiza cálculos complejos con funciones de agregación (GROUP BY), utiliza subconsultas y aprende sobre modelado de datos.",
            resources: [
                { type: 'web', title: 'SQL Tutorial - Subconsultas', url: 'https://www.sqltutorial.org/sql-subquery/' },
                { type: 'video', title: 'Curso de SQL Intermedio', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA' },
                { type: 'repo', title: 'DBeaver - Cliente SQL Universal', url: 'https://github.com/dbeaver/dbeaver' },
            ],
        },
        {
            title: "Nivel 3: Avanzado",
            description: "Domina técnicas avanzadas como las Window Functions, Common Table Expressions (CTEs) y la gestión de transacciones.",
            resources: [
                { type: 'web', title: 'Mode - Tutorial de SQL Window Functions', url: 'https://mode.com/sql-tutorial/sql-window-functions/' },
                { type: 'video', title: 'SQL Avanzado: Consultas Complejas', url: 'https://www.youtube.com/watch?v=Ww71knvhQ-s' },
                { type: 'repo', title: 'dbmate - Herramienta de Migración de Esquemas', url: 'https://github.com/amacneil/dbmate' },
            ],
        },
        {
            title: "Nivel 4: Experto",
            description: "Aprende a optimizar el rendimiento de tus consultas, el uso de índices, vistas materializadas y procedimientos almacenados.",
            resources: [
                { type: 'web', title: 'Use The Index, Luke! - Guía de Optimización de Índices', url: 'https://use-the-index-luke.com/' },
                { type: 'video', title: 'Optimización de Rendimiento en SQL', url: 'https://www.youtube.com/watch?v=429T4rEWl4M' },
                { type: 'repo', title: 'pgbench - Herramienta de Benchmark para PostgreSQL', url: 'https://github.com/pg-heroes/pgbench' },
            ],
        },
    ],
  },
  {
    title: "Ruta de TypeScript 💠",
    modules: [
        {
            title: "Nivel 1: Básico",
            description: "Añade tipado estático a tu JavaScript. Aprende sobre interfaces, tipos básicos y cómo evitar errores comunes en tiempo de desarrollo.",
            resources: [
                { type: 'web', title: 'TypeScript Handbook Oficial', url: 'https://www.typescriptlang.org/docs/handbook/2/basic-types.html' },
                { type: 'video', title: 'Curso de TypeScript para Principiantes (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=d56mG7DezGs' },
                { type: 'repo', title: 'TypeScript Book (Libro Gratuito)', url: 'https://github.com/basarat/typescript-book' },
            ],
        },
        {
            title: "Nivel 2: Intermedio",
            description: "Explora el poder de los genéricos, enums, y aprende a configurar tu proyecto con un `tsconfig.json` a medida.",
            resources: [
                { type: 'web', title: 'TypeScript - Genéricos (Documentación)', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html' },
                { type: 'video', title: 'Genéricos en TypeScript Explicados', url: 'https://www.youtube.com/watch?v=jKzB2I-p_3E' },
                { type: 'repo', title: 'React + TypeScript Cheatsheets', url: 'https://github.com/typescript-cheatsheets/react' },
            ],
        },
        {
            title: "Nivel 3: Avanzado",
            description: "Sumérgete en los tipos condicionales, mapped types, decoradores y otras características avanzadas del sistema de tipos.",
            resources: [
                { type: 'web', title: 'TypeScript - Tipos Avanzados (Documentación)', url: 'https://www.typescriptlang.org/docs/handbook/advanced-types.html' },
                { type: 'video', title: 'TypeScript Avanzado - Más Allá de lo Básico', url: 'https://www.youtube.com/watch?v=ei2_21a_eYQ' },
                { type: 'repo', title: 'Awesome TypeScript Tooling', url: 'https://github.com/dtr-e/awesome-typescript-tooling' },
            ],
        },
        {
            title: "Nivel 4: Experto",
            description: "Integra TypeScript de forma profesional en proyectos de React y Node.js, y domina los utility types más complejos.",
            resources: [
                { type: 'web', title: 'React TypeScript Cheatsheet', url: 'https://react-typescript-cheatsheet.netlify.app/' },
                { type: 'video', title: 'Construyendo una API REST con TypeScript y Node.js', url: 'https://www.youtube.com/watch?v=a4LV13P1b4g' },
                { type: 'repo', title: 'TypeScript Node Starter Kit', url: 'https://github.com/microsoft/TypeScript-Node-Starter' },
            ],
        },
    ],
  },
  {
    title: "Ruta de Go 🐹",
    modules: [
        {
            title: "Nivel 1: Básico",
            description: "Aprende la sintaxis limpia de Go, su sistema de paquetes, tipos de datos y cómo empezar a escribir programas eficientes.",
            resources: [
                { type: 'web', title: 'Un Tour por Go (Oficial)', url: 'https://go.dev/tour/welcome/1' },
                { type: 'video', title: 'Curso de Go para Principiantes (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=un6ZyFkqFKo' },
                { type: 'repo', title: 'Aprende Go - Guías y Recursos', url: 'https://github.com/golang/go/wiki/Learn' },
            ],
        },
        {
            title: "Nivel 2: Intermedio",
            description: "Descubre la concurrencia nativa de Go con Goroutines y Channels, y aprende a usar interfaces para código flexible y desacoplado.",
            resources: [
                { type: 'web', title: 'Go by Example - Goroutines', url: 'https://gobyexample.com/goroutines' },
                { type: 'video', title: 'Concurrencia en Go Explicada', url: 'https://www.youtube.com/watch?v=LvgVSSpw_4Y' },
                { type: 'repo', title: 'Learn To Code Go (Ejercicios)', url: 'https://github.com/GoesToEleven/learn-to-code-go-version-3' },
            ],
        },
        {
            title: "Nivel 3: Avanzado",
            description: "Profundiza en el paquete `context` para manejar cancelaciones, el manejo de errores idiomático y el uso de reflexión.",
            resources: [
                { type: 'web', title: 'Go Blog - El Paquete Context', url: 'https://go.dev/blog/context' },
                { type: 'video', title: 'Manejo de Errores en Go (Avanzado)', url: 'https://www.youtube.com/watch?v=A-w_h_2gQhA' },
                { type: 'repo', title: 'Ejemplos del libro "Learning Go"', url: 'https://github.com/learning-go-book/learning_go_book_examples' },
            ],
        },
        {
            title: "Nivel 4: Experto",
            description: "Construye servicios de alto rendimiento como APIs REST y gRPC. Aprende técnicas de optimización y profiling en Go.",
            resources: [
                { type: 'web', title: 'Construyendo una API RESTful con Go', url: 'https://tutorialedge.net/golang/creating-restful-api-with-golang/' },
                { type: 'video', title: 'Introducción a gRPC en Go', url: 'https://www.youtube.com/watch?v=NoKOCgS_a-w' },
                { type: 'repo', title: 'Awesome Go - Una lista curada de recursos', url: 'https://github.com/avelino/awesome-go' },
            ],
        },
    ],
  },
  {
    title: "Ruta de Rust 🦀",
    modules: [
        {
            title: "Nivel 1: Básico",
            description: "Entiende los conceptos clave de Rust: ownership, borrowing y lifetimes, que garantizan la seguridad de la memoria sin un recolector de basura.",
            resources: [
                { type: 'web', title: 'El Libro Oficial de Rust', url: 'https://doc.rust-lang.org/book/' },
                { type: 'video', title: 'Curso de Rust Crash Course (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=zF34dRivLOw' },
                { type: 'repo', title: 'Rustlings - Pequeños ejercicios para aprender Rust', url: 'https://github.com/rust-lang/rustlings' },
            ],
        },
        {
            title: "Nivel 2: Intermedio",
            description: "Aprende a usar enums y pattern matching para un control de flujo potente, traits para definir comportamiento compartido y el sistema de gestión de errores.",
            resources: [
                { type: 'web', title: 'Rust by Example - Manejo de Errores', url: 'https://doc.rust-lang.org/rust-by-example/error.html' },
                { type: 'video', title: 'Traits en Rust Explicados', url: 'https://www.youtube.com/watch?v=msv-e1bJ72M' },
                { type: 'repo', title: 'Algoritmos en Rust (TheAlgorithms)', url: 'https://github.com/TheAlgorithms/Rust' },
            ],
        },
        {
            title: "Nivel 3: Avanzado",
            description: "Explora los smart pointers para una gestión de memoria flexible, la concurrencia segura sin data races y el poder de las macros.",
            resources: [
                { type: 'web', title: 'Smart Pointers en el Libro de Rust', url: 'https://doc.rust-lang.org/book/ch15-00-smart-pointers.html' },
                { type: 'video', title: 'Concurrencia Segura en Rust', url: 'https://www.youtube.com/watch?v=MSi3-g50t-U' },
                { type: 'repo', title: 'Awesome Rust - Lista de Recursos de Rust', url: 'https://github.com/rust-unofficial/awesome-rust' },
            ],
        },
        {
            title: "Nivel 4: Experto",
            description: "Adéntrate en el código `unsafe` para interoperabilidad de bajo nivel, FFI (Foreign Function Interface) y el moderno sistema de async/await de Rust.",
            resources: [
                { type: 'web', title: 'The Rustonomicon - Para Programadores de Rust Avanzados', url: 'https://doc.rust-lang.org/nomicon/what-is-unsafe.html' },
                { type: 'video', title: 'Introducción a Async/Await en Rust', url: 'https://www.youtube.com/watch?v=9_3krA2nZ9w' },
                { type: 'repo', title: 'Ejemplo de Código `unsafe` en Rust', url: 'https://github.com/rust-lang/book/blob/main/src/ch19-01-unsafe-rust.md' },
            ],
        },
    ],
  },
];

const iotLevels: Level[] = [
    {
        title: "Nivel 0: Fundamentos de IoT",
        modules: [
            {
                title: "Introducción a IoT",
                description: "Descubre qué es el Internet de las Cosas, su historia, sus aplicaciones y por qué está transformando el mundo.",
                resources: [
                    { type: 'web', title: 'IBM - ¿Qué es el IoT?', url: 'https://www.ibm.com/es-es/topics/internet-of-things' },
                    { type: 'video', title: 'Introducción al Internet de las Cosas (IoT)', url: 'https://www.youtube.com/watch?v=h0gWfVCSGQQ' },
                    { type: 'repo', title: 'Awesome IoT - Lista de Recursos', url: 'https://github.com/HQarroum/awesome-iot' },
                ],
            },
            {
                title: "Componentes Clave",
                description: "Conoce los bloques de construcción de IoT: sensores para capturar datos, actuadores para interactuar con el entorno, y microcontroladores y gateways para procesar y comunicar.",
                resources: [
                    { type: 'web', title: 'Tipos de Sensores en IoT', url: 'https://www.libelium.com/es/blog/50-aplicaciones-del-internet-de-las-cosas/' },
                    { type: 'video', title: 'Sensores y Actuadores: ¿Qué son y cómo funcionan?', url: 'https://www.youtube.com/watch?v=1O-QGq-1P-A' },
                    { type: 'repo', title: 'Colección de drivers para sensores comunes', url: 'https://github.com/adafruit/Adafruit_Sensor_Library' },
                ],
            },
        ],
    },
    {
        title: "Nivel 1: Electrónica Básica y Simulación",
        modules: [
            {
                title: "Conceptos de Electrónica",
                description: "Aprende los fundamentos de la electrónica: voltaje, corriente, resistencia, y cómo leer esquemáticos de circuitos.",
                resources: [
                    { type: 'web', title: 'Tutorial de Electrónica Básica (SparkFun)', url: 'https://learn.sparkfun.com/tutorials/what-is-electricity' },
                    { type: 'video', title: 'Curso de Electrónica Básica', url: 'https://www.youtube.com/watch?v=DcD_v-puI1s' },
                    { type: 'repo', title: 'Proyectos de Electrónica para Principiantes', url: 'https://github.com/search?q=electronics+for+beginners' },
                ],
            },
            {
                title: "Simulación de Circuitos",
                description: "Diseña y prueba tus circuitos de forma segura en un entorno virtual antes de construirlos. Aprende a usar Tinkercad o Wokwi.",
                resources: [
                    { type: 'web', title: 'Wokwi - Simulador Online para Arduino y ESP32', url: 'https://wokwi.com/' },
                    { type: 'video', title: 'Tutorial de Tinkercad Circuits', url: 'https://www.youtube.com/watch?v=6J3aQf5_d3A' },
                    { type: 'repo', title: 'Proyectos de Simulación en Tinkercad', url: 'https://github.com/topics/tinkercad-circuits' },
                ],
            },
        ],
    },
    {
        title: "Nivel 2: Programación de Microcontroladores",
        modules: [
            {
                title: "Introducción a Arduino",
                description: "Aprende a programar la plataforma de hardware libre más popular del mundo usando C++ y el IDE de Arduino.",
                resources: [
                    { type: 'web', title: 'Documentación Oficial de Arduino', url: 'https://www.arduino.cc/reference/en/' },
                    { type: 'video', title: 'Curso de Arduino desde Cero (completo)', url: 'https://www.youtube.com/watch?v=1g-a_45s3tA' },
                    { type: 'repo', title: 'Ejemplos de código para Arduino', url: 'https://github.com/topics/arduino-sketches' },
                ],
            },
            {
                title: "ESP32 y MicroPython",
                description: "Descubre el potente ESP32 con conectividad WiFi y Bluetooth, y aprende a programarlo con MicroPython, una versión de Python para microcontroladores.",
                resources: [
                    { type: 'web', title: 'Guía de Inicio con ESP32 y MicroPython', url: 'https://randomnerdtutorials.com/getting-started-with-micropython-on-esp32-and-esp8266/' },
                    { type: 'video', title: 'Curso de MicroPython con ESP32', url: 'https://www.youtube.com/watch?v=p2K3_pA_p4E' },
                    { type: 'repo', title: 'Ejemplos de MicroPython para ESP32', url: 'https://github.com/micropython/micropython-esp32' },
                ],
            },
        ],
    },
     {
        title: "Nivel 3: Protocolos de Comunicación",
        modules: [
            {
                title: "Protocolos Inalámbricos",
                description: "Aprende sobre los protocolos de comunicación inalámbrica más comunes en IoT: Wi-Fi, Bluetooth, Zigbee y LoRaWAN.",
                resources: [
                    { type: 'web', title: 'Comparativa de Protocolos Inalámbricos IoT', url: 'https://www.postscapes.com/internet-of-things-protocols/' },
                    { type: 'video', title: '¿Qué es LoRaWAN?', url: 'https://www.youtube.com/watch?v=KPMI-r1ChpA' },
                    { type: 'repo', title: 'Ejemplos de comunicación MQTT', url: 'https://github.com/emqx/MQTT-Client-Examples' },
                ],
            },
            {
                title: "MQTT",
                description: "Domina el protocolo de mensajería ligero de publicación/suscripción, ideal para la comunicación entre dispositivos IoT.",
                resources: [
                    { type: 'web', title: 'MQTT Essentials - Guía Completa', url: 'https://www.hivemq.com/mqtt-essentials/' },
                    { type: 'video', title: 'MQTT en 5 Minutos', url: 'https://www.youtube.com/watch?v=EIxdz-2rh6o' },
                    { type: 'repo', title: 'Mosquitto - Un broker MQTT popular', url: 'https://github.com/eclipse/mosquitto' },
                ],
            },
        ],
    },
    {
        title: "Nivel 4: Plataformas y Cloud",
        modules: [
            {
                title: "Plataformas IoT",
                description: "Conecta tus dispositivos a la nube. Aprende a usar plataformas como AWS IoT, Google Cloud IoT o Thingspeak.",
                resources: [
                    { type: 'web', title: 'AWS IoT Core - Documentación', url: 'https://aws.amazon.com/iot-core/' },
                    { type: 'video', title: 'Tutorial de Thingspeak para Principiantes', url: 'https://www.youtube.com/watch?v=8-8n_r0a_2A' },
                    { type: 'repo', title: 'Ejemplos de AWS IoT', url: 'https://github.com/aws/aws-iot-device-sdk-js' },
                ],
            },
            {
                title: "APIs y Webhooks",
                description: "Aprende a integrar tus proyectos IoT con otros servicios web mediante el uso de APIs y webhooks para crear sistemas más complejos.",
                resources: [
                    { type: 'web', title: '¿Qué es una API? (freeCodeCamp)', url: 'https://www.freecodecamp.org/espanol/news/que-es-una-api-en-espanol-una-explicacion-para-principiantes/' },
                    { type: 'video', title: 'APIs para Principiantes', url: 'https://www.youtube.com/watch?v=GZvSYJDk-us' },
                    { type: 'repo', title: 'Public-APIs: una lista de APIs gratuitas', url: 'https://github.com/public-apis/public-apis' },
                ],
            },
        ],
    },
    {
        title: "Nivel 5: Seguridad en IoT",
        modules: [
            {
                title: "Principios de Seguridad",
                description: "Asegura tus dispositivos y comunicaciones. Aprende sobre encriptación, autenticación y buenas prácticas de seguridad en IoT.",
                resources: [
                    { type: 'web', title: 'OWASP IoT Project', url: 'https://owasp.org/www-project-internet-of-things/' },
                    { type: 'video', title: 'Seguridad en el Internet de las Cosas', url: 'https://www.youtube.com/watch?v=7G1i-2L_2A' },
                    { type: 'repo', title: 'Awesome IoT Hacking', url: 'https://github.com/V33RU/IoTSecurity101' },
                ],
            },
        ],
    },
    {
        title: "Nivel 6: IoT y IA",
        modules: [
            {
                title: "Edge Computing",
                description: "Procesa datos directamente en tus dispositivos IoT (Edge) para reducir la latencia y el consumo de ancho de banda. Aprende sobre TensorFlow Lite.",
                resources: [
                    { type: 'web', title: 'TensorFlow Lite para Microcontroladores', url: 'https://www.tensorflow.org/lite/microcontrollers' },
                    { type: 'video', title: 'Introducción a Edge AI', url: 'https://www.youtube.com/watch?v=cMfe-J_GvFk' },
                    { type: 'repo', title: 'Ejemplos de TensorFlow Lite', url: 'https://github.com/tensorflow/tflite-micro/tree/main/tensorflow/lite/micro/examples' },
                ],
            },
        ],
    }
];

const roboticsLevels: Level[] = [
    {
        title: "Nivel 0: Fundamentos de Robótica",
        modules: [
            {
                title: "¿Qué es un Robot?",
                description: "Explora la definición de un robot, los diferentes tipos que existen (industriales, móviles, humanoides) y su fascinante historia.",
                resources: [
                    { type: 'web', title: 'Tutorialspoint - Fundamentos de Robótica', url: 'https://www.tutorialspoint.com/robotics/index.htm' },
                    { type: 'video', title: 'Curso de Robótica Básica para Principiantes', url: 'https://www.youtube.com/watch?v=0ZzKLU8vX1Y' },
                    { type: 'repo', title: 'Awesome Robotics - Lista de Recursos', url: 'https://github.com/jslee02/awesome-robotics' },
                ],
            },
        ],
    },
    {
        title: "Nivel 1: Mecánica y Diseño",
        modules: [
            {
                title: "Diseño Asistido por Computadora (CAD)",
                description: "Aprende a diseñar tus propias piezas y ensamblajes de robot en 3D utilizando software como FreeCAD o Fusion 360.",
                resources: [
                    { type: 'web', title: 'Tutoriales Oficiales de FreeCAD', url: 'https://www.freecadweb.org/wiki/Tutorials' },
                    { type: 'video', title: 'Curso de Fusion 360 para principiantes', url: 'https://www.youtube.com/watch?v=A5bc9c3S12g' },
                    { type: 'repo', title: 'Colección de Modelos CAD para Robótica', url: 'https://github.com/topics/cad-models' },
                ],
            },
            {
                title: "Impresión 3D",
                description: "Convierte tus diseños digitales en objetos físicos. Aprende los fundamentos de la impresión 3D, desde el laminado hasta la calibración.",
                resources: [
                    { type: 'web', title: 'Guía Completa de Impresión 3D (All3DP)', url: 'https://all3dp.com/es/1/guia-impresion-3d-aspectos-basicos/' },
                    { type: 'video', title: 'Cómo empezar con la Impresión 3D', url: 'https://www.youtube.com/watch?v=T-Z3GmM20JM' },
                    { type: 'repo', title: 'Thingiverse - Modelos para Imprimir', url: 'https://www.thingiverse.com/' },
                ],
            },
        ],
    },
    {
        title: "Nivel 2: Electrónica y Controladores",
        modules: [
             {
                title: "Controladores de Motores",
                description: "Aprende a controlar la velocidad y dirección de motores DC y paso a paso utilizando puentes H (como el L298N) y otros drivers.",
                resources: [
                    { type: 'web', title: '¿Cómo funciona un Puente H? (Lastminuteengineers)', url: 'https://lastminuteengineers.com/l298n-dc-stepper-driver-arduino-tutorial/' },
                    { type: 'video', title: 'Control de Motores con Arduino y L298N', url: 'https://www.youtube.com/watch?v=J_Q_1_j9-eE' },
                    { type: 'repo', title: 'Librería de Arduino para el driver L298N', url: 'https://github.com/AndreaLombardo/L298N' },
                ],
            },
            {
                title: "Sensores para Robótica",
                description: "Dota a tu robot de sentidos. Aprende a usar sensores de distancia (ultrasonidos, infrarrojos), de línea y encoders para la navegación y control.",
                resources: [
                    { type: 'web', title: 'Tutorial de Sensores para Arduino', url: 'https://randomnerdtutorials.com/arduino-sensors-and-modules/' },
                    { type: 'video', title: 'Cómo usar un Sensor de Ultrasonidos HC-SR04', url: 'https://www.youtube.com/watch?v=ZejQOX69K5M' },
                    { type: 'repo', title: 'Colección de Librerías de Sensores para Arduino', url: 'https://github.com/adafruit/Adafruit_Sensor_Library' },
                ],
            },
        ]
    },
    {
        title: "Nivel 3: Programación de Robots",
        modules: [
            {
                title: "Robot Operating System (ROS)",
                description: "Iníciate en ROS, el framework estándar para el desarrollo de software robótico. Aprende sobre nodos, tópicos y servicios.",
                resources: [
                    { type: 'web', title: 'Documentación Oficial de ROS', url: 'http://wiki.ros.org/' },
                    { type: 'video', title: 'Tutorial de ROS para Principiantes', url: 'https://www.youtube.com/watch?v=0h3y4-kE_wU' },
                    { type: 'repo', title: 'Tutoriales Oficiales de ROS', url: 'https://github.com/ros/ros_tutorials' },
                ],
            },
        ],
    },
    {
        title: "Nivel 4: Cinemática y Dinámica",
        modules: [
            {
                title: "Cinemática de Robots",
                description: "Estudia el movimiento de los robots sin considerar las fuerzas que lo causan. Aprende sobre cinemática directa e inversa.",
                resources: [
                    { type: 'web', title: 'Introducción a la Cinemática de Robots', url: 'https://www.cs.cmu.edu/~15464-s13/lectures/lecture6/IK.pdf' },
                    { type: 'video', title: 'Cinemática Inversa (3Blue1Brown)', url: 'https://www.youtube.com/watch?v=D-S144mJSGk' },
                    { type: 'repo', title: 'Robotics Toolbox para Python', url: 'https://github.com/petercorke/robotics-toolbox-python' },
                ],
            },
        ],
    },
    {
        title: "Nivel 5: Planificación de Movimiento y Control",
        modules: [
            {
                title: "Algoritmos de Planificación",
                description: "Aprende algoritmos como A* y RRT para que tu robot pueda navegar de forma autónoma, evitando obstáculos.",
                resources: [
                    { type: 'web', title: 'Teoría de Planificación de Movimiento', url: 'http://ai.stanford.edu/blog/motion-planning/' },
                    { type: 'video', title: 'Algoritmo A* Explicado Visualmente', url: 'https://www.youtube.com/watch?v=aKyAE22Qia4' },
                    { type: 'repo', title: 'Implementación de Algoritmos de Planificación', url: 'https://github.com/AtsushiSakai/PythonRobotics' },
                ],
            },
            {
                title: "Control PID",
                description: "Implementa controladores PID para que tu robot pueda seguir trayectorias y mantener la estabilidad de forma precisa.",
                resources: [
                    { type: 'web', title: 'Entendiendo el Control PID', url: 'https://www.ni.com/es-es/innovations/white-papers/06/pid-theory-explained.html' },
                    { type: 'video', title: 'Tuning de un Controlador PID (Vídeo)', url: 'https://www.youtube.com/watch?v=uXnDwojRb1g' },
                    { type: 'repo', title: 'Librería PID para Arduino', url: 'https://github.com/br3ttb/Arduino-PID-Library' },
                ],
            },
        ],
    },
    {
        title: "Nivel 6: Robótica Avanzada y Colaborativa",
        modules: [
            {
                title: "SLAM (Simultaneous Localization and Mapping)",
                description: "Aprende cómo los robots construyen mapas de entornos desconocidos mientras simultáneamente determinan su propia ubicación.",
                resources: [
                    { type: 'web', title: 'OpenSLAM - Repositorio de Algoritmos', url: 'https://openslam-org.github.io/' },
                    { type: 'video', title: '¿Cómo funciona SLAM?', url: 'https://www.youtube.com/watch?v=U6vr3i_T_6M' },
                    { type: 'repo', title: 'ORB-SLAM3 (Uno de los algoritmos más avanzados)', url: 'https://github.com/UZ-SLAMLab/ORB_SLAM3' },
                ],
            },
        ],
    },
];

const aiLevels: Level[] = [
    {
        title: "Nivel 0-1: Fundamentos de IA",
        modules: [
            {
                title: "Conceptos Clave de IA",
                description: "Define qué es la Inteligencia Artificial, su historia, los diferentes tipos que existen (débil vs. fuerte) y sus implicaciones éticas.",
                resources: [
                    { type: 'web', title: 'IBM - ¿Qué es la IA?', url: 'https://www.ibm.com/es-es/topics/artificial-intelligence' },
                    { type: 'video', title: 'Curso de Inteligencia Artificial (DotCSV)', url: 'https://www.youtube.com/watch?v=z-EtmaFJieY' },
                    { type: 'repo', title: 'Awesome-AI - Lista de Recursos de IA', url: 'https://github.com/owainlewis/awesome-artificial-intelligence' },
                ],
            },
            {
                title: "Matemáticas para IA",
                description: "Refresca tus conocimientos de Álgebra Lineal, Cálculo, Probabilidad y Estadística, los pilares matemáticos del Machine Learning.",
                resources: [
                    { type: 'web', title: 'Matemáticas para Machine Learning (Libro)', url: 'https://mml-book.github.io/' },
                    { type: 'video', title: 'Esencia del Álgebra Lineal (3Blue1Brown)', url: 'https://www.youtube.com/playlist?list=PL_Z-20t-k-aNl5T864M_n9-d4CTnl4Q_x' },
                    { type: 'repo', title: 'Hojas de Referencia de Matemáticas para IA', url: 'https://github.com/dformoso/machine-learning-mindmap' },
                ],
            },
        ],
    },
    {
        title: "Nivel 2: Aprendizaje Automático (ML)",
        modules: [
            {
                title: "Aprendizaje Supervisado",
                description: "Aprende a entrenar modelos con datos etiquetados. Explora algoritmos de regresión (lineal, logística) y clasificación (SVM, k-NN, Árboles de Decisión).",
                resources: [
                    { type: 'web', title: 'Scikit-learn - Documentación de Aprendizaje Supervisado', url: 'https://scikit-learn.org/stable/supervised_learning.html' },
                    { type: 'video', title: 'Curso de Machine Learning de Google', url: 'https://www.youtube.com/watch?v=cKxRvEZd3Mw' },
                    { type: 'repo', title: '100 Días de Código de Machine Learning', url: 'https://github.com/aviskase/100-Days-Of-ML-Code' },
                ],
            },
            {
                title: "Aprendizaje No Supervisado",
                description: "Encuentra patrones en datos no etiquetados. Aprende sobre clustering (K-Means), reducción de dimensionalidad (PCA) y detección de anomalías.",
                resources: [
                    { type: 'web', title: 'Scikit-learn - Clustering', url: 'https://scikit-learn.org/stable/modules/clustering.html' },
                    { type: 'video', title: 'K-Means Explicado', url: 'https://www.youtube.com/watch?v=4b5d3muwGtl' },
                    { type: 'repo', title: 'Ejemplos de ML No Supervisado', url: 'https://github.com/practical-machine-learning-with-python/notebooks' },
                ],
            },
        ],
    },
    {
        title: "Nivel 3: Deep Learning",
        modules: [
            {
                title: "Redes Neuronales",
                description: "Comprende la arquitectura de las redes neuronales: neuronas, capas, funciones de activación y el algoritmo de backpropagation.",
                resources: [
                    { type: 'web', title: 'Deep Learning Book (Capítulo sobre Redes Neuronales)', url: 'https://www.deeplearningbook.org/contents/mlp.html' },
                    { type: 'video', title: '¿Qué es una Red Neuronal? (3Blue1Brown)', url: 'https://www.youtube.com/watch?v=aircAruvnKk' },
                    { type: 'repo', title: 'Construye una Red Neuronal desde Cero en Python', url: 'https://github.com/adityajn105/Build-A-Neural-Network-From-Scratch' },
                ],
            },
            {
                title: "Redes Neuronales Convolucionales (CNN)",
                description: "Especialízate en el procesamiento de imágenes. Aprende sobre convoluciones, pooling y arquitecturas como LeNet, AlexNet y VGG.",
                resources: [
                    { type: 'web', title: 'CS231n - Notas del curso de Stanford sobre CNNs', url: 'https://cs231n.github.io/' },
                    { type: 'video', title: 'Redes Convolucionales (DotCSV)', url: 'https://www.youtube.com/watch?v=FmpDIaiMIeA' },
                    { type: 'repo', title: 'Implementaciones de CNN en Keras', url: 'https://github.com/keras-team/keras-io/tree/master/examples/vision' },
                ],
            },
            {
                title: "Redes Neuronales Recurrentes (RNN)",
                description: "Trabaja con datos secuenciales como texto o series temporales. Aprende sobre RNNs, LSTMs y GRUs.",
                resources: [
                    { type: 'web', title: 'Colah\'s Blog - Entendiendo las LSTMs', url: 'https://colah.github.io/posts/2015-08-Understanding-LSTMs/' },
                    { type: 'video', title: 'Redes Neuronales Recurrentes (RNN) y LSTMs', url: 'https://www.youtube.com/watch?v=UNmqTi0_F0I' },
                    { type: 'repo', title: 'Ejemplos de RNN en PyTorch', url: 'https://github.com/pytorch/examples/tree/main/word_language_model' },
                ],
            },
        ],
    },
    {
        title: "Nivel 4: IA Aplicada",
        modules: [
            {
                title: "Procesamiento del Lenguaje Natural (NLP)",
                description: "Enseña a las máquinas a entender y generar lenguaje humano. Explora técnicas como word embeddings, análisis de sentimiento y transformers (BERT, GPT).",
                resources: [
                    { type: 'web', title: 'Hugging Face - Plataforma para NLP', url: 'https://huggingface.co/docs' },
                    { type: 'video', title: 'Curso de NLP de Stanford', url: 'https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fVwBBY42z' },
                    { type: 'repo', title: 'Awesome NLP - Recursos de NLP', url: 'https://github.com/keon/awesome-nlp' },
                ],
            },
            {
                title: "Visión por Computadora",
                description: "Permite que las máquinas 'vean'. Aprende sobre detección de objetos, segmentación de imágenes y reconocimiento facial.",
                resources: [
                    { type: 'web', title: 'OpenCV - Librería de Visión por Computadora', url: 'https://docs.opencv.org/4.x/' },
                    { type: 'video', title: 'Curso de Visión por Computadora (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=01sAkU_3-ms' },
                    { type: 'repo', title: 'Awesome Computer Vision', url: 'https://github.com/jbhuang0604/awesome-computer-vision' },
                ],
            },
            {
                title: "Agentes Inteligentes y Reinforcement Learning",
                description: "Crea agentes que aprenden a tomar decisiones a través de la prueba y error para maximizar una recompensa. Conoce Q-Learning y Deep Q-Networks.",
                resources: [
                    { type: 'web', title: 'Sutton & Barto - Reinforcement Learning: An Introduction', url: 'http://incompleteideas.net/book/the-book-2nd.html' },
                    { type: 'video', title: 'Introducción al Aprendizaje por Refuerzo (David Silver)', url: 'https://www.youtube.com/watch?v=2pWv7GOvuf0' },
                    { type: 'repo', title: 'Stable Baselines3 - Algoritmos de RL', url: 'https://github.com/DLR-RM/stable-baselines3' },
                ],
            },
        ],
    },
    {
        title: "Nivel 5: IA Avanzada y MLOps",
        modules: [
            {
                title: "Modelos Generativos (GANs, VAEs)",
                description: "Explora modelos capaces de generar nuevo contenido, como imágenes, texto o música. Aprende sobre Redes Generativas Antagónicas y Autoencoders Variacionales.",
                resources: [
                    { type: 'web', title: 'Blog de OpenAI sobre GANs', url: 'https://openai.com/blog/generative-models/' },
                    { type: 'video', title: '¿Qué son las GANs? (DotCSV)', url: 'https://www.youtube.com/watch?v=A_P9-E_6k-A' },
                    { type: 'repo', title: 'PyTorch-GAN - Implementaciones de GANs', url: 'https://github.com/eriklindernoren/PyTorch-GAN' },
                ],
            },
            {
                title: "MLOps: Machine Learning en Producción",
                description: "Aprende a desplegar, monitorear y mantener modelos de Machine Learning en entornos de producción de manera eficiente y escalable.",
                resources: [
                    { type: 'web', title: 'Google Cloud - AI & Machine Learning', url: 'https://cloud.google.com/ai/platform/docs' },
                    { type: 'video', title: 'Introducción a MLOps', url: 'https://www.youtube.com/watch?v=06-AZXmwHjo' },
                    { type: 'repo', title: 'Awesome MLOps', url: 'https://github.com/visenger/awesome-mlops' },
                ],
            },
        ],
    },
];


const learningData: Record<string, LearningPath> = {
  programacion: {
    title: "Programación",
    description: "Desde los fundamentos hasta convertirte en un experto desarrollador, domina los lenguajes que mueven el mundo digital.",
    levels: programmingLevels,
  },
  iot: {
    title: "IoT (Internet de las Cosas)",
    description: "Conectando el mundo físico al digital. Aprende a construir dispositivos inteligentes y sistemas conectados.",
    levels: iotLevels,
  },
  robotica: {
    title: "Robótica",
    description: "Diseña, construye y programa tus propios robots, desde la mecánica básica hasta la navegación autónoma.",
    levels: roboticsLevels,
  },
  ia: {
    title: "Inteligencia Artificial",
    description: "Explora el fascinante mundo de la IA. Domina los conceptos y aplicaciones desde el Machine Learning hasta el Deep Learning.",
    levels: aiLevels,
  },
};

export function getLearningData(area: string): LearningPath | undefined {
  return learningData[area];
}