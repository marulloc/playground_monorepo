import { classNames } from '@/components/Marulloc-UI-v2/utils/classNames';
import Container from '../../common/Container';
import Paper from '../../common/Paper';

type CardProps = {};

const Card = ({}: CardProps) => {
  return (
    <Paper>
      <Container>
        <></>
      </Container>
    </Paper>
  );
};

Card.Paper = Paper;
Card.Container = Container;

export default Card;
