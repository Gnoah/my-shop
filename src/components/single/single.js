import React from 'react';
import Comment from './comment'


const Single = React.createClasse({
    render(){
        const { postId } = this.pros.params;

        const i = this.props.posts.findIndex((post) => post.code ===postId);

        const post = this.props.posts[i];

        const postComments = this.props.comments[postId] || [];

        return(
            <div className="single-photo">
                <Photo i={i} post={post} { ...this.props} />
                <Comment postComments={postComments} { ...this.props} />
            </div>
        )         
       
    }
})

export default Single;