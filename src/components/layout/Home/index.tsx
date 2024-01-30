import { useQueryClient } from '@tanstack/react-query';

const Home = () => {
  const queryClient = useQueryClient();
  queryClient.clear();

  return (
    <p style={{ textAlign: 'center', marginTop: 50 }}>
      찾는 영화를 검색해주세요.
    </p>
  );
};

export default Home;
