import {Component , type ErrorInfo , type ReactNode} from "react";


interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught:', error);
        console.error('Error info:', errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="gap-4 h-screen w-screen bg-slate-800 text-red-400 flex flex-col justify-center items-center" role="alert">
                    <h2 className="text-6xl font-bold">Algo salió mal.</h2>
                    <details className="font-medium" style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error?.toString()}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;