import styled from '@emotion/styled';

const Skeleton = () => {
  const skeletonArray = Array.from({ length: 10 }, (_, index) => index);

  return (
    <>
      {skeletonArray.map((list, index) => (
        <SkeletonList key={index} />
      ))}
    </>
  );
};

const SkeletonList = styled.div`
  position: relative;
  list-style: none;
  height: 310px;
  background: linear-gradient(
    90deg,
    #b7b7b7 30%,
    #c5c5c5 38%,
    #c5c5c5 40%,
    #b7b7b7 48%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  border-radius: 5px;
  animation: shine 1s infinite;

  @keyframes shine {
    100% {
      background-position: -100% 0;
    }
  }
`;

export default Skeleton;
