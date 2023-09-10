import chatLogo from "../../chatcoin-chat-logo.png";
import "./NoUserName.css";
const NoUsername = ({ handleNameSubmit }) => {
  return (
    <div className="name-input">
      <div className="title">
        <img src={chatLogo} alt="chat-logo" width="100px" />
        <h1>Dobrodošli na chat box aplikaciju!</h1>
      </div>
      <form onSubmit={handleNameSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ovdje upišite Vaše ime/nadimak!"
        />
        <button type="submit">Potvrdi</button>
      </form>
    </div>
  );
};

export default NoUsername;
