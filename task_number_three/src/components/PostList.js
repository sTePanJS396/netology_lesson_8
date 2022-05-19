import React from 'react';
import { Col, Row } from "react-bootstrap";
import Post from './Post';

const PostList = () => {
  const [post, setPost] = React.useState([]);

  async function fetchingData() {
    await fetch('http://localhost:7070/private/news', {
      method: 'GET',
      headers: {'Authorization': `Bearer ${window.localStorage.getItem('token')}`},
    }).then(res => {
      if (res.status === 401) {
        alert('Произошла ошибка!')
        window.localStorage.clear();
      } else {
        return res.json()
      }
    }).then(res => setPost(res))
  }
  
  React.useEffect(() => {
    fetchingData()
  }, []);

  return (
    <div className='post-list'>
        <Row xs={1} md={2} className="g-4">
            {post.map(el => (
                <Col key={el.id}>
                    <Post text={el.content} title={el.title} img={el.image}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default PostList