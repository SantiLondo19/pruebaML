import { Header } from "./components/Header";
import { ItemList } from "./components/itemList/ItemList";
import { BreadCrumb } from "./components/breadCrumb/BreadCrumb";
import { ItemDetail } from "./components/itemDetail/ItemDetail";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <main className='bg-whiteGrayML'>
      <Header />
      <div className='grid grid-cols-12 grid-rows-11 min-h-screen max-w-screen-lg w-[95%] mx-auto gap-x-4 gap-y-4'>
        <BreadCrumb />
        <Routes >
          <Route path='/' element={<ItemList />} />
          {/* Cualquier otra ruta mandarla al home */}
          <Route path='*' element={<ItemList />} />
          <Route path='/items' element={<ItemList />} />
          <Route path='/item/:id' element={<ItemDetail />} />
        </Routes>
      </div>
    </main>
  );
};
