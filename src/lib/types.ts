export interface Parameter {
  name: string
  type: string
  required: boolean
  description: string
}

export interface ApiExample {
  description?: string
  example: string
}

export interface Endpoint {
  id: string
  title: string
  description: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  parameters?: Parameter[]
  request?: ApiExample
  response?: ApiExample
  statusCodes?: {
    code: number
    description: string
  }[]
}

export interface Section {
  id: string
  title: string
  description: string
  endpoints: Endpoint[]
}