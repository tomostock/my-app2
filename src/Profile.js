import React from 'react';
import './css/profile.css';


export default function Profile() {
  return (
    <div className="profile">
      <h1>PROFILE</h1>
      <h2>about this APP</h2>
      <p>Deploy: Heroku</p>
      <p>Auth: FireBase</p>
      <p>Ui: Material-UI</p>
      <p>Mail: emailjs</p>
      <p>Game: React Tutorial</p>
      
      <h2>about Auther</h2>
      <p>Name: Tomomi Suzuki</p>
      <p>Address: Sagamihara city, Kanagawa</p>
      <p>Birth: 1977 at Shibuya city, Tokyo</p>
      <p>Mail: tomos.tomomi@gmail.com</p>
      <p>Develop Experienced: about 12y</p>
      <span className="comment">※Please contact me by email for <u>job history</u></span>
    </div>
  );
}