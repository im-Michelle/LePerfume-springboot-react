import styled from 'styled-components';

const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: 25px;
`;

const LabelText = styled.span`
  margin-bottom: 5px;
  color: #fff;
`;

const Input = styled.input`
  height: 50px;
  padding: 5px;
  border: 1px solid #fff;
  width: 300px;
  border-radius: 10px;
  font-size: 25px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

function Label(props) {
  const { text, name, value, onChange } = props;

  return (
    <LabelContainer>
      <LabelText>{text}</LabelText>
      <Input type="text" name={name} value={value} onChange={onChange} />
    </LabelContainer>
  );
}

export default Label;