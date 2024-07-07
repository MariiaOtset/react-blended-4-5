import { Container, ExchangeInfo, Heading, Loader, Section } from 'components';
import { ExchangeForm } from 'components';
import { useSelector } from 'react-redux';
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from 'reduxState/selector';

const Home = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const isChangeInfo = useSelector(selectExchangeInfo);
  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!isError && !isChangeInfo && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
        {isChangeInfo && <ExchangeInfo {...isChangeInfo} />}
        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
