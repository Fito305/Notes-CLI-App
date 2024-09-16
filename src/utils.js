export const listNotes = notes => {
    
    notes.forEach(({tags, content, id}) => {
        console.log("id:", id)
        console.log("tags:", tags)
        console.log("content:", content)
        console.log('\n')
    })
}
