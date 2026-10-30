import { Component, type ReactNode } from 'react'

/** Si la escena 3D falla, se muestra el respaldo (imagen estática). */
export class ErrorBoundary extends Component<{ fallback: ReactNode; onError?: () => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { this.props.onError?.() }
  render() { return this.state.failed ? this.props.fallback : this.props.children }
}
