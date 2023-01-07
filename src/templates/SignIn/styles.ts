import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px;

  > h1 {
    margin-bottom: 52px;
    font-family: 'Rubik';
  }

  > button {
    all: unset;
    cursor: pointer;
    background: #645ffb;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    width: 236px;
    height: 42px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    align-self: center;
    margin-top: 45px;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
`
