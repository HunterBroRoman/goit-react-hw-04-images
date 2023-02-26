import { TailSpin } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <TailSpin />
    </StyledLoader>
  );
};