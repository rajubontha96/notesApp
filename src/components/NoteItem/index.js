import {NoteItemContainer, NoteTitle, NoteDescription} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <NoteItemContainer>
      <NoteTitle>{title}</NoteTitle>
      <NoteDescription>{note}</NoteDescription>
    </NoteItemContainer>
  )
}

export default NoteItem
