interface ErrorMessageProps {
  message: string[];
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <>
      {message.map((error, index) => (
        <div key={index} data-testid="error" style={{ color: "red" }}>
          {" "}
          {error}
        </div>
      ))}
      ;
    </>
  );
};

export default ErrorMessage;
