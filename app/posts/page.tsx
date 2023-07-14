'use client'

import { useState, MouseEvent } from "react"

// type ButtonProps = {
//   children: React.ReactElement
// }
// function Button({ children }: ButtonProps) {
//   return <button className="border border-black p-2 bg-slate-200">{children}</button>
// }

// const props = { a: 1 }

// const Textarea = (props) => <textarea {...props} />
type PostState = {
  name: string
  description: string
}

const api = {
  createPost: (data: PostState) => fetch('/api/posts', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}

export default function Posts() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const onPostSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    api.createPost({
      name, description
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <div className="mb-4">
            <input onChange={(event) => { setName(event.currentTarget.value) }} placeholder="Enter your name"></input>
          </div>

          <div>
            <textarea onChange={(event) => { setDescription(event.currentTarget.value) }} placeholder="Enter your thoughts" className="w-full" />
          </div>

          <div>
            <button onClick={onPostSubmit} className="border border-black p-2 bg-slate-200">Post</button>
          </div>
        </div>
      </div>
    </main>
  )
}
