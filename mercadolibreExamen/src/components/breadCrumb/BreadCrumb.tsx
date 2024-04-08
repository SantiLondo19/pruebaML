import { Link } from "react-router-dom";
import { useSetItems } from "../../store/itemsStore/useSetItems";

export const BreadCrumb = () => {
  const { filters } = useSetItems((state) => state.results);
  return (
    <nav className='row-start-1 col-start-1 col-span-12 my-4 items-start' aria-label='Breadcrumb'>
      <ol className='inline-flex  space-x-1 md:space-x-2 rtl:space-x-reverse text-'>
        {filters &&
          filters.map(({ values,id }) => (
            <li key={id} className='inline-flex items-center'>
              <Link
                to={`/`}
                className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              >
                {values.map((value) => value.name).join(' - ')}
              </Link>
              <svg
                className='rtl:rotate-180 w-3 h-3 text-gray-400 mx-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
            </li>
          ))}
      </ol>
    </nav>
  );
};
