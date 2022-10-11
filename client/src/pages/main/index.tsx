import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { PATH_PAGE } from '../../router/constants/routes';
import { ProductCard } from '../../components/composite/ProductCard';
import { ListComponents } from '../../components/UI/ListComponents';
import { PageLayout } from '../../layouts/page';
import { useGetAllPostsQuery } from '../../core/graphql/requests/post/GetAllPosts.generated';

export const Main = () => {
  const navigate = useNavigate();

  const handlerProductCardClick = (id: string) => () => {
    navigate(`${PATH_PAGE.POST}/${id}`);
  };

  const { data } = useGetAllPostsQuery();
  const allPosts = data?.allPosts;
  //   const data = [1, 2, 3];

  return (
    <PageLayout>
      {allPosts?.length ? (
        <ListComponents layoutDirection="vertical">
          {allPosts.map((post) => {
            return (
              post && (
                <ProductCard
                  key={v4()}
                  image={undefined}
                  title={post.title || ''}
                  description={post.description || ''}
                  layoutDirection="horizontal"
                  onClick={handlerProductCardClick(post.id)}
                />
              )
            );
          })}
        </ListComponents>
      ) : (
        <div>Posts not found!</div>
      )}
    </PageLayout>
  );
};
