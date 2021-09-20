import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react'
import InputOption from './InputOption';
import './Post.css';
import ThumbbUpAltOutLinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutLinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutLinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutLinedIcon from '@material-ui/icons/SendOutlined';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux'


const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    const user = useSelector(selectUser);
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={user?.photoUrl}></Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__bottons">
                <InputOption Icon={ThumbbUpAltOutLinedIcon} title="Like" color="gray"/>
                <InputOption Icon={ChatOutLinedIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutLinedIcon} title="Share" color="gray"/>
                <InputOption Icon={SendOutLinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
}
)

export default Post
