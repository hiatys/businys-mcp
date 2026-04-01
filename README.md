# @businys/mcp-server

Official MCP server for [Businys](https://businys.app) — the unified platform for independent professionals.

**221 tools across 26 practices.** Clients, invoices, contracts, bookings, programs, projects, and more — all accessible to any MCP-compatible AI agent.

## Installation

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "businys": {
      "command": "npx",
      "args": ["@businys/mcp-server"],
      "env": {
        "HIATYS_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### Other MCP clients

```bash
npx @businys/mcp-server
```

Requires `HIATYS_API_KEY` environment variable.

## Getting an API Key

1. Sign in at [businys.app](https://businys.app)
2. Go to **Settings → API Keys**
3. Create a new key with the scopes you need
4. Paste it into your MCP client config

API access requires a paid plan (Starter $12/mo and above).

## What's Included

### Tools (221 total)

The server exposes tools for everything your Businys account has active:

| Practice | Tools |
|---|---|
| Photography | Clients, quotes, galleries, contracts, invoices, gear, licensing |
| Fitness | Clients, programs, workouts, progress tracking, sessions |
| Design | Projects, proposals, contracts, invoices, deliverables |
| Brand | Brand guidelines, identity systems, deliverables |
| Videography | Projects, shot lists, contracts, deliverables |
| Yoga | Classes, memberships, bookings, packages |
| Life Coaching | Sessions, programs, check-ins, goals |
| Consulting | Engagements, deliverables, timesheets |
| Tutoring | Students, sessions, progress, packages |
| Music Lessons | Students, lesson plans, sessions, packages |
| Online Courses | Courses, modules, enrollments, progress |
| Wedding Planning | Weddings, vendors, timelines, budgets |
| Social Media | Clients, campaigns, content calendars |
| Hair Salon | Clients, appointments, services, packages |
| Nail Tech | Clients, appointments, services, packages |
| Massage Therapy | Clients, intake forms, packages, SOAP notes |
| Tattoo | Clients, bookings, deposits, aftercare |
| Cleaning | Properties, checklists, schedules, invoicing |
| Landscaping | Properties, services, schedules, invoicing |
| Pet Grooming | Pets, clients, appointments, services |
| Newsletter | Subscribers, issues, sponsorships, analytics |
| YouTube Creator | Videos, sponsors, analytics, revenue |
| Podcasting | Episodes, guests, sponsors, analytics |
| Copywriting | Clients, projects, briefs, deliverables |
| Freelance Dev | Clients, projects, timesheets, invoices |
| AI Consulting | Clients, engagements, prompt libraries |

Plus cross-practice tools: clients, invoices, contracts, bookings, assets, automations, bulk operations, and more.

### Resources

- `hiatys://context/current` — Live business context snapshot
- `hiatys://data/clients` — Active client list
- `hiatys://clients/{id}` — Individual client details
- `hiatys://context/{sections}` — Selective context by section
- `hiatys://profiles/{slug}` — Public profile page data

### Tool Discovery

Use the built-in `get_manifest` tool to see all available tools, groups, and resources for your account.

## Environment Variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `HIATYS_API_KEY` | Yes | — | Your Businys API key |
| `HIATYS_BASE_URL` | No | `https://businys.app` | Override for self-hosted or staging |

## Transport

This package runs as a **stdio transport** — suitable for Claude Desktop, Cursor, Cline, and other local MCP clients.

For HTTP/streamable-http transport, connect directly to `https://businys.app/api/mcp` using your API key as a Bearer token.

## Data & Privacy

- All data lives in your Businys account
- The server proxies API calls — no data is stored by the MCP server process
- Canadian data residency (`ca-central-1`) — PIPEDA compliant
- Full data export available at any time from Settings

## License

MIT — see [LICENSE](LICENSE)

## Links

- [Businys](https://businys.app)
- [Documentation](https://businys.app/docs)
- [Issues](https://github.com/hiatys/businys-mcp/issues)
- [MCP Server Card](https://businys.app/.well-known/mcp-server-card.json)
