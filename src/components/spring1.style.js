import styled from 'styled-components'

export const ItemList = styled.div`
  width: 500px;
  height: 80px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: ${props => props.color};
`