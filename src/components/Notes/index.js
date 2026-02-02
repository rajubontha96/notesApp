import {useState} from 'react'
import NoteItem from '../NoteItem'
import {
  NotesContainer,
  Heading,
  Form,
  Input,
  TextArea,
  Button,
  NotesList,
  EmptyViewContainer,
  EmptyImage,
  EmptyHeading,
  EmptyText,
} from './styledComponents'

const Notes = () => {
  const [titleInput, setTitleInput] = useState('')
  const [noteInput, setNoteInput] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitleInput(event.target.value)
  }

  const onChangeNote = event => {
    setNoteInput(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()

    // ALWAYS call setter using callback (Test Case 15)
    setNotesList(prevNotes => {
      const updatedNotes = prevNotes ? [...prevNotes] : []

      updatedNotes.push({
        id: Date.now(),
        title: titleInput,
        note: noteInput,
      })

      return updatedNotes
    })

    setTitleInput('')
    setNoteInput('')
  }

  return (
    <NotesContainer>
      <Heading>Notes</Heading>

      <Form onSubmit={onAddNote}>
        <Input
          type="text"
          placeholder="Title"
          value={titleInput}
          onChange={onChangeTitle}
        />

        <TextArea
          placeholder="Take a Note..."
          value={noteInput}
          onChange={onChangeNote}
        />

        <Button type="submit">Add</Button>
      </Form>

      {notesList.length === 0 ? (
        <EmptyViewContainer>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyText>Notes you add will appear here</EmptyText>
        </EmptyViewContainer>
      ) : (
        <NotesList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>
      )}
    </NotesContainer>
  )
}

export default Notes
