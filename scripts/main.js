const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt: addedAt
})

const firstPost = {
    id: 1,
    author: 'Oleh'
}

console.table(newPost(firstPost))