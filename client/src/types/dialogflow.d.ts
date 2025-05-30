declare namespace JSX {
  interface IntrinsicElements {
    'df-messenger': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'project-id': string;
      'agent-id': string;
      'language-code': string;
      'max-query-length': string;
    }, HTMLElement>;
    'df-messenger-chat-bubble': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'chat-title': string;
    }, HTMLElement>;
  }
} 