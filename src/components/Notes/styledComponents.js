import styled from 'styled-components'

export const NotesContainer = styled.div`
  min-height: 100vh;
  padding: 40px;
  background-color: #ffffff;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  text-align: center;
`

export const Form = styled.form`
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 4px 16px 0px #d8d8d8;
  border-radius: 8px;
  margin-bottom: 30px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  outline: none;
  font-size: 16px;
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
`

export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`

export const NotesList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`

export const EmptyViewContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`

export const EmptyImage = styled.img`
  width: 80px;
`

export const EmptyHeading = styled.h1`
  color: #475569;
`

export const EmptyText = styled.p`
  color: #475569;
`
