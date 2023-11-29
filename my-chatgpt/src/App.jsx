import ChatBar from "./component/ChatBar";
import styled from "styled-components";
function App() {
  const onSend = async (message) => {
    console.log(message);
  };

  return (
    <StMain>
      <ChatBar onSend={onSend} />
    </StMain>
  );
}

export default App;

const StMain = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
