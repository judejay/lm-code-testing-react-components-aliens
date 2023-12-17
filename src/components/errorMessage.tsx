interface ErrorMessageProps {
  message: string[];
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <>
      {message.map((error) => (
        <div style={{ color: "red" }}> {error}</div>
      ))}
      ;
    </>
  );
};

export default ErrorMessage;
