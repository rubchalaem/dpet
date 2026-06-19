export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
export const FILE_BASE_URL = API_BASE_URL.replace(/\/api$/, "");

type ApiOptions = {
  headers?: Record<string, string>;
};

const request = async (path: string, init: RequestInit = {}) => {
  const token = localStorage.getItem("token");
  const headers = new Headers(init.headers);

  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (init.body && !(init.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
    ...init,
    headers,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const error: any = new Error(data?.message || "Request failed");
    error.response = { status: response.status, data };
    throw error;
  }

  return { data };
};

export const api = {
  get: (path: string) => request(path),
  post: (path: string, body?: unknown, options: ApiOptions = {}) =>
    request(path, {
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body ?? {}),
      headers: options.headers,
    }),
  patch: (path: string, body?: unknown, options: ApiOptions = {}) =>
    request(path, {
      method: "PATCH",
      body:
        body === undefined
          ? undefined
          : body instanceof FormData
            ? body
            : JSON.stringify(body),
      headers: options.headers,
    }),
  delete: (path: string) => request(path, { method: "DELETE" }),
};

export const getImageUrl = (path?: string | null) => {
  if (!path) return "/placeholder.svg";
  if (path.startsWith("http")) return path;
  if (path.startsWith("/uploads")) return `${FILE_BASE_URL}${path}`;
  if (path.startsWith("/")) return path;
  return `${FILE_BASE_URL}/${path.replace(/\\/g, "/")}`;
};
