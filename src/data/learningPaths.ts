export interface Module {
  title: string;
  description: string;
  externalLink?: string;
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
      { title: "Lógica de Programación", description: "Algoritmos, pseudocódigo y diagramas de flujo." },
      { title: "Fundamentos de Git y GitHub", description: "Control de versiones para tus proyectos." },
      { title: "Introducción a la Terminal", description: "Manejo básico de la línea de comandos." },
    ],
  },
  {
    title: "Ruta de Python 🐍",
    modules: [
      { title: "Nivel 1: Básico", description: "Sintaxis, tipos de datos, estructuras de control." },
      { title: "Nivel 2: Intermedio", description: "Funciones, módulos, POO básica." },
      { title: "Nivel 3: Avanzado", description: "Decoradores, generadores, concurrencia." },
      { title: "Nivel 4: Experto", description: "Metaprogramación, optimización y frameworks (Django, Flask)." },
    ],
  },
  {
    title: "Ruta de JavaScript ⚡",
    modules: [
      { title: "Nivel 1: Básico", description: "DOM, eventos, variables, condicionales." },
      { title: "Nivel 2: Intermedio", description: "ES6+, asincronía (promesas, async/await)." },
      { title: "Nivel 3: Avanzado", description: "Prototipos, event loop, Web APIs." },
      { title: "Nivel 4: Experto", description: "Frameworks (React, Vue, Angular), Node.js." },
    ],
  },
  {
    title: "Ruta de Java ☕",
    modules: [
        { title: "Nivel 1: Básico", description: "Sintaxis, JVM, tipos de datos, control de flujo." },
        { title: "Nivel 2: Intermedio", description: "POO a fondo, colecciones, excepciones." },
        { title: "Nivel 3: Avanzado", description: "Concurrencia, genéricos, streams API." },
        { title: "Nivel 4: Experto", description: "Spring Framework, Maven/Gradle, microservicios." },
    ],
  },
  {
    title: "Ruta de C / C++",
    modules: [
        { title: "Nivel 1: Básico", description: "Punteros, manejo de memoria, compilación." },
        { title: "Nivel 2: Intermedio", description: "Estructuras de datos, POO en C++." },
        { title: "Nivel 3: Avanzado", description: "Templates, STL, concurrencia básica." },
        { title: "Nivel 4: Experto", description: "Programación de sistemas, optimización, C++ moderno." },
    ],
  },
  {
    title: "Ruta de C# 💻",
    modules: [
        { title: "Nivel 1: Básico", description: "Sintaxis, .NET Framework, tipos de datos." },
        { title: "Nivel 2: Intermedio", description: "POO, LINQ, Entity Framework." },
        { title: "Nivel 3: Avanzado", description: "Delegados, eventos, asincronía (async/await)." },
        { title: "Nivel 4: Experto", description: "ASP.NET Core, Blazor, patrones de diseño." },
    ],
  },
  {
    title: "Ruta de SQL 🗄️",
    modules: [
        { title: "Nivel 1: Básico", description: "Consultas (SELECT), filtros (WHERE), uniones (JOIN)." },
        { title: "Nivel 2: Intermedio", description: "Agregaciones (GROUP BY), subconsultas, modelado." },
        { title: "Nivel 3: Avanzado", description: "Window functions, CTEs, transacciones." },
        { title: "Nivel 4: Experto", description: "Optimización de consultas, índices, procedures." },
    ],
  },
  {
    title: "Ruta de TypeScript 💠",
    modules: [
        { title: "Nivel 1: Básico", description: "Tipado estático, interfaces, tipos básicos." },
        { title: "Nivel 2: Intermedio", description: "Genéricos, enums, configuración de tsconfig." },
        { title: "Nivel 3: Avanzado", description: "Tipos condicionales, mapped types, decoradores." },
        { title: "Nivel 4: Experto", description: "Integración con React/Node, utility types avanzados." },
    ],
  },
  {
    title: "Ruta de Go 🐹",
    modules: [
        { title: "Nivel 1: Básico", description: "Sintaxis, paquetes, tipos de datos." },
        { title: "Nivel 2: Intermedio", description: "Goroutines, channels, interfaces." },
        { title: "Nivel 3: Avanzado", description: "Context, manejo de errores avanzado, reflexión." },
        { title: "Nivel 4: Experto", description: "Creación de APIs REST, gRPC, optimización." },
    ],
  },
  {
    title: "Ruta de Rust 🦀",
    modules: [
        { title: "Nivel 1: Básico", description: "Ownership, borrowing, lifetimes, structs." },
        { title: "Nivel 2: Intermedio", description: "Enums, pattern matching, traits, gestión de errores." },
        { title: "Nivel 3: Avanzado", description: "Smart pointers, concurrencia segura, macros." },
        { title: "Nivel 4: Experto", description: "Código inseguro (unsafe), FFI, async/await en Rust." },
    ],
  },
];

const iotLevels: Level[] = [
    {
        title: "Nivel 0: Fundamentos de IoT",
        modules: [
            { title: "Introducción a IoT", description: "Conceptos, historia y aplicaciones." },
            { title: "Componentes Clave", description: "Sensores, actuadores, microcontroladores y gateways." },
            { title: "Protocolos de Comunicación", description: "WiFi, Bluetooth, Zigbee, LoRaWAN, MQTT." },
        ],
    },
    {
        title: "Nivel 1: Electrónica Básica",
        modules: [
            { title: "Conceptos de Electricidad", description: "Voltaje, corriente, resistencia (Ley de Ohm)." },
            { title: "Circuitos Básicos", description: "Protoboards, LEDs, resistencias y pulsadores." },
            { title: "Simulación de Circuitos", description: "Uso de Tinkercad o Wokwi.", externalLink: "https://www.tinkercad.com/" },
        ],
    },
    {
        title: "Nivel 2: Programación de Microcontroladores",
        modules: [
            { title: "Introducción a Arduino", description: "Programación en C++ con el IDE de Arduino." },
            { title: "ESP32 y MicroPython", description: "Conectividad WiFi/Bluetooth y programación en Python." },
            { title: "Manejo de Sensores", description: "Lectura de datos de sensores de temperatura, humedad, etc." },
        ],
    },
    {
        title: "Nivel 3: Conectividad y Plataformas Cloud",
        modules: [
            { title: "Envío de Datos a la Nube", description: "Uso de MQTT para comunicar dispositivos con un broker." },
            { title: "Plataformas IoT", description: "Introducción a AWS IoT, Google Cloud IoT o ThingsBoard." },
            { title: "Creación de Dashboards", description: "Visualización de datos de sensores en tiempo real." },
        ],
    },
    {
        title: "Nivel 4: Proyectos Prácticos",
        modules: [
            { title: "Estación Meteorológica", description: "Construye un dispositivo que mida y envíe datos del clima." },
            { title: "Domótica Básica", description: "Controla luces o enchufes desde una app o dashboard." },
            { title: "Sistema de Riego Inteligente", description: "Automatiza el riego de plantas según la humedad del suelo." },
        ],
    },
    {
        title: "Nivel 5: Seguridad en IoT",
        modules: [
            { title: "Vulnerabilidades Comunes", description: "Riesgos en dispositivos, redes y aplicaciones." },
            { title: "Buenas Prácticas", description: "Encriptación de datos, autenticación y actualizaciones seguras." },
        ],
    },
    {
        title: "Nivel 6: Integración con IA y Edge Computing",
        modules: [
            { title: "TinyML", description: "Ejecución de modelos de Machine Learning en microcontroladores." },
            { title: "Edge Computing", description: "Procesamiento de datos en el dispositivo para reducir latencia." },
        ],
    },
];

const roboticsLevels: Level[] = [
    {
        title: "Nivel 0: Fundamentos de Robótica",
        modules: [
            { title: "¿Qué es un Robot?", description: "Definición, tipos (industriales, móviles, etc.) e historia." },
            { title: "Componentes de un Robot", description: "Estructura, actuadores (motores), sensores y controladores." },
            { title: "Matemáticas para Robótica", description: "Álgebra lineal, geometría y trigonometría básica." },
        ],
    },
    {
        title: "Nivel 1: Mecánica y Diseño",
        modules: [
            { title: "Diseño Asistido por Computadora (CAD)", description: "Introducción a FreeCAD o Fusion 360." },
            { title: "Impresión 3D", description: "Diseño y fabricación de piezas para robots." },
            { title: "Ensamblaje Mecánico", description: "Uso de tornillería, engranajes y chasis." },
        ],
    },
    {
        title: "Nivel 2: Electrónica y Controladores",
        modules: [
            { title: "Controladores de Motores", description: "Puentes H (L298N) y drivers para motores paso a paso." },
            { title: "Sensores para Robótica", description: "Ultrasónicos, infrarrojos (seguidores de línea), IMU." },
            { title: "Alimentación", description: "Uso de baterías, reguladores de voltaje y cableado." },
        ],
    },
    {
        title: "Nivel 3: Programación de Robots",
        modules: [
            { title: "Programación con Arduino/C++", description: "Control de actuadores y lectura de sensores." },
            { title: "Introducción a ROS (Robot Operating System)", description: "Nodos, tópicos y mensajes para sistemas robóticos." },
            { title: "Control de Movimiento", description: "Algoritmos para mover un robot (ej. control PID)." },
        ],
    },
    {
        title: "Nivel 4: Cinemática y Planificación",
        modules: [
            { title: "Cinemática Directa e Inversa", description: "Cálculo de la posición de un brazo robótico." },
            { title: "Planificación de Trayectorias", description: "Algoritmos para evitar obstáculos (ej. A*)." },
            { title: "Localización y Mapeo (SLAM)", description: "Construcción de mapas y auto-localización del robot." },
        ],
    },
    {
        title: "Nivel 5: Visión por Computadora",
        modules: [
            { title: "Procesamiento de Imágenes", description: "Uso de OpenCV para detectar formas, colores y objetos." },
            { title: "Integración de Cámaras", description: "Uso de cámaras USB o de Raspberry Pi con ROS." },
        ],
    },
    {
        title: "Nivel 6: Robótica Avanzada y Colaborativa",
        modules: [
            { title: "Robots Colaborativos (Cobots)", description: "Seguridad y programación de robots que trabajan con humanos." },
            { title: "Aprendizaje por Refuerzo", description: "Entrenamiento de robots para aprender tareas complejas." },
        ],
    },
];

const aiLevels: Level[] = [
    {
        title: "Nivel 0-1: Fundamentos de IA",
        modules: [
            { title: "Conceptos Clave de IA", description: "Definición, historia, tipos de IA (débil vs. fuerte)." },
            { title: "Agentes Inteligentes", description: "Concepto de agentes, entornos, sensores y actuadores." },
            { title: "Ética en la IA", description: "Sesgos, privacidad y responsabilidad en sistemas de IA." },
        ],
    },
    {
        title: "Nivel 2: Aprendizaje Automático (Machine Learning)",
        modules: [
            { title: "Aprendizaje Supervisado", description: "Regresión (lineal, logística) y clasificación (SVM, k-NN)." },
            { title: "Aprendizaje No Supervisado", description: "Clustering (k-means) y reducción de dimensionalidad (PCA)." },
            { title: "Bibliotecas Clave", description: "Introducción a Scikit-learn, Pandas y NumPy en Python." },
        ],
    },
    {
        title: "Nivel 3: Deep Learning",
        modules: [
            { title: "Redes Neuronales", description: "Perceptrón, backpropagation y funciones de activación." },
            { title: "Redes Neuronales Convolucionales (CNN)", description: "Aplicaciones en visión por computadora." },
            { title: "Redes Neuronales Recurrentes (RNN)", description: "Aplicaciones en procesamiento de lenguaje natural (NLP)." },
            { title: "Frameworks de Deep Learning", description: "Introducción a TensorFlow o PyTorch." },
        ],
    },
    {
        title: "Nivel 4: IA Aplicada",
        modules: [
            { title: "Procesamiento de Lenguaje Natural (NLP)", description: "Análisis de sentimientos, chatbots, traducción." },
            { title: "Visión por Computadora", description: "Detección de objetos, segmentación de imágenes." },
            { title: "Sistemas de Recomendación", description: "Filtrado colaborativo y basado en contenido." },
        ],
    },
    {
        title: "Nivel 5: IA Avanzada y MLOps",
        modules: [
            { title: "Aprendizaje por Refuerzo (Reinforcement Learning)", description: "Conceptos, algoritmos (Q-learning) y aplicaciones." },
            { title: "Redes Generativas Antagónicas (GANs)", description: "Generación de imágenes y datos sintéticos." },
            { title: "MLOps", description: "Despliegue de modelos, monitoreo y automatización del ciclo de vida de ML." },
        ],
    },
];

const learningData: Record<string, LearningPath> = {
  programacion: {
    title: "Programación",
    description: "Desde los fundamentos hasta convertirte en un experto desarrollador.",
    levels: programmingLevels,
  },
  iot: {
    title: "IoT",
    description: "Conectando el mundo físico al digital, desde cero hasta la integración con IA.",
    levels: iotLevels,
  },
  robotica: {
    title: "Robótica",
    description: "Diseña, construye y programa tus propios robots, desde la mecánica hasta la IA.",
    levels: roboticsLevels,
  },
  ia: {
    title: "Inteligencia Artificial",
    description: "Domina los conceptos y aplicaciones de la IA, desde el Machine Learning hasta el MLOps.",
    levels: aiLevels,
  },
};

export function getLearningData(area: string): LearningPath | undefined {
  return learningData[area];
}