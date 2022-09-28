import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { ProductCard } from '../../components/composite/ProductCard';
import { Button } from '../../components/UI/Button';
import { GridComponents } from '../../components/UI/GridComponents';
import { ListComponents } from '../../components/UI/ListComponents';
import { ROUTE_PATH } from '../../core/constants/routes';
import { PageLayout } from '../../layouts/page';
import { getTestData } from '../../query/test';
import * as UI from './styles';

export const Main = () => {
  const { data, loading, error } = useQuery(getTestData);
  const navigate = useNavigate();

  const handlerProductCardClick = (id: string) => () => {
    navigate(`${ROUTE_PATH.POST}/${id}`);
  };

  return (
    <PageLayout>
      <ListComponents layoutDirection="vertical">
        {[1, 2].map((item) => {
          return (
            <ProductCard
              key={v4()}
              image={undefined}
              title="Product name"
              layoutDirection="horizontal"
              description="Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description "
              onClick={handlerProductCardClick(item.toString())}
            />
          );
        })}
      </ListComponents>
      {/* <GridComponents>
        {[1, 2, 3, 4].map((item) => {
          return (
            <ProductCard
              key={v4()}
              image={undefined}
              title="Product name"
              layoutDirection="vertical"
              description="Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description "
              onClick={handlerProductCardClick(item.toString())}
            />
          );
        })}
      </GridComponents> */}
    </PageLayout>
  );
};
