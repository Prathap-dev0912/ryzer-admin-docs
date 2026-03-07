import { cn } from "@/lib/utils";
import type { Endpoint } from "@/lib/types";

interface EndpointCardProps {
  endpoint: Endpoint;
}

const methodColors: Record<string, string> = {
  GET: "method-badge-get",
  POST: "method-badge-post",
  PUT: "method-badge-put",
  DELETE: "method-badge-delete",
  PATCH: "method-badge-patch",
};

export default function EndpointCard({ endpoint }: EndpointCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md hover:border-accent">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-lg font-semibold text-foreground">
            <span className={cn("method-badge", methodColors[endpoint.method], "bg-orange-500 text-white w-fit rounded-sm p-1") }>
              {endpoint.method}
            </span>{" "}
            {endpoint.title}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {endpoint.description}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-primary/90 uppercase tracking-wide">
            Endpoint
          </p>
          <code className="block bg-secondary/50 rounded px-3 py-2 font-mono text-sm text-foreground wrap-break-word">
            {endpoint.path}
          </code>
        </div>

        {endpoint.parameters && (
          <div>
            <p className="text-sm font-medium text-primary/90 uppercase tracking-wide">
              Parameters
            </p>
            <ul className="mt-1 space-y-1 block bg-secondary/50 rounded px-3 py-2">
              {endpoint.parameters.map((param) => (
                <li key={param.name} className="text-sm text-foreground">
                  <code className="font-mono text-primary">{param.name}</code>
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({param.type}){param.required ? " *required" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {endpoint.request?.example && (
          <div>
            <p className="text-sm font-medium text-primary/90 uppercase tracking-wide">
              Request
            </p>

            <pre className="bg-slate-950 rounded px-3 py-2 font-mono text-xs text-white overflow-hidden mt-1">
              <code>
                {(() => {
                  try {
                    const parsed = JSON.parse(endpoint.request.example);
                    return JSON.stringify(parsed, null, 2);
                  } catch {
                    return endpoint.request.example;
                  }
                })()}
              </code>
            </pre>
          </div>
        )}

        {endpoint.response?.example && (
          <div>
            <p className="text-sm font-medium text-primary/90 uppercase tracking-wide">
              response
            </p>

            <pre className="bg-slate-950  rounded px-3 py-2 font-mono text-xs text-white max-h-90 overflow-auto mt-1">
              <code>
                {(() => {
                  try {
                    const parsed = JSON.parse(endpoint.response.example);
                    return JSON.stringify(parsed, null, 2);
                  } catch {
                    return endpoint.response.example;
                  }
                })()}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
