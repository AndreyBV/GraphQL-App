import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { PATH_PAGE } from '../../router/constants/routes';
import { ProductCard } from '../../components/composite/ProductCard';
import { ListComponents } from '../../components/UI/ListComponents';
import { PageLayout } from '../../layouts/page';

export const Main = () => {
  const navigate = useNavigate();

  const { control } = useForm({ defaultValues: {} });

  const handlerProductCardClick = (id: string) => () => {
    navigate(`${PATH_PAGE.POST}/${id}`);
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
