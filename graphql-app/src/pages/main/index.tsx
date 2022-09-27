import { useQuery } from '@apollo/client';
import { v4 } from 'uuid';
import { ProductCard } from '../../components/composite/ProductCard';
import { Button } from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';
import { PageLayout } from '../../layouts/page';
import { getTestData } from '../../query/test';

import * as UI from './styles';

export const Main = () => {
  const { data, loading, error } = useQuery(getTestData);

  const handlerProductCardClick = (item: string) => {
    console.error('%c⧭', 'color: #733d00', item);
  };

  return (
    <PageLayout>
      <UI.MainCardList>
        {[1, 2, 3, 4].map((item) => {
          return (
            <ProductCard
              key={v4()}
              image={undefined}
              title="Product name"
              description="Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description "
              onClick={() => console.error(item)}
            />
          );
        })}
      </UI.MainCardList>
    </PageLayout>
  );
};
