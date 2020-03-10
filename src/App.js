import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    new window.Kakao.init(process.env.REACT_APP_KAKAO_QUEST);

    new window.Kakao.Channel.createChatButton({
      container: "#kakao-talk-channel-chat-button",
      channelPublicId: "_xcLqmC" // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
    });
  }, []);

  return (
    <div className="App">
      <div
        id="kakao-talk-channel-chat-button"
        data-channel-public-id="_xcLqmC"
        data-title="question"
        data-size="small"
        data-color="yellow"
        data-shape="pc"
        data-support-multiple-densities="true"
      ></div>
    </div>
  );
}

export default App;
