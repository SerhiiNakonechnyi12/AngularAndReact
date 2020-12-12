import React, {useState, useEffect} from "react";
import data from "../db.json";

export default function PostList(){
    const [posts, setPosts] = useState(data["posts"]);
    useEffect(()=>{
        setPosts(data["posts"]);
        console.log("Запрос к API/ файлу");
    },
    []);
    return <>
    <Posts posts={posts}></Posts>
    </>
}