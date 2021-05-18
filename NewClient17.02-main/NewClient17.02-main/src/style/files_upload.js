import styled from "styled-components";

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

  export const Wrapper2 = styled.div.attrs({
    className: 'form-group',
  })`
       width: 100%;
      max-width: 1200px;
      padding: 2em;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      
  `


export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 2rem;
}

`

export const Label2 = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-top: 2em;
  margin-bottom: 2rem;
  margin-left: 2rem;
}

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
// export const Button = styled.a.attrs({
//     className: `btn btn-success`,
//   })`
   
//     margin-top: 10rem;
//     display: flex;
   
//   `
  export const Button = styled.a.attrs({
    className: `btn btn-outline-success`,
  })`
   
    position: relative;
    margin-top: 10rem;
    display: flex;
    width:10%;
    margin: 1%;
    margin-bottom: 2rem;

  `

  export const CancelButton = styled.a.attrs({
    className: `btn btn-outline-danger`,
  })`
  
    position: relative;
    margin-top: 10rem;
    display: flex;
    width:10%;
    margin: 1%;
    margin-bottom: 2rem;

  `