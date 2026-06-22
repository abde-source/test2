import { useState, useCallback } from 'react'

interface AvailabilityResult {
  available: boolean
  message: string
  totalPrice?: number
}

export function useAvailability() {
  const [checking, setChecking] = useState(false)
  const [result, setResult] = useState<AvailabilityResult | null>(null)

  const check = useCallback(async (
    pickup: Date,
    ret: Date,
    _vehicleId?: string
  ) => {
    setChecking(true)
    setResult(null)

    await new Promise(r => setTimeout(r, 1500))

    const days = Math.max(1, Math.ceil((ret.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24)))
    const available = Math.random() > 0.2

    setResult({
      available,
      message: available
        ? 'Vehicle available! Complete your reservation below.'
        : 'Sorry, this vehicle is not available for the selected dates.',
      totalPrice: available ? days * 1500 : undefined,
    })
    setChecking(false)
  }, [])

  const reset = useCallback(() => {
    setResult(null)
    setChecking(false)
  }, [])

  return { check, checking, result, reset }
}
