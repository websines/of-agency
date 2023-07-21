export interface UserDetails {
    id: string
    username: string
    avatar_url: string
}


export interface Blog {
    title: string
    overview: string
    content: any
    _id: string
    image: any
    slug: {
        current: string
    }
    _createdAt: string
}