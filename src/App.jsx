import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/userProgressContext";


function App() {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header />
                <Meals />
            </CartContextProvider>
        </UserProgressContextProvider>
    );
}

export default App;
