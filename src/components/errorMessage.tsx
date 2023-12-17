interface ErrorMessageProps {
  message: string[];
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <>
      {message.map((error) => (
        <div> {error}</div>
      ))}
      ;
    </>
  );
};

export default ErrorMessage;
