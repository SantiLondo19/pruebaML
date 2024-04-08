import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { logo_meli, search_icon } from "../assets";
import { useGetItems } from "../hooks/useGetItems";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Estado local para almacenar el término de búsqueda
  const { mutate } = useGetItems(searchQuery); // Llamar a la mutación de búsqueda de items
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
    navigate(`/items?search=${searchQuery}`); // Navegar a la página de resultados de búsqueda
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Actualizar el término de búsqueda en el estado local
  };

  return (
    <div className='h-16 bg-yellowML px-[18px] flex'>
      <form
        action='/items'
        className=' items-center max-w-screen-lg flex mx-auto flex-1'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-1 gap-4  items-center'>
          <Link to={"/"}>
            <img src={logo_meli} alt='logo_meli' />
          </Link>
          <input
            placeholder='Nunca dejes de buscar'
            type='text'
            name='search'
            className='p-2 h-9 flex-1 text-[18px]'
            onChange={handleChange}
            value={searchQuery}
          />
        </div>
        <button
          className='bg-gray-300  py-[0.6rem] px-3  text-slate-700'
          type='submit'
        >
          <img src={search_icon} alt='search_icon' className='h-auto' />
        </button>
      </form>
    </div>
  );
};
