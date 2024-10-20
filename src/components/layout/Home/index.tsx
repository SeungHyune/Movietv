import styled from '@emotion/styled';

const Home = () => {
  return (
    <HomeContainer>
      <p style={{ textAlign: 'center', marginTop: 50 }}>
        찾는 영화를 검색해주세요.
      </p>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  margin: 50px 0;
  text-align: center;
  @media (max-width: 380px) {
    p {
      font-size: 14px;
    }
  }
`;

export default Home;
