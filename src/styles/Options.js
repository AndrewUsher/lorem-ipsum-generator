import styled from 'styled-components'

const inputHeight = '30px'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  width: 80%;
`

export const Input = styled.input`
  border: 2px solid #ccc;
  font-family: Cabin, sans-serif;
  height: ${inputHeight};
  margin-right: 10px;
  padding: 5px;
  width: 60px;
`

export const Select = styled.select`
  border: 2px solid #ccc;
  font-family: Cabin, sans-serif;
  height: ${inputHeight};
  margin-right: 10px;
`

export const Button = styled.button`
  background-color: #fda403;
  border: none;
  border-radius: 2px;
  box-shadow: 3px 2px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: block;
  font-family: Cabin, sans-serif;
  font-size: 16px;
  margin: 10px auto;
  padding: 10px 15px;
  transition: background-color 400ms, color 400ms, transform 300ms;

  &:hover {
    background-color: #fdad1c;
    box-shadow: none;
    color: #f2f2f2;
    transform: translate(3px, 2px);
  }
`
