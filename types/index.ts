export type PageProps = {
  content?: string;
}

export type ApiResponse = {
  data?: unknown;
  error?: {
    message: string
  }
}
