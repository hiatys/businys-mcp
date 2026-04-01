// © 2026 Hiatys Systems Ltd.
import {
  createHiatysServer,
  createRateLimit,
  createUsageMeter,
  createAuditLog,
  createConfirmationCheck,
} from "@hiatys/mcp";
import { buildTools } from "@/mcp/tools";
import { prompts } from "@/mcp/prompts";
import { dynamicResources, resourceTemplates } from "./resources";

const BASE_URL = process.env.HIATYS_BASE_URL ?? "https://businys.app";
const API_KEY = process.env.HIATYS_API_KEY;

interface ActiveKitsResponse {
  practiceIds: string[];
  kitIds: string[];
}

async function fetchActivePracticesAndKits(): Promise<ActiveKitsResponse> {
  if (!API_KEY) return { practiceIds: [], kitIds: [] };
  try {
    const res = await fetch(`${BASE_URL}/api/mcp/active-kits`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    if (!res.ok) return { practiceIds: [], kitIds: [] };
    const data = (await res.json()) as ActiveKitsResponse;
    return {
      practiceIds: data.practiceIds ?? [],
      kitIds: data.kitIds ?? [],
    };
  } catch {
    return { practiceIds: [], kitIds: [] };
  }
}

async function main() {
  if (!API_KEY) {
    console.error(
      "[mcp] Error: HIATYS_API_KEY environment variable is required.\n" +
        "      Get your API key at https://businys.app/dashboard/settings (API Keys tab).",
    );
    process.exit(1);
  }

  const { practiceIds, kitIds } = await fetchActivePracticesAndKits();
  const tools = buildTools(practiceIds);

  console.error(
    `[mcp] Resolved ${tools.length} tools for practices: [${practiceIds.join(", ") || "none"}]`,
  );

  await createHiatysServer({
    name: "businys",
    version: "1.0.0",
    description:
      "Businys — the unified platform for independent professionals. Manage clients, bookings, invoices, contracts, and more across 26 practices.",
    tools,
    resources: [],
    dynamicResources,
    resourceTemplates,
    prompts,
    getActiveKitIds: async () => kitIds,
    middleware: [
      createRateLimit(),
      createUsageMeter(),
      createAuditLog(),
      createConfirmationCheck(),
    ],
  }).start();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
