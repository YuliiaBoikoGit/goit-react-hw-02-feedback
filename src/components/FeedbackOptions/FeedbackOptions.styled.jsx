import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 20px;
  justify-content: center;
  padding: 0;
  margin-bottom: 60px;
`;

export const Btn = styled.button`
  display: inline-block;
  padding: 0 18px;
  font-weight: 600;
  font-size: 18px;
  line-height: 2.8;
  text-align: center;
  text-decoration: none;
  border: ${props => `2px solid ${props.theme.colors.mainColor}`};
  background-color: ${props => `${props.theme.colors.bgColor}`};
  box-shadow: ${props => `${props.theme.colors.mainColor} 4px 4px 0 0`};
  color: ${props => `${props.theme.colors.mainColor}`};
  border-radius: 30px;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: ${props => `${props.theme.colors.white}`};
  };

  :active {
    box-shadow: ${props => `${props.theme.colors.mainColor} 2px 2px 0 0`};
    transform: translate(2px, 2px);
  };
`;