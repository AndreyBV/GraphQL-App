import { Typography } from '../Typography';
import * as UI from './styles';

interface ICard {
  title?: string;
  layoutDirection?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

export const Card: React.FC<ICard> = ({
  title,
  layoutDirection,
  children,
  onClick,
  className,
}) => {
  return (
    <UI.StyledCard onClick={onClick} className={className}>
      {title && (
        <UI.TitleBar>
          <Typography>{title}</Typography>
        </UI.TitleBar>
      )}
      <UI.CardContent layoutDirection={layoutDirection}>
        {children}
      </UI.CardContent>
    </UI.StyledCard>
  );
};
