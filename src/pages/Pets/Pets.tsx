import { useSearchParams } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Header } from '../../components/common/Header';
import { Pagination } from '../../components/common/Pagination';
import { Skeleton } from '../../components/common/Skeleton';
import { Grid } from '../../components/layout/Grid';
import { usePetList } from '../../hooks/usePetList';
import styles from './Pets.module.css';
import { Select } from '../../components/common/Select';
import { Button } from '../../components/common/Button';
import { filterColumns } from './Pets.constants';

export function Pets() {
  const [searchParams, setSearchParams] = useSearchParams()

  const urlParams = {
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  }

  const { data, isLoading } =  usePetList(urlParams)

  // Example of useQuery:
  // const { data, isLoading } = useQuery({
  //   queryKey: ['get-pets', urlParams],
  //   queryFn: () => getPets(urlParams),
  //   // staleTime: 100 //Defines time to next request
  // });

  function changePage(page: number) {
    // Update the param page from url
    setSearchParams((params) => {
      params.set('page', String(page))
      return params
    })
  }

  return (
    <Grid>
      <div className={styles.container}>
        <Header />

        <form className={styles.filters}>
          <div className={styles.columns}>
            {filterColumns.map((filter) => (
              <div key={filter.name} className={styles.column}>
                <Select 
                  label={filter.title}
                  defaultValue=""
                  name={filter.name}
                  options={filter.options}/>
              </div>
            ))}
          </div>
          <Button type="submit">Buscar</Button>
        </form>

        {isLoading && <Skeleton containerClassName={styles.skeleton} count={10} />}

        <main className={styles.list}>
          {data?.items?.map((pet) => (
            <Card
              key={pet.id}
              href={`/pet/${pet.id}`}
              text={pet.name}
              thumb={pet.photo}
            />
          ))}
        </main>

        {data?.currentPage && (
          <Pagination
            currentPage={data.currentPage}
            totalPages={data.totalPages}
            onPageChange={(number) => changePage(number)}
          />
        )}
      </div>
    </Grid>
  );
}