import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface WhatsAppModalContextValue {
  isOpen: boolean
  message: string
  openWhatsAppModal: (customMessage?: string) => void
  closeWhatsAppModal: () => void
}

const WhatsAppModalContext = createContext<WhatsAppModalContextValue | null>(null)

export function WhatsAppModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const openWhatsAppModal = useCallback((customMessage?: string) => {
    setMessage(customMessage || '')
    setIsOpen(true)
  }, [])

  const closeWhatsAppModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <WhatsAppModalContext.Provider
      value={{
        isOpen,
        message,
        openWhatsAppModal,
        closeWhatsAppModal,
      }}
    >
      {children}
    </WhatsAppModalContext.Provider>
  )
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext)
  if (!context) {
    throw new Error('useWhatsAppModal must be used within a WhatsAppModalProvider')
  }
  return context
}

