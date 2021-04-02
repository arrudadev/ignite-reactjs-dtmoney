import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;

  color: #fff;
  background: var(--blue-light);

  border: 0;
  border-radius: 0.25rem;

  padding: 0 2rem;
  height: 3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }    
`;