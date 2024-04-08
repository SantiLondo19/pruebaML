import { useNavigate } from "react-router-dom";
import { useSetItemDetails } from "../../store/itemsStore/useSetItemDetails";
import { useSetItemId } from "../../store/itemsStore/useSetItemId";
import { Loading } from "../Loading/Loading";
import { useEffect } from "react";

export const ItemDetail = () => {
  const navigate = useNavigate();
  const { title, price, thumbnail, condition } = useSetItemDetails(
    (state) => state.details
  );
  const id = useSetItemId((state) => state.id);
  const { plain_text } = useSetItemDetails((state) => state.description);

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);
  return (  
    <section
      className={`bg-white  col-start-1 col-span-12 row-start-1 mt-14 row-span-10 flex  ${
        !title && "justify-center row-start-1"
      }  w-full p-8`}
    >
      {!title ? (
        <Loading />
      ) : (
        <>
          <div className='flex-1 h-full flex flex-col md:gap-11'>
            <img className='max-w-[680px]' src={thumbnail} alt={title} />
            <div className='flex flex-col gap-2'>
              <p className='md:text-lg text-blackML font-semibold ml-8'>
                Descripción del producto
              </p>
              <p className='text-base ml-8 my-8 text-grayLightML'>
                {plain_text}
              </p>
            </div>
          </div>
          <div className='justify-start flex flex-col basis-3/12'>
            <span className='mt-8 mb-4 text-sm'>
              {condition === "new" ? "Nuevo" : "Usado"}
            </span>
            <p className='text-blackML font-bold md:text-2xl mb-8'>{title}</p>
            <p className='text-blackML font-semibold md:text-[46px] mb-8'>
              {Number(price).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </p>
            <button className='bg-[#3483FA] p-1 md:p-3 text-white text-center rounded mr-8 hover:opacity-80'>
              Comprar
            </button>
          </div>
        </>
      )}
    </section>
  );
};
