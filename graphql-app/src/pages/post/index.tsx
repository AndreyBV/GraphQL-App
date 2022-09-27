import { CommentBlock } from '../../components/composite/CommentBlock';
import { ProductInfo } from '../../components/composite/ProductInfo';
import { PageLayout } from '../../layouts/page';
import * as UI from './styles';

export const Post = () => {
  return (
    <PageLayout>
      <UI.StyledPost>
        <ProductInfo />
        <CommentBlock />
      </UI.StyledPost>
    </PageLayout>
  );
};
