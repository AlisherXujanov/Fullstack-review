import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Searchbox from "./components/Searchbox";

const NAMES = ["Sardor", "John", "Jane", "Jim", "Jill",
  "Jamshed", "Amal", "Shoxa", "Istam", "Komil"]
const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry",
  "Fig", "Grape", "Honeydew", "Kiwi", "Lemon"]
const BRANDS = ["Apple", "Samsung", "Google", "Microsoft", "Amazon", "Tesla",
  "Nvidia", "AMD", "Intel", "Sony", "LG", "Panasonic", "Sony", "LG", "Panasonic",
]

export default function Home() {
  return (
    <div className={'lending-page-wrapper'}>
      <Heading>Home page</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos sunt tempora fugit vero numquam minus voluptatum molestias. Debitis quo eligendi enim illo, nesciunt nobis porro esse laudantium et officia!

        <br />
        <br />
        <Searchbox />
      </Paragraph>
    </div>
  );
}

// There are 2 types of components:
// 1. Server components
// 2. Client components (allow us use Hooks)

// In very easy words:
// Server components are our components that designed just to show any data on browser
// RU: Серверные компоненты предназначены для отображения данных на браузере
// UZ: Server komponentalar brauzerda ma'lumotlarni ko'rsatish uchun mo'ljallangan
// ----------------------------------------------------------
// EN: Client components are designed to work with the browser
// RU: Клиентские компоненты предназначены для работы с браузером
// UZ: Browserda ishlaydigan komponentalar
// ----------------------------------------------------------
