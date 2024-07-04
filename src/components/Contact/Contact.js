import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://react-http-f4c0d-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json', {
      method: 'PUT',
      body: JSON.stringify({ Name: name, Email: email, Message: message }),
      headers: {
        'Content-Type':'application/json'
      },
    }).then(() => {
      alert("Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    }).catch((error) => {
      alert(error.message);
    });
    
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="info" endIcon={<SendIcon />} >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
