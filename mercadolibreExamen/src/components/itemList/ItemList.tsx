import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { free_shipping } from "../../assets";
import { useSetItems } from "../../store/itemsStore/useSetItems";
import {
  useGetItemDescription,
  useGetItemDetails,
} from "../../hooks/useGetItemDetails";
import { useSetItemId } from "../../store/itemsStore/useSetItemId";
import { Loading } from "../Loading/Loading";

export const ItemList = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { results } = useSetItems((state) => state.results);
  const { mutate: mutateItemDetails } = useGetItemDetails();
  const { mutate } = useGetItemDescription();
  const setId = useSetItemId((state) => state.setItemId);
  useEffect(() => {
    // Detectar si estamos en un dispositivo móvil
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px es un punto de corte común para dispositivos móviles
    };

    handleResize(); // Inicializar el estado basado en el tamaño inicial de la ventana
    window.addEventListener("resize", handleResize); // Agregar oyente para cambios de tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar oyente al desmontar el componente
    };
  }, []);
  const handleItemClick = (id: string) => {
    setId(id);
    mutateItemDetails(id);
    mutate(id);
  };
  return (
    <section
      className={`bg-white ${
        results === undefined && "row-start-2 row-span-2"
      } col-start-1 col-span-12 row-start-1 mt-14 row-span-10 w-full p-4`}
    >
      <article className='grid'>
        {results === undefined ? (
          <p className='text-center'>Encuentra el producto que deseas</p>
        ) : results.length === 0 ? (
          <Loading />
        ) : (
          results &&
          results.map(
            ({
              id,
              seller,
              price,
              thumbnail,
              title,
              currency_id,
              shipping,
            }) => (
              <Link
                to={`/item/${id}`}
                key={id}
                onClick={() => handleItemClick(id)}
              >
                <div className='flex items-center p-4  rounded hover:bg-gray-100 transition duration-300'>
                  <img
                    src={thumbnail}
                    alt={title}
                    className='sm:w-6 m-4 md:min-w-[180px] object-cover rounded'
                  />
                  <div className='flex flex-col-reverse md:flex-col'>
                    <div className='flex gap-x-2 items-center mb-8'>
                      <p className='md:text-2xl text-blackML'>
                        {Number(price).toLocaleString("es-AR", {
                          style: "currency",
                          currency: currency_id,
                        })}
                      </p>
                      {shipping.free_shipping && (
                        <img src={free_shipping} alt='envio_gratis' />
                      )}
                    </div>
                    <p
                      className='text-sm md:text-lg text-blackML md:w-[70%]'
                      style={{ whiteSpace: "normal" }}
                    >
                      {title}
                    </p>
                  </div>
                  {!isMobile && (
                    <span className='ml-auto text-xs text-grayLightML capitalize'>
                      {seller.nickname.toLowerCase()}
                    </span>
                  )}
                </div>
                <hr className='border-b-[#eee]' />
              </Link>
            )
          )
        )}
      </article>
    </section>
  );
};
