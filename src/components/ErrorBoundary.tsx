import React from 'react';

interface Props { children: React.ReactNode }
interface State { hasError: boolean }

// Workaround: useDefineForClassFields:false + experimentalDecorators causes
// TypeScript to lose this.props/this.state types — cast through unknown to recover them.
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this as unknown as { state: State }).state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    const self = this as unknown as { state: State; props: Props };
    if (self.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Something went wrong</h2>
          <p className="text-slate-500 mb-6">Please refresh the page or contact us on WhatsApp.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-brand-blue text-white px-6 py-3 rounded-full font-bold hover:bg-brand-red transition-all"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return self.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
