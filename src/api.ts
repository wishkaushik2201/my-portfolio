import type { ContactSubmission, ContactSubmissionResult, Portfolio } from './types'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? '/api'

export async function getPortfolio(signal?: AbortSignal): Promise<Portfolio> {
  const response = await fetch(`${API_BASE_URL}/portfolio`, { signal })
  if (!response.ok) {
    throw new Error(`Could not load portfolio (HTTP ${response.status}).`)
  }

  return response.json() as Promise<Portfolio>
}

export async function submitContact(
  submission: ContactSubmission,
): Promise<ContactSubmissionResult> {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(submission),
  })
  if (!response.ok) {
    throw new Error(`Could not send message (HTTP ${response.status}).`)
  }

  return response.json() as Promise<ContactSubmissionResult>
}
