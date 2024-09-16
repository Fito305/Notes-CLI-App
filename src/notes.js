import { insertDB, saveDB, getDB } from './db.js'

export const newNote = async (note, tags) => {
    const newNote = {
        tags: tags,
        id: Date.now(),
        content: note,
    }

    await insertDB(newNote)
    return newNote
}

export const getAllNotes = async () => {
    const  dbNotes  = await getDB()
    return dbNotes.notes
}

export const findNotes = async (filter) => {
    const  dbNotes  = await getDB()
    return dbNotes.notes.filter(note => note.content
        .toLowerCase()
        .includes(
            filter.toLowerCase()
        ))
}

export const removeNote = async (id) => {
    const  dbNotes  = await getDB()
    const match = dbNotes.notes.find(note => note.id === id)

    if (match) {
        const newNotes = dbNotes.notes.filter(note => note.id !== id)
        await saveDB({ notes: newNotes })
        return id
    }
}

export const removeAllNotes = () => saveDB({notes: []})
