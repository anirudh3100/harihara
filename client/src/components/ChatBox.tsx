import { useEffect } from "react";

export default function ChatBox() {
  useEffect(() => {
    // Add Dialogflow script
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    script.async = true;
    script.onload = () => {
      // Add event listener for when chat opens
      document.addEventListener('df-messenger-loaded', () => {
        const dfMessenger = document.querySelector('df-messenger');
        if (dfMessenger) {
          // Trigger welcome event when chat opens
          document.addEventListener('df-messenger-opened', () => {
            // @ts-ignore - Dialogflow messenger API
            dfMessenger.renderCustomText('Welcome to Harihara Estates! How may I help you?');
          });
        }
      });
    };
    document.body.appendChild(script);

    // Add Dialogflow styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
    document.head.appendChild(link);

    // Add custom styles
    const style = document.createElement("style");
    style.textContent = `
      df-messenger {
        z-index: 999;
        position: fixed;
        --df-messenger-font-color: #000;
        --df-messenger-font-family: Google Sans;
        --df-messenger-chat-background: #f3f6fc;
        --df-messenger-message-user-background: #d3e3fd;
        --df-messenger-message-bot-background: #fff;
        bottom: 16px;
        right: 16px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('df-messenger-loaded', () => {});
      document.removeEventListener('df-messenger-opened', () => {});
      if (script.parentNode) script.parentNode.removeChild(script);
      if (link.parentNode) link.parentNode.removeChild(link);
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  return (
    <df-messenger
      project-id="harihara-chatbot"
      agent-id="01635a37-11bc-477d-b68a-db0ad94a782e"
      language-code="en"
      max-query-length="-1"
    >
      <df-messenger-chat-bubble
        chat-title="Harihara"
      ></df-messenger-chat-bubble>
    </df-messenger>
  );
} 