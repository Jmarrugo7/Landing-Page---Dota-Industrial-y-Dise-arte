import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { type BrandId, BRANDS, type BrandConfig } from '../data/brands'

interface BrandContextValue {
  brand: BrandConfig
  brandId: BrandId
  setBrand: (id: BrandId) => void
  toggle: () => void
}

const BrandContext = createContext<BrandContextValue | null>(null)

export function BrandProvider({ children }: { children: ReactNode }) {
  const [brandId, setBrandId] = useState<BrandId>('dota')
  const brand = BRANDS[brandId]

  const setBrand = useCallback((id: BrandId) => setBrandId(id), [])
  const toggle = useCallback(() => setBrandId((prev) => (prev === 'dota' ? 'disenarte' : 'dota')), [])

  return (
    <BrandContext value={{ brand, brandId, setBrand, toggle }}>
      {children}
    </BrandContext>
  )
}

export function useBrand() {
  const ctx = useContext(BrandContext)
  if (!ctx) throw new Error('useBrand must be used within BrandProvider')
  return ctx
}
