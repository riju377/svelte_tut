import {json} from "@sveltejs/kit"

const comments = [
    {
        id:1,
        text:"This is first comment"
    },
    {
        id:2,
        text:"This is second comment"
    },
    {
        id:3,
        text:"This is third comment"
    }
]


export function GET(){
    return json(comments)
}

export async function POST(RequestEvent){
    const {request} = RequestEvent;
    const {text} = await request.json();
    const newComment = {
        id: comments.length +1,
        text
    };
    comments.push(newComment);
    return json(newComment,{status: 201});
}