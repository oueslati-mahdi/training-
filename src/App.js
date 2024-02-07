import React from "react";
import "./App.css";

function App() {
const user = {
name: "mahdi",
jobTitle: "Web Developer",
about:
"Passionate about web development and creating awesome user experiences.",
email: "oueslatimahdi@gmail.com",
phone: "29221449",
skills: ["HTML", "CSS", "JavaScript", "React"],
photoURL:
"https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/412847932_270974935988422_7195271817905708634_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Rl8f0vpHJgAAX_qUmkG&_nc_ht=scontent.ftun1-2.fna&oh=00_AfA10fngapL7GpQs-H9344HCL6wkpszEzJchgzaTcD0Dxw&oe=65C94076", // Replace with your photo URL
};

return (
<div className="App">
<header className="App-header">
<img src={user.photoURL} alt="Profile" />
<h1>{user.name}</h1>
<p>{user.jobTitle}</p>
</header>

<section className="App-content">
<h2>About Me</h2>
<p>{user.about}</p>

<h2>Contact Information</h2>
<ul>
<li>Email: {user.email}</li>
<li>Phone: {user.phone}</li>
</ul>

<h2>Skills</h2>
<ul>
{user.skills.map((skill, index) => (
<li key={index}>{skill}</li>
))}
</ul>
</section>
</div>
);
}

export default App;