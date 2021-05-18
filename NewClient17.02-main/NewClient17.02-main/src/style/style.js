import styled from 'styled-components';

export const Title = styled.h1.attrs({
  className: 'h1',
})`
  font-size: 16px;
  font-weight: 400;
  color : #59a66c
  text-shadow: 0 0 3px #06f943;
`

export const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
     width: 100%;
    max-width: 600px;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    
`
export const WrapperList = styled.div.attrs({
  className: 'form-group',
})`
  padding: 0 40px 40px 40px;

`

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: .5em;
  margin-top: 1.5em;

`

export const InputText = styled.input.attrs({
  className: 'form-control',
})`
    background: #ddffcc !important;
    border-radius: 3px;
    border: 1px solid #ccc;
    margin-bottom: 1em;
    padding: 0 1em;
    width: 100%;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
`

export const Button = styled.a.attrs({
  className: `btn btn-outline-success`,
})`
 
  position: relative;
  display: flex;
  width:25%;
  margin: 1%;
`

export const CancelButton = styled.a.attrs({
  className: `btn btn-outline-danger`,
})`

  position: relative;
  display: flex;
  width:25%;
  margin: 1%;
`
export const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

export const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`