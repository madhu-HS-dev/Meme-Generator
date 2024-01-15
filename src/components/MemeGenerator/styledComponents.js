// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const FormMemeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`

export const GeneratorContainer = styled.form`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 25px;
  padding-right: 25px;
  @media screen and (min-width: 768px) {
    width: 50%;
    max-width: 1140px;
  }
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 300px;
  width: 90%;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 48%;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 29px;
    width: 90%;
  }
  @media screen and (min-width: 992px) {
    font-size: 34px;
  }
`

export const InputLabelContainer = styled.div`
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 14px;
`
export const Input = styled.input`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 14px;
  width: 100%;
  height: 35px;
  border: solid 1px #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  outline: none;
`

export const Select = styled.select`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 14px;
  width: 100%;
  height: 38px;
  border: solid 1px #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  outline: none;
`

export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Open Sans';
  border: none;
  border-radius: 6px;
  width: 150px;
  height: 43px;
  cursor: pointer;
  outline: none;
`

export const StyledText = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: ${props => props.fontSize}px;
`
