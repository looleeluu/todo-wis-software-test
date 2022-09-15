import styled from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'default';
}

export const Title = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  width: 100%;
  background-color: antiquewhite;
`;

export const Button = styled.button<ButtonProps>`
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#000')};
  background-color: ${({ variant }) => (variant === 'primary' ? '#007bff' : '#fff')};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  max-width: 150px;
  padding: 6px 8px;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #83b1e2;
    color: #fff;
  }
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 6px 8px;
  width: 250px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Select = styled.select`
  margin-bottom: 20px;
  padding: 6px 8px;
  width: 250px;
  font-size: 16px;
  border-radius: 5px;
`;

export const ListContainer = styled.div`
  margin-bottom: 20px;
  padding: 30px;
  overflow: auto;
  background-color: #fbf9ed;
  border-radius: 5px;
  border: 1px solid #ceccc3;
  width: 500px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #fbf9ed;
  height: 500px;
  width: 400px;
  border-radius: 5;
  border: 1px solid #ceccc3;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const ItemData = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  cursor: pointer;
`;

export const ItemTitle = styled.p`
  padding-bottom: 4px;
  font-weight: bold;
`;

export const CrossContainer = styled.span`
  margin: 0;
  height: 16px;
  width: 16px;
  cursor: pointer;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const FormItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Divider = styled.hr`
  border-top: 1px solid #bbb;
  width: 100%;
`;
