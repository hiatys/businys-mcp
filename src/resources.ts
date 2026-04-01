// © 2026 Hiatys Systems Ltd.
import type {
  DynamicResourceDefinition,
  ResourceTemplateDefinition,
} from "@hiatys/mcp";

/**
 * Dynamic resources — fetched from the Businys API using the user's API key.
 * No local files required.
 */
export const dynamicResources: DynamicResourceDefinition[] = [
  {
    name: "business-context",
    uri: "hiatys://context/current",
    description:
      "Complete business context: identity, pricing, process, capabilities. Use to understand who the user is. This is a live snapshot — use it before making decisions that depend on business state.",
    mimeType: "text/plain",
    group: "data",
    path: "/api/context",
    params: { format: "prompt" },
  },
  {
    name: "my-clients",
    uri: "hiatys://data/clients",
    description:
      "Client list with engagement scores — shows current active clients. Live data.",
    mimeType: "application/json",
    group: "data",
    path: "/api/clients",
    params: { limit: "50" },
  },
];

export const resourceTemplates: ResourceTemplateDefinition[] = [
  {
    name: "business-context-sections",
    uriTemplate: "hiatys://context/{sections}",
    description:
      "Selective business context. Sections: identity, brand, pricing, process, clients, capabilities.",
    mimeType: "text/plain",
    group: "data",
    path: "/api/context?sections={sections}&format=prompt",
  },
  {
    name: "client-detail",
    uriTemplate: "hiatys://clients/{id}",
    description:
      "Full details of a specific client including goals and history.",
    mimeType: "application/json",
    group: "data",
    path: "/api/clients/{id}",
  },
  {
    name: "profile-page",
    uriTemplate: "hiatys://profiles/{slug}",
    description:
      "Public profile page data for a given profile slug — includes display info, services, and booking URL.",
    mimeType: "application/json",
    group: "data",
    path: "/api/settings/profile-slug",
  },
];
