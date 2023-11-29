import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import Container from '../../common/Container';
import Paper from '../../common/Paper';

type CardProps = {};

const Card = ({}: CardProps) => {
  return (
    <Paper>
      <Container defaultProps={{ className: classNames('p-12') }}>
        <></>
      </Container>
    </Paper>
  );
};

Card.Paper = Paper;
Card.Container = Container;

export default Card;
