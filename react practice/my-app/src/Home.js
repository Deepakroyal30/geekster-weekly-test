import React from 'react';
import "./App.css";

const Heading = () => {
  return (
    <div className='main'>
    <div className='navbar'>
      <h1>LEARN WEB DEVELOPMENT</h1>

      <p>Welcome to the MDN learning area. The set of articles aims to guide complete beginners to web development with all that they need to start coding websites.</p>
      <p>The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable". From there, you should able to start making your way, Learning from <a href="#">the rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge.</p>

      <p>If you are a complete beginner, web development can be challenging. We will hold your hand and provide enough detail for you to be comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technology works.</p>
    </div>
    </div>
  );
};

export default Heading;
