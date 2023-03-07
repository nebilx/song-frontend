import styled from "@emotion/styled";
export const Container = styled.div`
  background-color: #474747;
  border-radius: 5%;
  padding: 5%;
  color: white;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.color};
  }
`;
