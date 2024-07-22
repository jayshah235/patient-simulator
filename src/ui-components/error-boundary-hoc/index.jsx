import { ErrorBoundary } from "../../components/error-boundary";

export const ErrorBoundaryHoc = (props) => {
  const { children } = props;
  return (
    <ErrorBoundary fallback={"something went wrong.."}>
      {children}
    </ErrorBoundary>
  );
};
