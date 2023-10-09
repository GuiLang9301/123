import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className='background'>
      <PrettyChatWindow
        projectId={"606b0953-0336-47ad-a5be-9883f501766e"}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;
