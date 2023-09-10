import React, { useState } from "react";
import "./App.css";
import { MainApp, NoUsername } from "./components";

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

function App() {
  const [mainDrone, setDrone] = useState(null);
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    clientData: {
      username: "",
      color: randomColor(),
      id: "",
    },
  });

  const apiKey = "ndZPEbfUmgMk2em6"; //napomena: ovo je "kod" moje sobe!
  const droneCall = () => {
    const drone = new window.Scaledrone(apiKey);

    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }

      const updatedMember = { ...member };
      updatedMember.clientData.id = drone.clientId;
      setMember(updatedMember);
    });

    const room = drone.subscribe("probna_soba");
    room.on("data", (data) => {
      setMessages((messages) => [
        ...messages,
        { member: data.user, text: data.m },
      ]);
    });

    window.addEventListener("beforeunload", () => {
      drone.on("close", (event) => {
        console.log(event);
      });
    });
    setDrone(drone);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    e.target.name.value = "";
    const newMember = { ...member };
    newMember.clientData.username = name;
    setMember(newMember);
    if (name) {
      droneCall();
    }
  };

  const onSendMessage = (message) => {
    if (!message) return;
    const newMember = { ...member };
    const value = { user: newMember, m: message };
    mainDrone.publish({
      room: "probna_soba",
      message: value,
    });
  };
  return member.clientData.username ? (
    <MainApp
      messages={messages}
      member={member}
      onSendMessage={onSendMessage}
    />
  ) : (
    <NoUsername handleNameSubmit={handleNameSubmit} />
  );
}

export default App;
