import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import "./MainApp.css";

const MainApp = ({ messages, member, onSendMessage }) => {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Chat box </h1>
      </div>
      <Messages messages={messages} currentMember={member} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
};

export default MainApp;
